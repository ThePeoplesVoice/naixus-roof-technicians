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
        <div className="mt-9">
          <Button asChild size="lg" variant="invert">
            <Link to="/enquire">{business.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
