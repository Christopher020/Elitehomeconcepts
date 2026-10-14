import type { Metadata } from "next";
import Image from "next/image";

import about from "@/assets/images/about.jpg";
import craft from "@/assets/images/craft.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHero, VisitBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Home Concepts is a Lagos furniture, interiors and décor company off Allen Avenue. Learn how we work.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Quality first",
    body: "We check how a piece is made before we offer it: the frame, the joinery, the foam, the fabric and the finish.",
  },
  {
    title: "Right for the room",
    body: "Proportion matters more than price tags. We help you choose sizes and finishes that suit your space and your light.",
  },
  {
    title: "Straight answers",
    body: "Clear quotes, honest lead times and one point of contact from first message to final delivery.",
  },
  {
    title: "Finished properly",
    body: "Delivery, assembly and styling are part of the job, so the room is ready to use the day we leave.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Furniture and interiors,
            <br />
            from Lagos.
          </>
        }
        intro="Elite Home Concepts brings furniture, interior design and décor together under one roof, so homes and offices come together with less stress and a better result."
      />

      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={about}
                  alt="Sofas on display in a furniture showroom"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <Eyebrow>Our approach</Eyebrow>
                <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
                  Good rooms are built piece by piece.
                </h2>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                  <p>
                    We started Elite Home Concepts for people who want their homes and workplaces to feel considered,
                    without spending months chasing different suppliers.
                  </p>
                  <p>
                    You can walk in for a single chair or bring us an empty apartment. Either way we listen first, show
                    you options that suit the room, and look after delivery and setup.
                  </p>
                </div>
                <div className="mt-10">
                  <ButtonLink href="/contact">Get in touch</ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-36">
        <Container>
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110} className="border-t border-ink pt-8">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <div className="relative aspect-[16/9] overflow-hidden bg-sand lg:aspect-[21/9]">
              <Image
                src={craft}
                alt="Furniture craftsmanship detail"
                placeholder="blur"
                sizes="(min-width: 1440px) 1344px, 100vw"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <VisitBand />
    </>
  );
}
