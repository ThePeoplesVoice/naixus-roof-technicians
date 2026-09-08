import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { business, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-metal focus:px-3 focus:py-2 focus:text-metal-fg"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-ink"
          onClick={() => setOpen(false)}
        >
          <Mark className="text-metal" />
          <span className="leading-tight">
            <span className="block font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em]">
              {business.short}
            </span>
            <span className="block text-[0.625rem] uppercase tracking-[0.16em] text-stone">
              Roof Technicians
              <span className="hidden sm:inline"> · Keysbrook</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) =>
            item.href === "/enquire" ? (
              <Link
                key={item.href}
                to="/enquire"
                className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 bg-paper px-5 py-8 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {nav.map((item) =>
            item.href === "/enquire" ? (
              <Link
                key={item.href}
                to="/enquire"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-rule font-display text-2xl text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-rule font-display text-2xl text-ink"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
