import { createFileRoute } from "@tanstack/react-router";
import { ContactLines } from "@/components/contact-lines";
import { EnquireForm } from "@/components/enquire-form";
import { SiteShell } from "@/components/site-shell";
import { business } from "@/lib/site";

export const Route = createFileRoute("/enquire")({
  component: EnquirePage,
  head: () => ({
    meta: [
      { title: `Enquire — ${business.name}` },
      {
        name: "description",
        content:
          "Enquire about a new-build residential roof in South West WA. Sarking through to ridge capping. Limited projects each month.",
      },
    ],
  }),
});

function EnquirePage() {
  return (
    <SiteShell>
      <main id="main" className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-metal">
            Enquire
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
            New-build residential. South West WA.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            If you’re building in the corridor and need sarking through to ridge
            capping done properly the first time, write in. Limited projects each
            month.
          </p>
          <div className="mt-8">
            <ContactLines />
          </div>
          <ul className="mt-8 space-y-2 text-sm text-ink-soft">
            <li>Sarking and roll insulation</li>
            <li>Roof sheeting — residential new builds</li>
            <li>Valleys and ridge capping</li>
            <li>Standard finishing flashings</li>
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <EnquireForm />
        </div>
      </main>
    </SiteShell>
  );
}
