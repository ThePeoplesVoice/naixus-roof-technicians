import { Photo } from "@/components/photo";

export function Valley() {
  return (
    <section id="valley" className="relative min-h-[72vh] overflow-hidden bg-ink text-paper">
      <Photo
        src="/images/valley.jpg"
        alt="Metal valley tray with even fall and overlapping sheets"
        pictureClassName="absolute inset-0 block h-full w-full"
        className="h-full w-full object-cover"
        width={1400}
        height={1050}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/20" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl items-end px-5 py-16 sm:px-8 sm:py-20">
        <blockquote className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/60">
            The valley
          </p>
          <p className="mt-4 font-display text-3xl font-medium leading-snug tracking-[-0.02em] sm:text-5xl">
            Most roof failures start in the valley, not the sheeting.
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/80">
            Proper fall, proper lap, no shortcuts — that’s the difference
            between a roof that lasts 30 years and one that doesn’t. This is the
            standard on every new build we take on in South West WA.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
