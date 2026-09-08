"use client";

import { LoaderCircle } from "lucide-react";
import type { ReactNode } from "react";

type Provider = "github" | "google" | "discord";

function GitHubMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.26 3.4 9.72 8.12 11.3.6.1.82-.26.82-.58v-2.2c-3.3.73-4-1.43-4-1.43-.54-1.4-1.32-1.77-1.32-1.77-1.08-.76.08-.74.08-.74 1.2.08 1.83 1.26 1.83 1.26 1.06 1.85 2.78 1.32 3.46 1 .1-.8.41-1.32.75-1.62-2.64-.31-5.42-1.35-5.42-6.02 0-1.33.46-2.42 1.23-3.27-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.25a11.4 11.4 0 0 1 6 0c2.28-1.58 3.28-1.25 3.28-1.25.66 1.69.25 2.94.12 3.25.77.85 1.23 1.94 1.23 3.27 0 4.68-2.79 5.7-5.45 6 .42.37.8 1.1.8 2.22v3.29c0 .32.22.69.83.57A11.5 11.5 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.35 11.1h-9.17v2.96h5.27c-.23 1.5-1.78 4.4-5.27 4.4-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.89 4.59 14.7 3.6 12.18 3.6 7.03 3.6 2.9 7.7 2.9 12.6s4.13 9 9.28 9c5.36 0 8.9-3.76 8.9-9.05 0-.6-.07-1.06-.16-1.45z" />
    </svg>
  );
}

function DiscordMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.7 5.3A18 18 0 0 0 15.2 4l-.2.4a16.6 16.6 0 0 1 3.9 1.2 16 16 0 0 0-12.8 0A16.4 16.4 0 0 1 9 4.4L8.8 4a18 18 0 0 0-4.5 1.3C1.5 9.1.8 12.8 1.1 16.4A18.3 18.3 0 0 0 6.6 18l.6-.9a12 12 0 0 1-1.8-.9l.4-.3a13 13 0 0 0 11.4 0l.4.3a12 12 0 0 1-1.8.9l.6.9a18.2 18.2 0 0 0 5.5-1.6c.5-4.1-.6-7.7-2.7-11.1zM8.7 14.4c-.8 0-1.5-.8-1.5-1.7s.6-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm6.6 0c-.8 0-1.5-.8-1.5-1.7s.6-1.7 1.5-1.7 1.5.8 1.5 1.7-.6 1.7-1.5 1.7z" />
    </svg>
  );
}

const marks: Record<Provider, { label: string; icon: () => ReactNode }> = {
  github: { label: "GitHub", icon: GitHubMark },
  google: { label: "Google", icon: GoogleMark },
  discord: { label: "Discord", icon: DiscordMark },
};

export function SocialLogin({
  provider,
  loading = false,
  onClick,
}: {
  provider: Provider;
  loading?: boolean;
  onClick?: () => void;
}) {
  const item = marks[provider];
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className="flex w-full items-center justify-center gap-2 border border-[var(--line)] bg-[var(--bg-2)] px-4 py-2 text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)] disabled:opacity-60"
      style={{ borderRadius: 4 }}
    >
      {loading ? <LoaderCircle size={15} className="animate-spin" /> : <Icon />}
      Continue with {item.label}
    </button>
  );
}

export function Preview() {
  return (
    <div className="grid max-w-xs gap-2">
      <SocialLogin provider="github" />
      <SocialLogin provider="google" />
      <SocialLogin provider="discord" />
    </div>
  );
}
