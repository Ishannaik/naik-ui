"use client";

import { useEffect, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Drawer } from "vaul";
import { Button } from "./button";

export function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return mobile;
}

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

const panel =
  "border border-[var(--line)] bg-[var(--bg-2)] p-5 text-[var(--fg)] outline-none";

export function AdaptiveDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: Props) {
  const mobile = useIsMobile();
  if (mobile) {
    return (
      <Drawer.Root open={open} onOpenChange={onOpenChange}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-black/50" />
          <Drawer.Content
            className={`fixed inset-x-0 bottom-0 z-50 ${panel}`}
            style={{ borderRadius: "4px 4px 0 0" }}
          >
            <Drawer.Title className="font-display text-lg font-bold">{title}</Drawer.Title>
            {description ? (
              <Drawer.Description className="mt-1 text-sm text-[var(--fg-dim)]">
                {description}
              </Drawer.Description>
            ) : null}
            <div className="mt-4">{children}</div>
            {footer ? <div className="mt-5">{footer}</div> : null}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          className={`fixed top-1/2 left-1/2 z-50 w-[min(28rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 ${panel}`}
          style={{ borderRadius: 4 }}
        >
          <Dialog.Title className="font-display text-lg font-bold">{title}</Dialog.Title>
          {description ? (
            <Dialog.Description className="mt-1 text-sm text-[var(--fg-dim)]">
              {description}
            </Dialog.Description>
          ) : null}
          <div className="mt-4">{children}</div>
          {footer ? <div className="mt-5">{footer}</div> : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Preview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open adaptive dialog</Button>
      <AdaptiveDialog
        open={open}
        onOpenChange={setOpen}
        title="Melt this batch?"
        description="Dialog on a desk. Drawer on a phone."
        footer={
          <Button tone="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        Same props. The chrome changes.
      </AdaptiveDialog>
    </>
  );
}
