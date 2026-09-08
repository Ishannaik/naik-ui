import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Tektur } from "next/font/google";
import { Providers } from "@/components/site/providers";
import { Shell } from "@/components/site/shell";
import "./globals.css";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://components.ishannaik.com"),
  title: {
    default: "NAIK — source you keep",
    template: "%s · NAIK",
  },
  description:
    "Ishan Naik’s component foundry. Install the source. Mumbai night, sodium lamp, monsoon water.",
  openGraph: {
    title: "NAIK — source you keep",
    description: "A shadcn-style registry of Ishan’s components.",
    url: "https://components.ishannaik.com",
    siteName: "NAIK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tektur.variable} ${plex.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg text-fg antialiased">
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
