import { ArrowUp } from "./icons";

/**
 * Back-to-top link. No JavaScript: "#top" scrolls to the top of the document, and the
 * `.to-top` scroll timeline in globals.css fades it in once the visitor has scrolled.
 */
export function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="to-top pointer-events-auto inline-flex size-12 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
    >
      <ArrowUp className="size-5" />
    </a>
  );
}
