"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled || open
          ? "border-b border-border bg-[color-mix(in_srgb,var(--color-bg)_94%,white)] shadow-[var(--shadow-sm)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/#accueil" className="min-w-0">
          <span className="font-display block text-[1.15rem] leading-tight text-navy sm:text-xl">
            {site.name}
          </span>
          <span className="mt-0.5 block text-xs font-medium text-muted sm:text-[0.8125rem]">
            {site.title} · {site.city}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius-sm)] px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-soft hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="btn btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            Prendre rendez-vous
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-4 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-border bg-surface xl:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="container-page flex flex-col py-3"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-navy hover:bg-primary-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn btn-primary mt-2"
            onClick={() => setOpen(false)}
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
