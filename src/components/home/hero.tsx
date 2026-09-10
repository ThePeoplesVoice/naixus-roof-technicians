import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { business } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-ink text-paper">
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-paper/75">
          {business.operator} · {business.base}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.7rem] font-medium leading-[1.04] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          New-build
          <br />
          residential roofs.
        </h1>
        <p className="mt-6 max-w-md font-display text-xl text-paper/90 sm:text-2xl">
          {business.promise}
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="invert">
            <Link to="/enquire">{business.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
