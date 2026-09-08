"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { AdaptiveDialog } from "./adaptive-dialog";
import { Button } from "./button";

type ConfirmOpts = {
  title: string;
  description?: string;
  confirmLabel?: string;
  danger?: boolean;
};

type Ctx = {
  confirm: (opts: ConfirmOpts) => Promise<boolean>;
};

const DialogManagerContext = createContext<Ctx | null>(null);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [opts, setOpts] = useState<ConfirmOpts | null>(null);
  const [open, setOpen] = useState(false);
  const [resolve, setResolve] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((next: ConfirmOpts) => {
    setOpts(next);
    setOpen(true);
    return new Promise<boolean>((res) => setResolve(() => res));
  }, []);

  const finish = (value: boolean) => {
    setOpen(false);
    resolve?.(value);
    setResolve(null);
  };

  const value = useMemo(() => ({ confirm }), [confirm]);

  return (
    <DialogManagerContext.Provider value={value}>
      {children}
      <AdaptiveDialog
        open={open}
        onOpenChange={(next) => {
          if (!next) finish(false);
        }}
        title={opts?.title ?? ""}
        description={opts?.description}
        footer={
          <div className="flex justify-end gap-2">
            <Button tone="ghost" type="button" onClick={() => finish(false)}>
              Cancel
            </Button>
            <Button
              tone={opts?.danger ? "danger" : "sodium"}
              type="button"
              onClick={() => finish(true)}
            >
              {opts?.confirmLabel ?? "Confirm"}
            </Button>
          </div>
        }
      >
        {null}
      </AdaptiveDialog>
    </DialogManagerContext.Provider>
  );
}

export function useConfirm() {
  const ctx = useContext(DialogManagerContext);
  if (!ctx) throw new Error("useConfirm must be used inside DialogProvider");
  return ctx.confirm;
}

export function useConfirmDelete() {
  const confirm = useConfirm();
  return (name?: string) =>
    confirm({
      title: name ? `Delete ${name}?` : "Delete this?",
      description: "This does not undo.",
      confirmLabel: "Delete",
      danger: true,
    });
}

function ConfirmPreviewButton() {
  const confirm = useConfirm();
  return (
    <Button
      onClick={async () => {
        await confirm({
          title: "Scrap this melt?",
          description: "The heat stays. The batch does not.",
          confirmLabel: "Scrap",
          danger: true,
        });
      }}
    >
      Ask first
    </Button>
  );
}

export function Preview() {
  return (
    <DialogProvider>
      <ConfirmPreviewButton />
    </DialogProvider>
  );
}
