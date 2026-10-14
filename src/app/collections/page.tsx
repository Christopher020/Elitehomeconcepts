import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { CollectionCard, PageHero, VisitBand } from "@/components/sections";
import { Container } from "@/components/ui";
import { collections } from "@/content/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Living room, bedroom, dining, home office, outdoor furniture and décor from Elite Home Concepts, Lagos.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title={
          <>
            Every room,
            <br />
            considered.
          </>
        }
        intro="Browse by room. Every collection can be seen in person, adjusted to your measurements, or put together as part of a full interior."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 120}>
                <CollectionCard
                  collection={c}
                  index={i}
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
