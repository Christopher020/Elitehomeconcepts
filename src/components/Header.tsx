"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/brand/logo.png";
import { nav, site, whatsappLink } from "@/content/site";

import { Close, Menu } from "./icons";
import { EmailText } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation (render-time state adjustment).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    // Keep keyboard and screen-reader focus inside the open menu.
    const background = [...document.body.children].filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el !== headerRef.current && el.tagName !== "SCRIPT",
    );
    for (const el of background) el.inert = true;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    // The menu is mobile-only; close it if the viewport grows to desktop.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = overflow;
      for (const el of background) el.inert = false;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/* Background lives on its own layer: a backdrop-filter on <header> itself would
          become the containing block for the fixed mobile menu and collapse it. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md transition-opacity duration-500 ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
        <Link href="/" aria-label={`${site.name}, home`} className="relative z-10 shrink-0">
          <Image
            src={logo}
            alt={site.name}
            loading="eager"
            sizes="200px"
            className="h-11 w-auto lg:h-[3.25rem]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-draw pb-1 text-[0.8125rem] font-medium uppercase tracking-[0.2em] transition-colors ${
                      active ? "text-brand" : "text-ink hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center bg-ink px-6 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-brand"
          >
            Enquire
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-10 -mr-2 hidden size-12 items-center justify-center in-[.js]:max-lg:inline-flex"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
        {/* Without JavaScript the toggle can't work, so link to the footer navigation instead. */}
        <a
          href="#footer-nav"
          aria-label="Menu"
          className="relative z-10 -mr-2 inline-flex size-12 items-center justify-center lg:hidden in-[.js]:hidden"
        >
          <Menu className="size-6" />
        </a>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="anim-fade fixed inset-0 top-20 flex flex-col justify-between overflow-y-auto overscroll-contain bg-paper px-5 pt-8 pb-10 sm:px-8 lg:hidden h-md:pt-6 h-md:pb-6 h-sm:pt-3 h-sm:pb-3"
        >
          <nav aria-label="Mobile">
            {/* Two columns on short screens (landscape phones) so every link fits without scrolling. */}
            <ul className="flex flex-col h-sm:grid h-sm:grid-cols-2 h-sm:gap-x-8">
              {nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="anim-rise border-b border-line" style={{ animationDelay: `${60 + i * 60}ms` }}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-5 font-display text-4xl h-md:py-4 h-sm:py-2 h-sm:text-3xl ${active ? "text-brand" : "text-ink"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="anim-rise mt-10 text-sm h-md:mt-6 h-sm:mt-2 h-sm:flex h-sm:flex-wrap h-sm:gap-x-8" style={{ animationDelay: "400ms" }}>
            <a className="flex min-h-11 w-fit items-center text-ink" href={`tel:${site.phone.intl}`}>
              {site.phone.display}
            </a>
            <a className="flex min-h-11 w-fit items-center [overflow-wrap:anywhere] text-ink" href={`mailto:${site.email}`}>
              <span>
                <EmailText />
              </span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
