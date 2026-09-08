import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { business } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink text-paper">
      <Photo
        src="/images/hero.jpg"
        alt="New-build metal roof on a rural Western Australian residential block"
        pictureClassName="absolute inset-0 block h-full w-full"
        className="h-full w-full object-cover"
        width={1792}
        height={1008}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-paper/80">
          {business.operator} · {business.base}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          New builds.
          <br />
          Sarking to ridge capping.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
          Specialist roof sheeting, valleys and ridge capping for new-build
          residential projects. Done properly the first time.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="invert">
            <Link to="/enquire">{business.cta}</Link>
          </Button>
          <Button asChild size="lg" variant="onDark">
            <a href="#work">The package</a>
          </Button>
        </div>
        <p className="mt-10 border-t border-paper/20 pt-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-paper/55">
          New-build residential · Sarking to ridge · Serpentine–Jarrahdale to Peel · ABN {business.abn}
        </p>
      </div>
    </section>
  );
}
