/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── Service data ─────────────────────────────────────────────────────────── */
const services = [
  {
    id: "upper-cervical-care",
    tag: "Neurological Balance",
    title: "Upper Cervical Care",
    body: "Precise, gentle adjustments focusing on the atlas and axis to restore neurological balance without twisting or popping. Even small misalignments at the top of the spine can interfere with your entire nervous system — we correct the root cause.",
    bullets: [
      "Atlas & axis precision correction",
      "No twisting, cracking, or popping",
      "Immediate neurological relief for most patients",
    ],
    image: "/images/c2.png",
    imageAlt:
      "Chiropractor performing upper cervical adjustment on a patient at Curve Chiropractic Tampa Bay",
  },
  {
    id: "structural-correction",
    tag: "Long-Term Results",
    title: "Structural Correction",
    body: "Moving beyond symptom relief to rehabilitate your spine back to its normal, healthy biomechanical state. Structural chiropractic doesn't just mask pain — it reverses the underlying postural abnormalities causing it.",
    bullets: [
      "Digital spinal analysis & X-ray review",
      "Customized mirror-image traction",
      "Progressive curve restoration protocol",
    ],
    image: "/images/sciatica.jpg",
    imageAlt:
      "Chiropractor analyzing spinal X-rays in a modern clinic at Curve Chiropractic",
  },
  {
    id: "auto-accidents",
    tag: "Insurance Accepted",
    title: "Auto Accidents",
    body: "Comprehensive documentation and specialized care to heal whiplash and soft tissue injuries after a collision. We handle the insurance paperwork so you can focus entirely on recovery. Most auto policies cover 100% of chiropractic care.",
    bullets: [
      "Injury documentation for your attorney",
      "Whiplash & soft-tissue rehab",
      "All major auto insurers accepted",
    ],
    image: "/images/neck.jpg",
    imageAlt:
      "Patient consulting with chiropractor about auto accident injury care at Curve Chiropractic",
  },
  {
    id: "prenatal-care",
    tag: "Webster Certified",
    title: "Prenatal Care",
    body: "Webster-certified techniques to ensure pelvic balance and a more comfortable pregnancy and delivery. Safe, proven chiropractic care reduces intrauterine constraint and helps baby get into the ideal position for birth.",
    bullets: [
      "Webster Technique certified provider",
      "Reduces pelvic misalignment & discomfort",
      "Supports optimal fetal positioning",
    ],
    image: "/images/c1.png",
    imageAlt:
      "Pregnant woman receiving gentle prenatal chiropractic care at Curve Chiropractic Tampa Bay",
  },
];

/* ─── Shared check icon ─────────────────────────────────────────────────────── */
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
export default function ServicesPage() {
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
            What We Offer
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Our Services
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Specialized care to correct the root cause of your pain — not just
            mask the symptoms.
          </p>
        </div>
      </section>

      {/* ── Z-Pattern Services ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0; // even → image left, odd → image right
            return (
              <article
                key={svc.id}
                id={svc.id}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-16`}
              >
                {/* Image column */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${svc.image}`}
                      alt={svc.imageAlt}
                      width={680}
                      height={480}
                      className="w-full object-cover"
                      style={{ aspectRatio: "680/480", display: "block" }}
                    />
                    {/* Subtle teal corner accent */}
                    <div
                      className="absolute top-0 left-0 w-1.5 h-20 rounded-br-lg"
                      style={{ backgroundColor: "#005F61" }}
                    />
                  </div>
                </div>

                {/* Text column */}
                <div className="w-full md:w-1/2">
                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(0,95,97,0.08)",
                      color: "#005F61",
                    }}
                  >
                    {svc.tag}
                  </span>

                  {/* Title */}
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-jakarta, system-ui, sans-serif)",
                      color: "#1a1a1a",
                    }}
                  >
                    {svc.title}
                  </h2>

                  {/* Body */}
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "#555" }}
                  >
                    {svc.body}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 mb-8 list-none">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-sm font-medium" style={{ color: "#333" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/consultation"
                    id={`svc-cta-${svc.id}`}
                    className="btn-cta text-sm px-7 py-3 inline-flex"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
