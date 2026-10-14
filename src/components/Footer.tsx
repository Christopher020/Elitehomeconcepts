import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/assets/brand/logo-white.png";
import { collections } from "@/content/collections";
import { fullAddress, mapsUrl, nav, site, whatsappLink } from "@/content/site";

import { EmailText } from "./ui";

/* 44px-tall rows; the draw-in underline sits on the inner span so it stays under the text. */
const footerLink = "min-h-11 min-w-11 items-center text-paper/85 hover:text-paper";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      {/* Extra bottom padding keeps the last line clear of the floating WhatsApp button. */}
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src={logoWhite} alt={site.name} sizes="260px" className="h-14 w-auto" />
            <p className="mt-8 max-w-sm leading-relaxed text-paper/70">
              Furniture, interiors and décor for homes and workplaces across Lagos.
            </p>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center bg-brand px-7 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-dark"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            <nav id="footer-nav" aria-labelledby="footer-explore" className="scroll-mt-24">
              <h2 id="footer-explore" className="text-xs font-medium uppercase tracking-[0.28em] text-paper/50">
                Explore
              </h2>
              <ul className="mt-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={`${footerLink} inline-flex`}>
                      <span className="link-draw">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-paper/50">Collections</h2>
              <ul className="mt-3">
                {collections.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/collections/${c.slug}`} className={`${footerLink} inline-flex`}>
                      <span className="link-draw">{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-paper/50">Visit &amp; contact</h2>
              <address className="mt-3 not-italic text-paper/85">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block py-2.5 leading-relaxed hover:text-paper">
                  {fullAddress}
                </a>
                <a href={`tel:${site.phone.intl}`} className={`${footerLink} flex w-fit`}>
                  <span className="link-draw">{site.phone.display}</span>
                </a>
                <a href={`mailto:${site.email}`} className={`${footerLink} flex w-fit [overflow-wrap:anywhere]`}>
                  <span className="link-draw">
                    <EmailText />
                  </span>
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 pt-8 text-xs tracking-wide text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.28em]">{site.tagline}</p>
        </div>
      </div>
      <div aria-hidden="true" className="flex h-2">
        <span className="w-1/3 bg-brand" />
        <span className="flex-1 bg-black" />
      </div>
    </footer>
  );
}
