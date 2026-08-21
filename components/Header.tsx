"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { LogoMark, LogoType } from "@/components/Logo";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 6l4.5 4.5L12.5 6" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close desktop dropdowns on Escape or outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-pine-900/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <LogoMark className="h-9 w-9" />
          <LogoType />
        </Link>

        {/* Desktop nav */}
        <nav
          ref={navRef}
          aria-label="Primary"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {nav.map((item, i) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(i)}
                onMouseLeave={() => setOpenMenu((cur) => (cur === i ? null : cur))}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className="rounded-full py-2 pl-3 pr-1 text-[0.9rem] font-medium text-pine-950 transition-colors hover:text-copper-700"
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={openMenu === i}
                    aria-label={`${item.label} submenu`}
                    onClick={() => setOpenMenu(openMenu === i ? null : i)}
                    className="rounded-full p-1 text-pine-950 hover:text-copper-700"
                  >
                    <Chevron open={openMenu === i} />
                  </button>
                </div>
                {openMenu === i && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="overflow-hidden rounded-2xl border border-pine-900/10 bg-cream shadow-xl shadow-pine-950/10">
                      <ul className="py-2">
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-2.5 transition-colors hover:bg-pine-50"
                            >
                              <span className="block text-sm font-semibold text-pine-950">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-ink/60">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.9rem] font-medium text-pine-950 transition-colors hover:text-copper-700"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.bookHref}
            className="hidden rounded-full bg-copper-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-copper-700 sm:inline-block"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-pine-950 xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-pine-900/10 bg-cream xl:hidden"
        >
          <nav aria-label="Mobile" className="px-5 py-6">
            <ul className="divide-y divide-pine-900/10">
              {nav.map((item) => (
                <li key={item.href} className="py-3">
                  <Link
                    href={item.href}
                    className="block text-lg font-semibold text-pine-950"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-1 border-l-2 border-pine-100 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-[0.95rem] text-ink/75"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <Link
                href={site.bookHref}
                className="block rounded-full bg-copper-600 px-6 py-3.5 text-center text-base font-semibold text-white"
              >
                Book a Consultation
              </Link>
              <p className="text-center text-sm text-ink/60">
                Lexington (859) 224-2655 · Louisville (502) 306-9551
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
