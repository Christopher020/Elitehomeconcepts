import type { Metadata } from "next";
import Image from "next/image";

import craft from "@/assets/images/craft.jpg";
import heroDetail from "@/assets/images/hero-detail.jpg";
import hero from "@/assets/images/hero.jpg";
import interiors1 from "@/assets/images/interiors-1.jpg";
import { Compass, Lamp, Sofa } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { CollectionCard, Marquee, VisitBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { collections } from "@/content/collections";
import { processSteps } from "@/content/services";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pillars = [
  {
    icon: Sofa,
    title: "Furniture",
    body: "Living, bedroom, dining, office and outdoor pieces, chosen for how they are built as much as how they look.",
  },
  {
    icon: Compass,
    title: "Interiors",
    body: "Room-by-room design, space planning and full furnishing, from a single lounge to a whole home or office.",
  },
  {
    icon: Lamp,
    title: "Décor",
    body: "Lighting, rugs, mirrors, art and accessories: the layers that make a room feel finished.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="anim-rise">
                {/* Keep each "·" with the word before it so the separator never starts a line. */}
                <Eyebrow>{site.tagline.replaceAll(" · ", " · ")}</Eyebrow>
              </div>
              <h1
                className="anim-lift mt-7 font-display text-[clamp(3rem,7.4vw,6.75rem)] leading-[0.95] tracking-[-0.015em]"
                style={{ animationDelay: "100ms" }}
              >
                Homes, composed
                <br />
                with <span className="text-brand">intent.</span>
              </h1>
              <p
                className="anim-lift mt-8 max-w-md text-lg leading-relaxed text-muted"
                style={{ animationDelay: "220ms" }}
              >
                Furniture, interiors and décor from Lagos, for rooms that are made to be lived in and look the part
                every day.
              </p>
              <div className="anim-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "340ms" }}>
                <ButtonLink href="/collections">Explore collections</ButtonLink>
                <ButtonLink
                  href={whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`)}
                  external
                  variant="outline"
                  arrow={false}
                >
                  Chat on WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:ml-auto sm:w-[85%]">
                <Image
                  src={hero}
                  alt="A styled modern living room"
                  preload
                  fetchPriority="high"
                  placeholder="blur"
                  sizes="(min-width: 1440px) 560px, (min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
                  className="anim-settle size-full object-cover"
                />
              </div>
              <div
                className="anim-unveil absolute -bottom-8 left-0 hidden aspect-square w-[38%] overflow-hidden border-8 border-paper bg-sand sm:block"
                style={{ animationDelay: "500ms" }}
              >
                <Image
                  src={heroDetail}
                  alt="Upholstery and finish detail"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 18vw, 35vw"
                  className="size-full object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="anim-draw absolute -top-6 right-0 hidden h-px w-1/2 bg-brand sm:block"
                style={{ animationDelay: "700ms" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={collections.map((c) => c.name)} />

      {/* ---------- What we do ---------- */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
                One team for the piece, the room and the finish.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="text-lg leading-relaxed text-muted lg:mt-14">
                Some clients come to us for a single sofa. Others hand us the keys to an empty house. Either way you
                deal with one team that knows the furniture, understands the space and handles delivery and setup.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="bg-paper">
                <div className="flex h-full flex-col p-8 lg:p-12">
                  <p.icon className="size-9 text-brand" />
                  <h3 className="mt-10 font-display text-3xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Collections ---------- */}
      <section className="pb-24 lg:pb-36">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <Eyebrow>Collections</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">Shop by room.</h2>
            </Reveal>
            <Reveal delay={100}>
              <ButtonLink href="/collections" variant="outline">
                All collections
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ---------- Interiors feature ---------- */}
      <section className="bg-ink py-24 text-paper lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <Image
                  src={interiors1}
                  alt="A furnished modern living room"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#ff5a6e]">
                  <span aria-hidden="true" className="h-px w-8 bg-[#ff5a6e]" />
                  Interiors
                </p>
                <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
                  From empty room to move-in ready.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-paper/70">
                  We plan the layout, source every piece and style the finished room, so you get one result instead of
                  a dozen decisions.
                </p>
              </Reveal>
              <ol className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
                {processSteps.map((s, i) => (
                  <li key={s.step}>
                    <Reveal delay={i * 90} className="flex gap-6 py-5">
                      <span className="font-display text-lg text-paper/60">{s.step}</span>
                      <span>
                        <span className="block font-display text-xl">{s.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-paper/70">{s.body}</span>
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <Reveal className="mt-10">
                <ButtonLink href="/interiors" variant="light">
                  Interior services
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Craft statement ---------- */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>How we choose</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.04]">
                Built to last. Chosen to fit.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We look at frames, joinery, foam and fabric before we look at trends. Then we help you pick sizes and
                finishes that suit your room, your light and the way your household actually uses the space.
              </p>
              <div className="mt-10">
                <ButtonLink href="/about" variant="outline">
                  About us
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={craft}
                  alt="Close-up of furniture craftsmanship"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <VisitBand />
    </>
  );
}
