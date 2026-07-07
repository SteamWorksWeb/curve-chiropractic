"use client";

import Image from "next/image";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CTABanner from "@/components/CTABanner";

/* ─── Condition data ────────────────────────────────────────────────────────── */
const conditions = [
  {
    id: "sciatica-lower-back",
    title: "Sciatica & Lower Back Pain",
    description:
      "Sharp, shooting pain down your leg or a constant dull ache in your lower back. Structural misalignment compresses the sciatic nerve — we correct the root cause, not just the symptom.",
    image: "/images/sciatica.jpg",
  },
  {
    id: "neck-pain-whiplash",
    title: "Neck Pain & Whiplash",
    description:
      "Stiffness, limited mobility, or pain resulting from auto accidents and daily strain. Whiplash injuries are complex and require precise structural correction to heal properly.",
    image: "/images/neck.jpg",
  },
  {
    id: "migraines-headaches",
    title: "Migraines & Headaches",
    description:
      "Chronic tension headaches and migraines often caused by upper cervical misalignment. Even a 1mm shift in the atlas can trigger debilitating, recurring head pain.",
    image: "/images/migranes.jpg",
  },
  {
    id: "herniated-discs",
    title: "Herniated & Bulging Discs",
    description:
      "Nerve compression causing radiating pain, numbness, and severe discomfort. We use gentle spinal decompression and structural correction to relieve disc pressure without surgery.",
    image: "/images/discs.jpg",
  },
  {
    id: "numbness-tingling",
    title: "Numbness & Tingling",
    description:
      "Loss of sensation in the hands or feet, signaling interference in your nervous system. Identifying and correcting spinal subluxations restores full nerve communication.",
    image: "/images/numb.jpg",
  },
  {
    id: "tech-neck-posture",
    title: "Tech Neck & Posture",
    description:
      "Pain stemming from poor ergonomics, forward head posture, and prolonged screen time. For every inch your head drifts forward, your spine bears an extra 10 pounds of force.",
    image: "/images/tech.jpg",
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
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
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
      {/* ── Top: Image ── */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <Image
          src={condition.image}
          alt={`${condition.title} — Curve Chiropractic Tampa Bay`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Teal gradient overlay at bottom of image */}
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to top, rgba(0,95,97,0.25), transparent)",
          }}
        />
      </div>

      {/* ── Bottom: Copy ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h2
          className="text-lg font-bold mb-2 leading-snug"
          style={{
            fontFamily: "var(--font-jakarta, system-ui, sans-serif)",
            color: "#005F61",
          }}
        >
          {condition.title}
        </h2>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#444" }}
        >
          {condition.description}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          id={`condition-cta-${condition.id}`}
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors duration-150"
          style={{ color: "#005F61" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#BA5A31")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#005F61")}
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
      </div>
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

          {/* Bottom trust CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm mb-6" style={{ color: "#888" }}>
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
