import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── SEO Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Dr. — Curve Chiropractic | Tampa Bay",
  description:
    "Meet the doctor behind Curve Chiropractic. Learn about his training, philosophy, and commitment to structural correction and long-term healing in Tampa Bay.",
  openGraph: {
    title: "About Dr. — Curve Chiropractic | Tampa Bay",
    description:
      "Meet the doctor behind Curve Chiropractic. Structural correction specialist serving Tampa Bay.",
  },
};


/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      <SiteNavbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: "#005F61" }}
      >
        {/* Decorative blobs */}
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
            Meet Your Doctor
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            A Chiropractor Who Measures Success by Your Recovery
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Built on structural science, driven by genuine care — Curve Chiropractic
            exists to fix the root cause of your pain, not just manage it.
          </p>
        </div>
      </section>

      {/* ── Doctor Bio ── */}
      <section
        className="py-10 md:py-14"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Doctor portrait */}
            <div className="relative w-full lg:min-h-[580px] h-80 lg:h-auto rounded-3xl overflow-hidden flex-shrink-0"
              id="about-doctor-photo"
              style={{ boxShadow: "0 24px 64px rgba(0,95,97,0.2)" }}
            >
              <Image
                src="/images/justin.jpg"
                alt="Dr. Justin Murray — Curve Chiropractic, Tampa Bay"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Bottom badge */}
              <div
                className="absolute bottom-0 left-0 right-0 px-7 py-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                }}
              >
                <p className="text-base font-bold" style={{ color: "#ffffff" }}>
                  Dr. Justin Murray, D.C.
                </p>
                <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Curve Chiropractic · Tampa, FL
                </p>
              </div>

              {/* Orange accent stripe */}
              <div
                className="absolute top-0 left-0 bottom-0 w-2"
                style={{ backgroundColor: "#BA5A31" }}
              />
            </div>

            {/* Bio text */}
            <div className="lg:pl-12 lg:py-14">
              <span
                className="text-xs font-bold tracking-widest uppercase mb-4 block"
                style={{ color: "#005F61" }}
              >
                About the Doctor
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
                  color: "#1a1a1a",
                }}
              >
                Structural Correction Is the Only Goal
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "#555" }}
              >
                <p>
                  Dr. Justin Murray founded Curve Chiropractic with a single conviction: most
                  patients leave chiropractic offices feeling temporarily better but never
                  actually healed. He set out to change that by building a practice anchored
                  in precision imaging, evidence-based technique, and patient education.
                </p>
                <p>
                  His training spans traditional chiropractic sciences and post-doctoral
                  continuing education in structural correction, Webster technique for
                  prenatal care, and personal-injury case management — making Dr. Murray uniquely
                  equipped to treat the full spectrum of Tampa Bay patients, from car-accident
                  survivors to expecting mothers.
                </p>
                <p>
                  He takes pride in spending real time with every patient — listening,
                  explaining, and tailoring every care plan to the individual. At Curve, you
                  will always know exactly what is wrong, why it happened, and what it will
                  take to fix it permanently.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/consultation"
                  id="about-book-cta"
                  className="btn-cta text-sm px-8 py-3.5"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/why-us"
                  id="about-why-us-link"
                  className="btn-teal-outline text-sm px-8 py-3.5"
                >
                  Our Approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Quote pull ── */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "#005F61" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug mb-8 text-white"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            &ldquo;I measure my success by the day you walk out and never need
            to come back.&rdquo;
          </blockquote>
          <p
            className="text-sm font-semibold"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            — Dr. Justin Murray, D.C. · Curve Chiropractic
          </p>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
