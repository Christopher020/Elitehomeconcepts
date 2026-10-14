import type { Metadata } from "next";
import Image from "next/image";

import interiors1 from "@/assets/images/interiors-1.jpg";
import interiors2 from "@/assets/images/interiors-2.jpg";
import interiors3 from "@/assets/images/interiors-3.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHero, VisitBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { processSteps, services } from "@/content/services";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Interior Design",
  description:
    "Interior design, space planning, furnishing and styling for homes and offices in Lagos, by Elite Home Concepts.",
  alternates: { canonical: "/interiors" },
};

export default function InteriorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Interiors"
        title={
          <>
            Rooms planned,
            <br />
            furnished, finished.
          </>
        }
        intro="Whether it's one room or a whole home or office, we take it from brief to handover so you only have to make the decisions that matter."
        image={interiors1}
        imageAlt="A furnished modern living room"
      />

      {/* Services */}
      <section className="py-24 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
              Take what you need, or hand us the whole project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 120} className="bg-paper">
                <div className="flex h-full flex-col p-8 lg:p-12">
                  <span className="font-display text-lg text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-display text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-ink py-24 text-paper lg:py-36">
        <Container>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#ff5a6e]">
              <span aria-hidden="true" className="h-px w-8 bg-[#ff5a6e]" />
              Process
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
              Four steps, one point of contact.
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 120} className="border-t border-paper/20 pt-8">
                  <span className="font-display text-5xl text-paper/30">{s.step}</span>
                  <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/70">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Project images */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={interiors2}
                  alt="A modern dining room"
                  placeholder="blur"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:mt-24">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={interiors3}
                  alt="A calm modern bedroom"
                  placeholder="blur"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-20 flex flex-col items-start gap-8 border-t border-line pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-snug">
              Have a space in mind? Send us photos and rough measurements to get started.
            </p>
            <ButtonLink
              href={whatsappLink(`Hello ${site.name}, I'd like to discuss an interior project.`)}
              external
              variant="brand"
            >
              Start a project
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <VisitBand />
    </>
  );
}
