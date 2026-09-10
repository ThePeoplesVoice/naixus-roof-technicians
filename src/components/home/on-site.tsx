import { Photo } from "@/components/photo";
import { jobPlates } from "@/lib/site";

export function OnSite() {
  const [feature, ...rest] = jobPlates;

  return (
    <section id="work" className="scroll-mt-20 bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/50">
          Work
        </p>
        <figure className="mt-8 overflow-hidden rounded-xl">
          <Photo
            src={feature.image}
            alt={feature.alt}
            className="aspect-[3/2] w-full object-cover object-[center_40%]"
            width={1400}
            height={933}
            sizes="(min-width: 1152px) 1120px, 100vw"
          />
        </figure>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
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
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
