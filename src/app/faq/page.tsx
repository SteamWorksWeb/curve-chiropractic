"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

/* ─────────────────────────────────────────────────
   FAQ Content
   ───────────────────────────────────────────────── */
const faqs = [
  {
    id: "faq-hurt",
    question: "Does the adjustment hurt?",
    answer:
      "Not at all. We use precise, modern techniques focused on structural correction. Most patients experience immediate relief and a sense of release during their very first visit.",
  },
  {
    id: "faq-forever",
    question: "Do I have to keep coming back forever?",
    answer:
      "No. Our goal is to fix the root cause of your pain, not keep you on a perpetual subscription. Once your spinal curve is stabilized, we transition you to maintenance on your terms.",
  },
  {
    id: "faq-insurance",
    question: "Do you accept my insurance?",
    answer:
      "We work with most major insurance providers and auto accident claims. Bring your information to your first visit, and our team will verify exactly what your benefits cover before you pay a dime.",
  },
  {
    id: "faq-duration",
    question: "How long does a visit take?",
    answer:
      "Your initial consultation and full exam take about 45 minutes so we can map out a precise treatment plan. Standard follow-up adjustments take less than 15 minutes, getting you back to your life quickly.",
  },
  {
    id: "faq-different",
    question: "What makes Curve Chiropractic different?",
    answer:
      "We don't just crack your back and send you home. We specialize in structural curve correction — meaning we are looking at the biomechanical foundation of your body to permanently eliminate pain.",
  },
];

/* ─────────────────────────────────────────────────
   Chevron Icon
   ───────────────────────────────────────────────── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <polyline points="6,9 12,15 18,9" />
    </motion.svg>
  );
}

/* ─────────────────────────────────────────────────
   FAQ Item — Framer Motion Accordion
   ───────────────────────────────────────────────── */
function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={faq.id}
      className="rounded-2xl overflow-hidden border transition-all duration-200"
      style={{
        backgroundColor: isOpen ? "#EEF5F5" : "#ffffff",
        borderColor: isOpen ? "rgba(0,95,97,0.2)" : "rgba(0,0,0,0.07)",
        boxShadow: isOpen
          ? "0 4px 20px rgba(0,95,97,0.08)"
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Question row / toggle */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${faq.id}-answer`}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
        style={{ color: isOpen ? "#005F61" : "#1a1a1a" }}
      >
        <span className="text-base font-semibold leading-snug">
          {faq.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      {/* Animated answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${faq.id}-answer`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-7 pb-6 text-sm leading-relaxed"
              style={{ color: "#444" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────── */
export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main>
      <SiteNavbar />

      {/* ── Page Header ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: "#005F61" }}
      >
        {/* Decorative circles */}
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
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
          >
            Got Questions?
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Everything you need to know about getting care at Curve Chiropractic.
            Can&apos;t find your answer? Just give us a call.
          </p>
        </div>
      </section>

      {/* ── Accordion Section ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F7F3EB" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          {/* Section label */}
          <p
            className="text-xs font-bold tracking-widest uppercase mb-10 text-center"
            style={{ color: "#005F61" }}
          >
            Patient FAQs
          </p>

          {/* Accordion list */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: "#342E37" }}
      >
        {/* Decorative */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-5 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />
        <div
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-5 pointer-events-none"
          style={{ backgroundColor: "#7EB2DD" }}
        />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Still have questions? Let&apos;s talk.
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ color: "rgba(247,243,235,0.7)" }}
          >
            Your first consultation is free. Our team will walk you through exactly
            what to expect and build a recovery plan tailored to you.
          </p>
          <a
            href="/#book"
            id="faq-book-cta"
            className="btn-cta text-base px-10 py-4 inline-block"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
