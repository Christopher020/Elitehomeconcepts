import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { CollectionCard, PageHero, VisitBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { collections, getCollection } from "@/content/collections";
import { site, whatsappLink } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: `${collection.name} Furniture`,
    description: `${collection.summary} ${collection.name} furniture from ${site.name}, Lagos.`,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: {
      title: `${collection.name} | ${site.name}`,
      description: collection.summary,
      images: [{ url: collection.cover.src, width: collection.cover.width, height: collection.cover.height }],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const index = collections.findIndex((c) => c.slug === collection.slug);
  const others = [1, 2, 3].map((n) => collections[(index + n) % collections.length]);
  const enquiry = whatsappLink(`Hello ${site.name}, I'm interested in your ${collection.name} collection.`);

  return (
    <>
      <PageHero
        eyebrow={`Collection ${String(index + 1).padStart(2, "0")}`}
        title={collection.name}
        intro={collection.summary}
        image={collection.cover}
        imageAlt={`${collection.name} collection`}
      />

      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-snug">{collection.intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={enquiry} external variant="brand">
                  Enquire on WhatsApp
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Book a visit
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
              <Eyebrow>In this collection</Eyebrow>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {collection.pieces.map((piece) => (
                  <li key={piece} className="flex items-center justify-between py-4">
                    {piece}
                    <span aria-hidden="true" className="size-1.5 rotate-45 bg-brand" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-36" aria-label={`${collection.name} gallery`}>
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {collection.gallery.map((g, i) => (
              <Reveal
                key={g.src.src}
                delay={i * 120}
                className={
                  i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:row-span-2" : "md:col-span-7"
                }
              >
                <div className={`relative overflow-hidden bg-sand ${i === 1 ? "aspect-[4/5] md:h-full md:aspect-auto" : "aspect-[4/3]"}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    placeholder="blur"
                    // The tall tile spans two 4:3 rows, so its 4:5 image is cropped and drawn ~1.2x the 7-column width.
                    sizes={
                      i === 1
                        ? "(min-width: 1440px) 950px, (min-width: 768px) 66vw, 100vw"
                        : "(min-width: 1440px) 775px, (min-width: 768px) 54vw, 100vw"
                    }
                    className="size-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <Eyebrow>Keep exploring</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">More collections</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/collections" className="inline-flex min-h-11 items-center gap-2 text-sm uppercase tracking-[0.2em]">
                <span className="link-draw">View all</span> <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={i * 120} className={i === 2 ? "sm:hidden lg:block" : undefined}>
                <CollectionCard
                  collection={c}
                  index={collections.indexOf(c)}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <VisitBand />
    </>
  );
}
