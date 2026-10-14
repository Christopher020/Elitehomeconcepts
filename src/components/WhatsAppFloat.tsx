import { site, whatsappLink } from "@/content/site";

import { Chat } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="anim-rise fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17733f] px-5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
      style={{ animationDelay: "1600ms" }}
    >
      <Chat className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
