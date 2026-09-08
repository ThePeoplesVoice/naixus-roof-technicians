import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export function Builders() {
  return (
    <section className="border-t border-rule bg-paper py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
            For builders
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            One package. One standard. One conversation.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            If you’re running a new-build in Serpentine–Jarrahdale, Armadale or
            the Peel corridor and you want the roof done once, this is the
            call. Limited projects each month — worth writing in early.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
          <Button asChild size="lg">
            <Link to="/enquire">{business.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
