import type { Metadata } from "next";

import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center pt-32 pb-24">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98]">
          This room is still empty.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/collections" variant="outline">
            Browse collections
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
