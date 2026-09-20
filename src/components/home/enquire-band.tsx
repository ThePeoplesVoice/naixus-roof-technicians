import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export function EnquireBand() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-xl font-display text-3xl font-medium tracking-[-0.02em] sm:text-5xl">
          Ready to get the roof sorted?
        </h2>
        <p className="mt-5 max-w-md text-base text-paper/70">
          Limited new builds each month. Write in early.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Button asChild size="lg" variant="invert">
            <Link to="/enquire">{business.cta}</Link>
          </Button>
          <a
            href={`tel:${business.phoneTel}`}
            className="inline-flex min-h-11 items-center text-sm font-medium text-paper underline-offset-4 hover:underline"
          >
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
