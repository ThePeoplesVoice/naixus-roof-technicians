import { Photo } from "@/components/photo";
import { business } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-rule bg-paper-2 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
            04 — About
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
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            Fifteen years in WA construction. The face of the work — not a logo.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Selective about what we take on. New-build residential only, from
            sarking through to ridge capping and the flashings that finish it.
            Currently taking on a limited number of new-build projects each
            month — get in touch early if you’re planning ahead.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Based in {business.base}. Exclusive is earned by doing fewer jobs
            properly.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-rule pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                Years
              </dt>
              <dd className="mt-1 font-display text-3xl">{business.years}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                Focus
              </dt>
              <dd className="mt-1 font-display text-3xl">New builds</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                Base
              </dt>
              <dd className="mt-1 font-display text-3xl">Keysbrook</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
