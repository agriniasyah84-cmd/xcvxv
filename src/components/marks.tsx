import { cn } from "@/lib/utils";

export function FanMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("text-current", className)}
      aria-hidden
    >
      <path
        d="M60 108 L14 38 A52 52 0 0 1 106 38 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <line x1="60" y1="108" x2="15" y2="48" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="28" y2="32" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="46" y2="24" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="60" y2="22" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="74" y2="24" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="92" y2="32" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="60" y1="108" x2="105" y2="48" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <circle cx="60" cy="108" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function UmbrellaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("text-current", className)}
      aria-hidden
    >
      <path
        d="M16 58 C16 28 38 16 60 16 C82 16 104 28 104 58 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path d="M16 58 H104" stroke="currentColor" strokeWidth="1.4" />
      <path d="M60 16 V58" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
      <path d="M38 22 V58" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <path d="M82 22 V58" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <path d="M60 58 V98" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M60 98 C60 106 70 108 74 102"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full bg-line", className)}
      role="presentation"
    />
  );
}
