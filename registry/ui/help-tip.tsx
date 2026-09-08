"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function HelpTip({ content, className }: { content: string; className?: string }) {
  return (
    <Tooltip.Provider delayDuration={120}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label={content}
            className={cn("inline-flex text-[var(--fg-dim)] hover:text-[var(--accent)]", className)}
          >
            <Info size={15} aria-hidden />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={6}
            className="z-50 max-w-64 border border-[var(--line)] bg-[var(--bg-2)] px-2 py-1 text-xs text-[var(--fg)]"
            style={{ borderRadius: 4 }}
          >
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function Preview() {
  return (
    <p className="text-sm text-[var(--fg-dim)]">
      Ward rainfall <HelpTip content="Calibrated against METAR VABB, last 120 minutes." />
    </p>
  );
}
