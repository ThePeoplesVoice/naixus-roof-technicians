import { Photo } from "@/components/photo";
import { jobPlates } from "@/lib/site";

export function OnSite() {
  const [feature, ...rest] = jobPlates;

  return (
    <section id="on-site" className="scroll-mt-20 bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/55">
              On the tools
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
              320 square metres. Insulation first, then the sheets.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper/70">
            New-build residential. Under-sheet insulation, then Monument
            corrugated sheeting. Same order every time.
          </p>
        </div>

        <figure className="mt-10 overflow-hidden rounded-xl">
          <Photo
            src={feature.image}
            alt={feature.alt}
            className="aspect-[3/2] w-full object-cover object-[center_40%]"
            width={1400}
            height={933}
            sizes="(min-width: 1152px) 1120px, 100vw"
          />
          <figcaption className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-paper/45">
            {feature.caption}
          </figcaption>
        </figure>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {rest.map((plate) => (
            <li key={plate.image}>
              <figure className="overflow-hidden rounded-xl">
                <Photo
                  src={plate.image}
                  alt={plate.alt}
                  className="aspect-[4/3] w-full object-cover"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <figcaption className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-paper/45">
                  {plate.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
