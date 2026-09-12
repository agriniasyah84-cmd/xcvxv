import { createFileRoute } from "@tanstack/react-router";
import { BuildPage } from "@/components/build-page";
import { dpsBuild } from "@/data/dps";

export const Route = createFileRoute("/dps")({
  component: DpsPage,
  head: () => ({
    meta: [{ title: "DPS Silkbind–Jade · Kipas & Payung" }],
  }),
});

function DpsPage() {
  return <BuildPage build={dpsBuild} />;
}
