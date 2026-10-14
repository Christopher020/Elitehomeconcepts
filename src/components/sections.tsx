import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { Collection } from "@/content/collections";
import { fullAddress, mapsUrl, site, whatsappLink } from "@/content/site";

import { ArrowUpRight, Mail, Phone, Pin } from "./icons";
import { Reveal } from "./Reveal";
import { ButtonLink, Container, EmailText, Eyebrow } from "./ui";

/** Page-top hero used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
}) {
  return (
    <section className="pt-32 lg:pt-44">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="anim-rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1
              className="anim-lift mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.01em]"
              style={{ animationDelay: "100ms" }}
            >
              {title}
            </h1>
          </div>
          {intro ? (
            <p
              className="anim-lift max-w-md text-lg leading-relaxed text-muted lg:col-span-5 lg:justify-self-end"
              style={{ animationDelay: "220ms" }}
            >
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
      {image ? (
        <Container className="mt-14 lg:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand lg:aspect-[21/9]">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              preload
              fetchPriority="high"
              placeholder="blur"
              sizes="(min-width: 1440px) 1344px, 100vw"
              className="anim-settle size-full object-cover"
            />
          </div>
        </Container>
      ) : null}
    </section>
  );
}

/** Collection card with hover zoom. */
export function CollectionCard({ collection, index, sizes }: { collection: Collection; index: number; sizes: string }) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={collection.cover}
          alt={`${collection.name} collection`}
          placeholder="blur"
          sizes={sizes}
          className="zoom-img size-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-[0.6875rem] font-medium tracking-[0.2em] text-ink backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl">{collection.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{collection.summary}</p>
        </div>
        <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center border border-ink/20 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

/** Dark call-to-action band shared across pages. */
export function VisitBand() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Visit or call</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
              Let&apos;s talk about your space.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Send us photos or measurements on WhatsApp, call us, or visit us off Allen Avenue. We&apos;ll help you work
              out what fits, what it costs and how soon it can be delivered.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`)} external variant="brand">
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink href={`tel:${site.phone.intl}`} external variant="outline" arrow={false}>
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={150}>
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-4 py-5">
                  <Pin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="leading-relaxed">
                    {fullAddress}
                    <span className="mt-1 block text-sm text-muted group-hover:text-brand">Get directions →</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.intl}`} className="flex gap-4 py-5 hover:text-brand">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-4 py-5 [overflow-wrap:anywhere] hover:text-brand">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <EmailText />
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Infinite category ticker. Duplicate set is hidden from assistive tech. */
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-12 font-display text-3xl whitespace-nowrap text-ink/80 sm:text-4xl">
          {item}
          <span aria-hidden="true" className="size-2 rotate-45 bg-brand" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-line py-7">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
