import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// @ts-expect-error JS plugin alongside TS vite config
import { grokPwaPlugin } from "./scripts/grok-pwa-plugin.mjs";

// @ts-expect-error JS plugin alongside TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";

import { isMigrationFile } from "./scripts/migration-plan.mjs";

function hasGlobbedMigrations(root: string): boolean {
  try {
    return readdirSync(join(root, "migrations")).some(isMigrationFile);
  } catch {
    return false;
  }
}

function pgliteBootstrapPlugin(): Plugin {
  return {
    name: "app-builder:pglite-bootstrap",
    apply: "serve",

    async configureServer(server) {
      if (!hasGlobbedMigrations(server.config.root)) return;

      try {
        const mod = (await server.ssrLoadModule("/src/lib/db.ts")) as {
          ensureDbReady?: () => Promise<void>;
        };

        if (typeof mod.ensureDbReady === "function") {
          await mod.ensureDbReady();
        }
      } catch (err) {
        console.error("[app-builder] DB bootstrap failed:", err);
        throw err;
      }
    },
  };
}

function authPopupPlugin(): Plugin {
  return {
    name: "app-builder:auth-popup",
    apply: "serve",

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url ?? "";
          const pathOnly = rawUrl.split("?", 1)[0] ?? "";

          if (pathOnly !== "/auth/popup") {
            next();
            return;
          }

          if ((req.method ?? "GET").toUpperCase() !== "GET") {
            res.statusCode = 405;
            res.end("Method Not Allowed");
            return;
          }

          const host = String(
            req.headers.host ?? "localhost:8080"
          );

          const request = new Request(
            `http://${host}${rawUrl}`,
            {
              method: "GET",
              headers: req.headers as HeadersInit,
            }
          );

          const mod = (await server.ssrLoadModule(
            "/src/lib/auth/popup.server.ts"
          )) as {
            handleAuthPopupRequest: (
              req: Request
            ) => Promise<Response>;
          };

          const response =
            await mod.handleAuthPopupRequest(request);

          res.statusCode = response.status;

          response.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });

          const body = Buffer.from(
            await response.arrayBuffer()
          );

          res.end(body);

        } catch (err) {
          console.error(
            "[app-builder] auth popup failed:",
            err
          );

          if (!res.headersSent) {
            res.statusCode = 500;
            res.end("auth popup failed");
          }
        }
      });
    },
  };
}


export default defineConfig(({ command, isPreview }) => ({
  /*
    GitHub Pages repository path
    https://agriniasyah84-cmd.github.io/xcvxv/
  */
  base: "/xcvxv/",


  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },


  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },


  resolve: {
    tsconfigPaths: true,
  },


  plugins: [

    pgliteBootstrapPlugin(),

    authPopupPlugin(),

    appEnvPlugin(),

    grokPwaPlugin(),

    tailwindcss(),


    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),


    ...(command === "build" || isPreview
      ? [
          nitro({
            preset: "static",
            serverDir: "./server",
          }),
        ]
      : []),


    viteReact(),

  ],
}));
