"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const PRODUCT_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#compare", label: "Compare" },
];

const COMPANY_LINKS = [
  { href: "https://themvpguy.vercel.app", label: "About", external: true },
  { href: "mailto:themvpguy.contact@gmail.com", label: "Contact", external: true },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/muhammadtanveerabbas", label: "GitHub", icon: Github },
  { href: "https://x.com/m_tanveerabbas", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com/in/muhammadtanveerabbas", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:themvpguy.contact@gmail.com", label: "Email", icon: Mail },
];

export function MktFooter() {
  return (
    <footer className="bg-white text-stone-600 border-t border-stone-200">
      {/* CTA band */}
      <div className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-10 sm:py-12">
          <div className="relative rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-amber-500/[0.06]" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-6 sm:px-8 py-8 sm:py-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-orange-500 text-[11px] font-semibold uppercase tracking-[0.14em] mb-3">
                  <Sparkles size={12} />
                  Start creating smarter
                </div>
                <h3
                  className="font-serif text-2xl sm:text-3xl font-light text-stone-900 tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Turn any content into your next hit.
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed m-0">
                  Summarize YouTube videos, articles, and notes. Remix for every platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center gap-1.5 min-h-[48px] px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold no-underline transition-colors shadow-md shadow-orange-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Get started
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-600 hover:text-stone-900 text-sm font-medium no-underline transition-colors"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 no-underline mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span
                className="font-serif text-xl font-light text-stone-900 tracking-tight"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Clario
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs mb-5">
              AI-powered content platform for creators. Summarize, remix, and chat with AI that adapts to your brand voice.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-orange-400 hover:bg-orange-50 transition-all"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 list-none m-0 p-0">
              {PRODUCT_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-600 hover:text-orange-500 no-underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 list-none m-0 p-0">
              {COMPANY_LINKS.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-stone-600 hover:text-orange-500 no-underline transition-colors group"
                    >
                      {label}
                      {!href.startsWith("mailto:") && (
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  ) : (
                    <Link href={href} className="text-sm text-stone-600 hover:text-orange-500 no-underline transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="lg:col-span-3 sm:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-orange-400 hover:bg-orange-50 transition-all text-xs font-medium no-underline"
                  aria-label={label}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500 m-0 text-center sm:text-left">
            © {new Date().getFullYear()} Clario. Built by{" "}
            <a
              href="https://themvpguy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 hover:text-orange-600 no-underline transition-colors"
            >
              The MVP Guy
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-stone-700 no-underline transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-stone-500 hover:text-stone-700 no-underline transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
