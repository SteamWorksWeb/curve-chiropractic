import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── Comparison data ───────────────────────────────────────────────────────── */
const oldWay = [
  {
    id: "old-1",
    point: "Quick 5-minute visits",
    detail:
      "In and out before your nervous system even has time to respond. Volume over outcomes.",
  },
  {
    id: "old-2",
    point: "Guesswork adjustments without precise X-rays",
    detail:
      "Treating every spine the same, regardless of your unique anatomy, history, or injury pattern.",
  },
  {
    id: "old-3",
    point: "Endless treatment plans with no graduation date",
    detail:
      "You keep coming back indefinitely with no clear metric for when you've actually healed.",
  },
  {
    id: "old-4",
    point: "Symptom masking instead of root-cause correction",
    detail:
      "Pain relief that lasts a few days — then you're back on the table. The cycle never ends.",
  },
];

const curveWay = [
  {
    id: "curve-1",
    point: "Comprehensive structural exams",
    detail:
      "We map your spine from the ground up — posture analysis, neurological screening, and precision X-rays — before a single adjustment is made.",
  },
  {
    id: "curve-2",
    point: "Data-driven corrections based on your exact anatomy",
    detail:
      "Every adjustment is calculated specifically for your spinal misalignment. No cookie-cutter protocols.",
  },
  {
    id: "curve-3",
    point: "A definitive roadmap to true healing",
    detail:
      "You receive a written care plan with milestones, timelines, and a clear graduation date before your second visit.",
  },
  {
    id: "curve-4",
    point: "Structural correction, not just relief",
    detail:
      "We rehabilitate the biomechanical curve of your spine so the problem doesn't come back. That's what \"Curve\" means.",
  },
];

const differentiators = [
  {
    id: "diff-xray",
    stat: "Digital X-Ray",
    label: "Before Every Plan",
    desc: "We never guess. Precision imaging drives every decision we make.",
  },
  {
    id: "diff-rate",
    stat: "95%",
    label: "Patient Satisfaction",
    desc: "Patients report significant relief within their first care phase.",
  },
  {
    id: "diff-cert",
    stat: "Webster",
    label: "Certified Provider",
    desc: "Nationally certified in structural & prenatal chiropractic technique.",
  },
];

/* ─── X icon ────────────────────────────────────────────────────────────────── */
function XIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#BA5A31"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/* ─── Check icon ────────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#005F61"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function WhyUsPage() {
  return (
    <main>
      <SiteNavbar />

      {/* ── Page Hero ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: "#005F61" }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            A Different Standard of Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            The Curve Difference
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            We don&apos;t just crack your back and send you home. We correct the
            biomechanical foundation of your spine so you can graduate from pain.
          </p>
        </div>
      </section>

      {/* ── Comparison Grid ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-bold tracking-widest uppercase text-center mb-12"
            style={{ color: "#005F61" }}
          >
            Side by side
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* ── Left: The Old Way ── */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "rgba(126,178,221,0.08)",
                border: "1px solid rgba(126,178,221,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(186,90,49,0.1)",
                    color: "#BA5A31",
                  }}
                >
                  The Old Way
                </span>
              </div>

              <h2
                className="text-2xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#342E37",
                }}
              >
                Standard Chiropractic Care
              </h2>

              <ul className="space-y-5 list-none">
                {oldWay.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <XIcon />
                    <div>
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: "#1a1a1a" }}
                      >
                        {item.point}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: The Curve Way ── */}
            <div
              className="rounded-2xl p-8 md:p-10 relative"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,95,97,0.15)",
                boxShadow: "0 8px 40px rgba(0,95,97,0.1)",
                borderTop: "4px solid #005F61",
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(0,95,97,0.08)",
                    color: "#005F61",
                  }}
                >
                  The Curve Way
                </span>
              </div>

              <h2
                className="text-2xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#005F61",
                }}
              >
                Curve Chiropractic
              </h2>

              <ul className="space-y-5 list-none">
                {curveWay.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: "#1a1a1a" }}
                      >
                        {item.point}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── The "You" Focus ── */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-5 block"
            style={{ color: "#005F61" }}
          >
            Our Promise to You
          </span>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug mb-8"
            style={{
              fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
              color: "#1a1a1a",
            }}
          >
            &ldquo;Your time is valuable, and your pain is real. You deserve a
            doctor who measures success by how quickly you get your life back
            — not by how many times you return.&rdquo;
          </blockquote>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "#666" }}>
            At Curve Chiropractic, every decision we make is patient-first.
            We give you a written plan, we measure your progress objectively,
            and we celebrate the day you no longer need us.
          </p>
          <Link
            href="/contact"
            id="why-us-book-cta"
            className="btn-cta text-base px-10 py-4 inline-block"
          >
            Start Your Recovery Today
          </Link>
        </div>
      </section>

      {/* ── Differentiator stats ── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div
                key={d.id}
                className="text-center rounded-2xl p-8"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,95,97,0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                    color: "#005F61",
                  }}
                >
                  {d.stat}
                </p>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#BA5A31" }}
                >
                  {d.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
