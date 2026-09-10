import { services } from "@/lib/site";

export function Work() {
  return (
    <section className="border-b border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="max-w-xl font-display text-2xl leading-snug tracking-[-0.02em] text-ink sm:text-3xl">
          Sarking, sheeting, valleys, ridge capping and flashings. Done properly
          the first time.
        </p>
        <ul className="mt-10 grid gap-px border-y border-rule sm:grid-cols-4">
          {services.map((s) => (
            <li
              key={s.id}
              className="py-5 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink-soft sm:py-6 sm:pr-4"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
