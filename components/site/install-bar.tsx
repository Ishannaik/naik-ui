"use client";

import { useState } from "react";

export function InstallBar({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
      <code className="flex-1 overflow-x-auto border border-line bg-bg-2 px-3 py-2 font-mono text-[12px]">
        {command}
      </code>
      <button
        type="button"
        className="h-9 border border-accent bg-accent px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink"
        style={{ borderRadius: 4 }}
        onClick={async () => {
          await navigator.clipboard.writeText(command);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
