import { Photo } from "@/components/photo";
import { services } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
          01 — Work
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
          Four parts. One standard.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Full roof package on new builds: sarking and insulation, sheeting,
          valleys, ridge capping, standard flashings. One conversation, start to
          finish.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="group">
              <figure className="relative overflow-hidden rounded-xl bg-ink">
                <Photo
                  src={service.image}
                  alt={service.alt}
                  className="aspect-[4/3] w-full object-cover opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent px-5 pb-4 pt-16 text-paper">
                  <span className="font-display text-xl font-medium leading-tight sm:text-2xl">
                    {service.name}
                  </span>
                  <span className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/70">
                    {service.num}
                  </span>
                </figcaption>
              </figure>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                {service.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
