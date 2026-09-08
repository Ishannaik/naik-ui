"use client";

import { useState, type ReactNode } from "react";
import { Drawer } from "vaul";
import { Button } from "./button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children?: ReactNode;
};

export function BottomDrawer({ open, onOpenChange, title, children }: Props) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Drawer.Content
          className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-xl border border-[var(--line)] bg-[var(--bg-2)] p-5 text-[var(--fg)] outline-none"
          style={{ borderRadius: "4px 4px 0 0" }}
        >
          <Drawer.Title className="font-display text-lg font-bold">{title}</Drawer.Title>
          <div className="mt-4">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export function Preview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <BottomDrawer open={open} onOpenChange={setOpen} title="From the floor">
        <p className="text-sm text-[var(--fg-dim)]">Swipe down or press Close.</p>
        <div className="mt-4">
          <Button tone="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </BottomDrawer>
    </>
  );
}
