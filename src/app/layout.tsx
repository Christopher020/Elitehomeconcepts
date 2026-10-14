import type { Metadata, Viewport } from "next";
import { Jost, Marcellus } from "next/font/google";
import type { ReactNode } from "react";

import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

import "./globals.css";

const display = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-display",
});

const sans = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Furniture, Interiors & Décor in Lagos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "furniture Lagos",
    "furniture store Allen Avenue",
    "interior design Lagos",
    "home décor Lagos",
    "living room furniture Nigeria",
    "office furniture Lagos",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Furniture, Interiors & Décor in Lagos`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Furniture, Interiors & Décor in Lagos`,
    description: site.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone.intl,
  image: `${site.url}/opengraph-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.area}`,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.countryCode,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-NG"
      className={`${display.variable} ${sans.variable}`}
      // Smooth in-page jumps (back to top, skip link); Next turns it off during route changes.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Flags JS so scroll-reveal styles only hide content when they can reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[60] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Bottom-right corner, laid out together so the two buttons never overlap. */}
        <div className="pointer-events-none fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6">
          <BackToTop />
          <WhatsAppFloat />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
