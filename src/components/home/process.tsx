import { Photo } from "@/components/photo";
import { walk } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-rule bg-paper-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
          02 — Process
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
          Walk the roof.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Small details, done right, are the whole job. Same order, same
          standard, every new build.
        </p>

        <ol className="mt-16 space-y-16 sm:space-y-24">
          {walk.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={step.num}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-xl bg-ink lg:col-span-7",
                    flip && "lg:col-start-6",
                  )}
                >
                  <Photo
                    src={step.image}
                    alt={step.alt}
                    className="aspect-[4/3] w-full object-cover"
                    width={1400}
                    height={1050}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                </div>
                <div
                  className={cn(
                    "lg:col-span-5",
                    flip
                      ? "lg:col-start-1 lg:row-start-1"
                      : "lg:col-start-8",
                  )}
                >
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone">
                    {step.num}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {step.line}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
