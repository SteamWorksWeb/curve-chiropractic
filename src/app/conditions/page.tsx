"use client";

import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── Condition data ────────────────────────────────────────────────────────── */
const conditions = [
  {
    id: "sciatica-lower-back",
    icon: "🦴",
    title: "Sciatica & Lower Back Pain",
    description:
      "Sharp, shooting pain down your leg or a constant dull ache in your lower back. Structural misalignment compresses the sciatic nerve — we correct the root cause, not just the symptom.",
  },
  {
    id: "neck-pain-whiplash",
    icon: "🔄",
    title: "Neck Pain & Whiplash",
    description:
      "Stiffness, limited mobility, or pain resulting from auto accidents and daily strain. Whiplash injuries are complex and require precise structural correction to heal properly.",
  },
  {
    id: "migraines-headaches",
    icon: "⚡",
    title: "Migraines & Headaches",
    description:
      "Chronic tension headaches and migraines often caused by upper cervical misalignment. Even a 1mm shift in the atlas can trigger debilitating, recurring head pain.",
  },
  {
    id: "herniated-discs",
    icon: "💢",
    title: "Herniated & Bulging Discs",
    description:
      "Nerve compression causing radiating pain, numbness, and severe discomfort. We use gentle spinal decompression and structural correction to relieve disc pressure without surgery.",
  },
  {
    id: "numbness-tingling",
    icon: "🤚",
    title: "Numbness & Tingling",
    description:
      "Loss of sensation in the hands or feet, signaling interference in your nervous system. Identifying and correcting spinal subluxations restores full nerve communication.",
  },
  {
    id: "tech-neck-posture",
    icon: "📱",
    title: "Tech Neck & Posture",
    description:
      "Pain stemming from poor ergonomics, forward head posture, and prolonged screen time. For every inch your head drifts forward, your spine bears an extra 10 pounds of force.",
  },
];

/* ─── Condition Card ────────────────────────────────────────────────────────── */
function ConditionCard({
  condition,
}: {
  condition: (typeof conditions)[number];
}) {
  return (
    <article
      id={condition.id}
      className="group relative flex flex-col rounded-2xl border p-8 transition-all duration-300"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "rgba(0,95,97,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 16px 40px rgba(0,95,97,0.13)";
        el.style.borderColor = "rgba(0,95,97,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
        el.style.borderColor = "rgba(0,95,97,0.1)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "#005F61" }}
      />

      {/* Icon badge */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
        style={{ backgroundColor: "rgba(0,95,97,0.07)" }}
      >
        {condition.icon}
      </div>

      {/* Title */}
      <h2
        className="text-xl font-bold mb-3 leading-snug"
        style={{
          fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
          color: "#1a1a1a",
        }}
      >
        {condition.title}
      </h2>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#555" }}>
        {condition.description}
      </p>

      {/* Learn more link */}
      <Link
        href="/contact"
        id={`condition-cta-${condition.id}`}
        className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors duration-150"
        style={{ color: "#005F61" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "#BA5A31")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "#005F61")
        }
      >
        Get relief today
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function ConditionsPage() {
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
            Root Cause Care
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Conditions We Treat
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Stop living with pain. We specialize in diagnosing and correcting
            the root cause of these common conditions — not just masking the
            symptoms.
          </p>
        </div>
      </section>

      {/* ── Conditions Grid ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section label */}
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#005F61" }}
            >
              Common Conditions
            </span>
            <p
              className="mt-3 text-base max-w-lg mx-auto leading-relaxed"
              style={{ color: "#666" }}
            >
              If you recognize any of these conditions, chiropractic care may be
              the permanent solution you&apos;ve been looking for.
            </p>
          </div>

          {/* 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((c) => (
              <ConditionCard key={c.id} condition={c} />
            ))}
          </div>

          {/* Bottom trust strip */}
          <div className="mt-16 text-center">
            <p
              className="text-sm mb-6"
              style={{ color: "#888" }}
            >
              Not sure if chiropractic care is right for your condition?
            </p>
            <Link
              href="/contact"
              id="conditions-consult-cta"
              className="btn-cta text-sm px-8 py-3 inline-flex"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
