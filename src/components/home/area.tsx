import { areaGroups, business } from "@/lib/site";

export function Area() {
  return (
    <section id="area" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
            Area
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
            Keysbrook. Serpentine, Jarrahdale, Armadale and Peel.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            New residential roofs in this corridor. Based in {business.base}.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:grid-cols-1 lg:pt-10">
          {areaGroups.map((group) => (
            <div key={group.label} className="border-t border-rule pt-5">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone">
                {group.label}
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-ink">
                {group.places.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
