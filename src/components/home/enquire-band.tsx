import { ContactLines } from "@/components/contact-lines";
import { EnquireForm } from "@/components/enquire-form";

export function EnquireBand() {
  return (
    <section id="enquire" className="scroll-mt-20 bg-metal py-20 text-paper sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/60">
            06 — Enquire
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
            If you’ve got a new build coming up, reach out sooner rather than
            later.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/75">
            Booking a limited number of new builds at a time. Peel corridor
            builders — if your next new build needs this, let’s talk.
          </p>
          <div className="mt-8">
            <ContactLines invert />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <EnquireForm invert />
        </div>
      </div>
    </section>
  );
}
