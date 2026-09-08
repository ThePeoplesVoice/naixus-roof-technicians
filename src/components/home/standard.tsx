import { spec } from "@/lib/site";

export function Standard() {
  return (
    <section
      aria-label="The standard"
      className="border-b border-rule bg-paper"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-10 lg:py-12">
        {spec.map((item) => (
          <div key={item.k} className="border-t border-rule pt-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone">
              {item.k}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
