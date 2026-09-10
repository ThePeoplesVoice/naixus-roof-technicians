import { Link } from "@tanstack/react-router";
import { ContactLines } from "@/components/contact-lines";
import { Mark } from "@/components/mark";
import { business, services, suburbs } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-ink text-metal-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Mark className="text-paper" />
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em]">
              {business.name}
            </p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            {business.tagline} {business.promise}
          </p>
          <div className="mt-6">
            <ContactLines invert />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/50">
            Work
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/50">
            Area
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            {suburbs.join(" · ")}
          </p>
          <Link
            to="/enquire"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-paper underline-offset-4 hover:underline"
          >
            {business.cta}
          </Link>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[0.7rem] uppercase tracking-[0.14em] text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            {business.operator} · {business.base}
          </p>
          <p>ABN {business.abn}</p>
        </div>
      </div>
    </footer>
  );
}
