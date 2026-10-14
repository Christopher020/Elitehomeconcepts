import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Chat, Mail, Phone, Pin } from "@/components/icons";
import { PageHero } from "@/components/sections";
import { Container, EmailText, Eyebrow } from "@/components/ui";
import { fullAddress, mapsUrl, site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call or WhatsApp ${site.phone.display}, email us, or visit Elite Home Concepts off Allen Avenue, Lagos.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Chat,
    label: "WhatsApp",
    value: site.phone.display,
    href: whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`),
    external: true,
  },
  { icon: Phone, label: "Call", value: site.phone.display, href: `tel:${site.phone.intl}`, external: false },
  { icon: Mail, label: "Email", value: <EmailText />, href: `mailto:${site.email}`, external: false },
  { icon: Pin, label: "Visit", value: fullAddress, href: mapsUrl, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about
            <br />
            your space.
          </>
        }
        intro="The quickest way to reach us is WhatsApp. Photos of your room and rough measurements help us give you useful answers straight away."
      />

      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Above the fold on desktop, so it animates in with CSS instead of waiting for <Reveal> to hydrate. */}
            <div className="anim-rise lg:col-span-5" style={{ animationDelay: "300ms" }}>
              <Eyebrow>Reach us</Eyebrow>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex gap-5 py-6"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center border border-line transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <c.icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-[0.22em] text-muted">
                          {c.label}
                        </span>
                        <span className="mt-1 block [overflow-wrap:anywhere] leading-relaxed group-hover:text-brand">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="anim-rise lg:col-span-6 lg:col-start-7" style={{ animationDelay: "420ms" }}>
              <div className="bg-sand p-8 sm:p-12">
                <h2 className="font-display text-3xl sm:text-4xl">Send an enquiry</h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Fill this in and it opens WhatsApp with your message ready to send.
                </p>
                <div className="mt-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
