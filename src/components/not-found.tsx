import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";

export function NotFound() {
  return (
    <SiteShell>
      <main id="main" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
          That page isn’t here.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
          The roof still is. Head back to the work, or write in about a
          new-build in the Peel corridor.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/enquire">Enquire</Link>
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}
