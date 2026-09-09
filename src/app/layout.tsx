import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import { courseMeta } from "@/data/course";
import { StickyTopBar } from "@/components/feed/StickyTopBar";
import { FeedNav } from "@/components/feed/FeedNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: courseMeta.title,
    template: `%s | ${courseMeta.shortTitle}`,
  },
  description: courseMeta.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} min-h-screen bg-phoenix-black font-sans text-phoenix-ink antialiased`}
      >
        <ProgressProvider>
          <div className="mx-auto flex min-h-screen max-w-phone flex-col bg-phoenix-black shadow-glow sm:my-0">
            <StickyTopBar />
            <main className="flex-1">{children}</main>
            <FeedNav />
          </div>
        </ProgressProvider>
      </body>
    </html>
  );
}
