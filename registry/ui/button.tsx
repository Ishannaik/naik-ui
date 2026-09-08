"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border font-medium transition-[filter,background-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      tone: {
        sodium:
          "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] hover:brightness-110",
        ghost: "border-[var(--line)] bg-transparent text-[var(--fg)] hover:bg-[var(--bg-2)]",
        water: "border-[var(--water)] bg-[var(--water)] text-white hover:brightness-110",
        danger: "border-[var(--danger)] bg-[var(--danger)] text-white",
        mute: "border-[var(--line)] bg-[var(--bg-2)] text-[var(--fg-dim)] hover:text-[var(--fg)]",
      },
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-9 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: { tone: "sodium", size: "md" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    href?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

export function Button({
  className,
  tone,
  size,
  asChild,
  loading,
  href,
  leftIcon,
  rightIcon,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ tone, size }), className);
  const content = (
    <>
      {loading ? (
        <span
          className="h-3 w-3 animate-spin border-2 border-current border-t-transparent"
          style={{ borderRadius: 99 }}
          aria-hidden
        />
      ) : null}
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );
  const style = { borderRadius: 4 };
  if (href) {
    return (
      <a href={href} className={classes} style={style} aria-disabled={disabled || loading}>
        {content}
      </a>
    );
  }
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={classes} style={style} disabled={disabled || loading} type={type} {...props}>
      {content}
    </Comp>
  );
}

export function Preview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Melt</Button>
      <Button tone="ghost">Hold</Button>
      <Button tone="water" loading>
        Casting
      </Button>
      <Button tone="danger" size="sm">
        Scrap
      </Button>
    </div>
  );
}
