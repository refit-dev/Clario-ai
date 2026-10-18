"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";

const NAV_LINKS: { href: string; label: string }[] = [];

function ClarioLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0 no-underline group"
    >
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/25 transition-all duration-300 group-hover:shadow-orange-500/40 group-hover:scale-[1.03]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
          <span
            className="font-serif text-[1.35rem] font-light tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Clario
          </span>

      </div>
    </Link>
  );
}

export function MktNav() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-stone-200/90 shadow-[0_4px_24px_-4px_rgba(28,25,23,0.08)]"
            : "bg-white/70 backdrop-blur-lg border-b border-transparent"
        }`}
      >
        <nav className="relative mx-auto flex h-[64px] max-w-7xl items-center justify-between gap-4 px-2 sm:px-4 lg:px-8">
          <ClarioLogo />

          {/* Links and actions sit together on the right, logo stays left */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-1 lg:gap-2">
            <ul className="flex items-center list-none m-0 p-0 mr-1 lg:mr-3">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = href === "/pricing" && pathname === "/pricing";
                return (
                  <li key={`${href}-${label}`} className="relative">
                    <Link
                      href={href}
                      className={`group relative inline-flex items-center px-3 py-2 text-sm font-medium no-underline transition-colors duration-200 lg:px-4 ${
                        isActive ? "text-stone-900" : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      {label}
                      <span className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-orange-500 transition-transform duration-200 origin-left lg:left-4 lg:right-4 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2 shrink-0">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center h-10 px-4 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors no-underline"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 h-10 px-4 rounded-lg transition-colors cursor-pointer border-0 shadow-sm shadow-orange-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/sign-up"
                  className="inline-flex items-center h-10 px-5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200 no-underline shadow-sm shadow-orange-500/30 hover:shadow-orange-500/45 active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Get started
                </Link>
              )}
            </div>
          </div>

          {/* Small screens: logo plus the primary action */}
          <div className="flex items-center gap-2 md:hidden">
            {!user && (
              <Link
                href="/sign-up"
                className="inline-flex items-center whitespace-nowrap h-9 px-3.5 text-[13px] font-semibold text-white bg-orange-500 rounded-lg no-underline shadow-sm shadow-orange-500/30 active:scale-[.98] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get started
              </Link>
            )}
          </div>
        </nav>


      </header>
    </>
  );
}
