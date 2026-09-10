import { Photo } from "@/components/photo";
import { business } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-rule bg-paper-2 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
            {business.operator}
          </h2>
          <figure className="mt-8 overflow-hidden rounded-xl bg-ink">
            <Photo
              src="/images/day-shawn.jpg"
              alt="Shawn Dhu on a new-build roof after laying under-sheet insulation"
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
              width={900}
              height={1125}
              sizes="(min-width: 1024px) 320px, 100vw"
            />
          </figure>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            Fifteen years in WA construction. Honest advice. Tidy sites.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Builders and owner-builders. If you want the roof done right the
            first time, this is the call.
          </p>
        </div>
      </div>
    </section>
  );
}
