import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#342E37" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
        style={{ backgroundColor: "#7EB2DD" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none"
        style={{ backgroundColor: "#BA5A31" }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "rgba(247,243,235,0.7)",
          }}
        >
          Get Started Today
        </span>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
        >
          Ready to get your life back?
        </h2>

        {/* Sub-headline */}
        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "rgba(247,243,235,0.65)" }}
        >
          Relief starts with one visit. Schedule your comprehensive exam today and
          let&apos;s build a plan that gets you moving again.
        </p>

        {/* Orange CTA */}
        <Link
          href="/consultation"
          id="cta-banner-book"
          className="btn-cta text-base px-10 py-4 inline-block"
        >
          Schedule a Consultation
        </Link>

        {/* Trust micro-copy */}
        <p
          className="mt-5 text-xs"
          style={{ color: "rgba(247,243,235,0.35)" }}
        >
          Same-day appointments · Most insurance accepted · Free first evaluation
        </p>
      </div>
    </section>
  );
}
