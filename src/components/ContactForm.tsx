"use client";

import { useId, useState, type FormEvent } from "react";

import { collections } from "@/content/collections";
import { site, whatsappLink } from "@/content/site";

import { ArrowRight } from "./icons";

const interests = [...collections.map((c) => c.name), "Interior design project", "Something else"];

const field =
  "mt-2 block w-full normal-case tracking-normal font-normal border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted/70 focus:border-brand focus:shadow-[0_1px_0_var(--color-brand)] focus:outline-none transition-[border-color,box-shadow]";

/**
 * No backend needed: the enquiry is sent as a pre-filled WhatsApp message
 * (or email). To store submissions, add a route handler and swap onSubmit.
 *
 * Without JavaScript the form still works: it submits straight to wa.me, which
 * reads the message from the `text` field (the other fields are ignored).
 */
export function ContactForm() {
  const id = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  const composed = [
    `Hello ${site.name},`,
    "",
    `Name: ${name.trim()}`,
    phone.trim() ? `Phone: ${phone.trim()}` : null,
    `Interested in: ${interest}`,
    "",
    message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${interest}`)}&body=${encodeURIComponent(composed)}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(whatsappLink(composed), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      action={whatsappLink()}
      method="get"
      target="_blank"
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-8"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <label htmlFor={`${id}-name`} className="block text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Your name
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
          />
        </label>
        <label htmlFor={`${id}-phone`} className="block text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Phone (optional)
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
          />
        </label>
      </div>

      <label htmlFor={`${id}-interest`} className="block text-xs font-medium uppercase tracking-[0.22em] text-muted">
        I&apos;m interested in
        <select
          id={`${id}-interest`}
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={`${field} cursor-pointer`}
        >
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor={`${id}-message`} className="block text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Tell us about your space
        <textarea
          id={`${id}-message`}
          name="text"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group/btn inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-7 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-brand"
        >
          Send on WhatsApp
          <ArrowRight className="size-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
        </button>
        <a href={mailto} className="inline-flex min-h-11 w-fit items-center text-sm text-muted hover:text-ink">
          <span className="link-draw">or send by email</span>
        </a>
      </div>
    </form>
  );
}
