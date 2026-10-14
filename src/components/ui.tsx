import Link from "next/link";
import type { ReactNode } from "react";

import { site } from "@/content/site";

import { ArrowRight } from "./icons";

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-3 px-7 text-[0.8125rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300";

const variants = {
  primary: "bg-ink text-paper hover:bg-brand",
  brand: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink hover:bg-brand hover:text-white",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  arrow = true,
  className = "",
}: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1" />
      ) : null}
    </>
  );

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-brand ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** The business email, allowed to wrap before the "@" rather than mid-word on narrow screens. */
export function EmailText() {
  const [user, domain] = site.email.split("@");
  return (
    <>
      {user}
      <wbr />@{domain}
    </>
  );
}
