"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/feed/", label: "Feed", icon: "🏠" },
  { href: "/challenge/module-s31/", label: "Challenges", icon: "⚡" },
  { href: "/exam/", label: "Exam", icon: "🎬" },
  { href: "/certificate/", label: "Cert", icon: "📜" },
  { href: "/resources/", label: "Links", icon: "🔗" },
];

export function FeedNav() {
  const pathname = usePathname() || "";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-phoenix-black/95 backdrop-blur-xl no-print">
      <div className="mx-auto flex max-w-phone items-stretch justify-between px-1 pb-[env(safe-area-inset-bottom)]">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href.replace(/\/$/, "")) ||
            (item.label === "Challenges" && pathname.includes("/challenge"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-semibold ${
                active ? "text-phoenix-crimson" : "text-white/55"
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
