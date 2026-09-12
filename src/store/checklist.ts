import { create } from "zustand";

const KEY = "kipas-payung-checklist";

function read(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, boolean>;
  } catch {
    return {};
  }
}

function write(done: Record<string, boolean>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(done));
  } catch {
    /* ignore quota */
  }
}

type State = {
  ready: boolean;
  done: Record<string, boolean>;
  hydrate: () => void;
  toggle: (id: string) => void;
  reset: () => void;
};

export const useChecklist = create<State>((set, get) => ({
  ready: false,
  done: {},
  hydrate: () => set({ done: read(), ready: true }),
  toggle: (id) => {
    const next = { ...get().done, [id]: !get().done[id] };
    set({ done: next });
    write(next);
  },
  reset: () => {
    set({ done: {} });
    write({});
  },
}));
