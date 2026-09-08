"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function MobileNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const titleId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] hover:border-accent"
        style={{ borderRadius: 4 }}
        onClick={() => setOpen(true)}
      >
        Parts
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-bg"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p id={titleId} className="font-display text-base font-bold tracking-[0.14em]">
              <span className="text-accent">न</span> Parts
            </p>
            <button
              type="button"
              className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] hover:border-accent"
              style={{ borderRadius: 4 }}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="scrollbar-thin flex-1 overflow-y-auto px-2 py-4">{children}</div>
        </div>
      ) : null}
    </div>
  );
}
