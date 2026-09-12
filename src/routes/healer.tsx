import { createFileRoute } from "@tanstack/react-router";
import { BuildPage } from "@/components/build-page";
import { healerBuild } from "@/data/healer";

export const Route = createFileRoute("/healer")({
  component: HealerPage,
  head: () => ({
    meta: [{ title: "Healer Silkbind–Deluge · Kipas & Payung" }],
  }),
});

function HealerPage() {
  return <BuildPage build={healerBuild} />;
}
