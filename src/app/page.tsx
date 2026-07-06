"use client";

import Image from "next/image";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";

/* ─────────────────────────────────────────────────
   SVG Icon Components
   ───────────────────────────────────────────────── */
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

function SpineIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M8 6h8M8 10h8M8 14h8M8 18h8" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  );
}

function CarIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function HandIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function DumbbellIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4M6 9h12M6 15h12" />
    </svg>
  );
}

function WaveIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s2-4 5-4 5 8 10 8 5-4 5-4" />
    </svg>
  );
}

function ClipboardIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  );
}

function InsuranceIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

function PlanIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}

function HeartIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function MapPinIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function PhoneIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.53 2 2 0 0 1 3.67 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon({ className = "", style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

function CurveLogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <rect width="72" height="72" rx="18" fill="#005F61" />
      <path
        d="M21 51 A 21 21 0 0 1 51 21"
        fill="none"
        stroke="#F7F3EB"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────── */
const services = [
  {
    id: "spinal-adjustment",
    icon: SpineIcon,
    title: "Spinal Adjustment",
    description:
      "Precise, gentle corrections to restore healthy spinal alignment and relieve nerve pressure caused by your injury.",
  },
  {
    id: "auto-injury-rehab",
    icon: CarIcon,
    title: "Auto-Injury Rehab",
    description:
      "Structured recovery programs for collision injuries — from whiplash to soft-tissue damage — tailored to your timeline.",
  },
  {
    id: "massage-therapy",
    icon: HandIcon,
    title: "Massage Therapy",
    description:
      "Therapeutic soft-tissue work to reduce muscle tension, accelerate healing, and speed your return to daily life.",
  },
  {
    id: "corrective-exercise",
    icon: DumbbellIcon,
    title: "Corrective Exercise",
    description:
      "Simple, targeted movements to correct muscle imbalances, build stability, and prevent recurring pain.",
  },
  {
    id: "spinal-decompression",
    icon: WaveIcon,
    title: "Spinal Decompression",
    description:
      "Non-surgical traction therapy that gently relieves disc pressure, reduces pain, and restores mobility.",
  },
];

const conditions = [
  "Whiplash & neck pain",
  "Lower back pain",
  "Headaches & migraines",
  "Numbness & tingling",
  "Chronic knee pain",
  "Shoulder & hip pain",
  "Pinched nerves",
  "Breathing & rib pain",
];

const steps = [
  {
    id: "book-online",
    icon: ClipboardIcon,
    number: "01",
    title: "Book Online",
    description:
      "Schedule in seconds from any device — no insurance paperwork required upfront. We handle it for you.",
  },
  {
    id: "intake-insurance",
    icon: InsuranceIcon,
    number: "02",
    title: "Intake & Insurance",
    description:
      "We verify your auto coverage and handle all insurance communication so you can focus on healing.",
  },
  {
    id: "learn-plan",
    icon: PlanIcon,
    number: "03",
    title: "Learn a Plan",
    description:
      "Your doctor reviews your injury, explains every step of your recovery, and sets realistic goals with you.",
  },
  {
    id: "start-care",
    icon: HeartIcon,
    number: "04",
    title: "Start Care",
    description:
      "Begin hands-on treatment from day one. Most patients notice meaningful relief within their first few visits.",
  },
];

const insurers = [
  { name: "State Farm",  src: "/logos/state-farm.svg" },
  { name: "Allstate",   src: "/logos/allstate.svg" },
  { name: "GEICO",      src: "/logos/geico.svg" },
  { name: "Progressive",src: "/logos/progressive.svg" },
  { name: "USAA",       src: "/logos/usaa.svg" },
  { name: "Travelers",  src: "/logos/travelers.svg" },
];


/* ─────────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F7F3EB" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="space-y-7 animate-fade-in-up">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{ backgroundColor: "#e6f4f4", color: "#005F61" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" style={{ backgroundColor: "#005F61" }} />
            Accepting New Patients
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)", color: "#1a1a1a" }}
          >
            Get back to feeling{" "}
            <span
              className="italic"
              style={{ color: "#005F61" }}
            >
              yourself
            </span>{" "}
            after an accident.
          </h1>

          <p className="text-lg leading-relaxed max-w-lg" style={{ color: "#555" }}>
            Whiplash, neck and back pain don't just walk away — and neither should you.
            Curve Chiropractic helps Tampa Bay patients recover from auto-injury accidents
            fast, with personalized treatment that gets results.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#book" id="hero-book-cta" className="btn-cta">
              Book Your Appointment
            </a>
            <a
              href="tel:+18139994147"
              id="hero-call-cta"
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#005F61" }}
            >
              <PhoneIcon className="w-4 h-4" />
              (813) 999-4147
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-6 pt-1">
            {[
              "Same-day appointments",
              "Insurance accepted",
              "Free first evaluation",
            ].map((trust) => (
              <span key={trust} className="flex items-center gap-1.5 text-sm" style={{ color: "#555" }}>
                <CheckIcon className="w-4 h-4" style={{ color: "#005F61" } as React.CSSProperties} />
                {trust}
              </span>
            ))}
          </div>
        </div>

        {/* Right — photo + rating badge */}
        <div className="relative animate-slide-in-right">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ backgroundColor: "#e6f4f4", transform: "rotate(3deg)", zIndex: 0 }}
          />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ zIndex: 1 }}>
            <Image
              src="/justin1.jpg"
              alt="Dr. Justin explaining spinal anatomy to a patient at Curve Chiropractic Tampa Bay"
              width={640}
              height={560}
              className="w-full object-cover"
              style={{ aspectRatio: "640/560" }}
              priority
            />
          </div>

          {/* Rating badge */}
          <div
            className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
            style={{ backgroundColor: "#ffffff", zIndex: 2 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4" style={{ color: "#f59e0b" } as React.CSSProperties} />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#1a1a1a" }}>4.9 Rating</p>
              <p className="text-xs" style={{ color: "#888" }}>Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Trust Bar
   ───────────────────────────────────────────────── */
function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="border-y overflow-x-auto"
      style={{ backgroundColor: "#ffffff", borderColor: "rgba(0,95,97,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap flex-shrink-0" style={{ color: "#888" }}>
          Accepted By Most Insurers
        </p>
        <ul className="flex items-center gap-5 list-none flex-shrink-0">
          {insurers.map((insurer) => (
            <li key={insurer.name} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={insurer.src}
                alt={`${insurer.name} Insurance`}
                width={90}
                height={40}
                className="object-contain w-20 h-9 transition-all duration-300 hover:scale-110"
              />
            </li>
          ))}
          <li>
            <span
              className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border whitespace-nowrap"
              style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.25)", backgroundColor: "rgba(0,95,97,0.05)" }}
            >
              + many more
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────
   Services
   ───────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "#F7F3EB" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">Our Services</span>
          <h2 className="section-heading">
            Care built around your recovery
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#666" }}>
            Every patient gets a thorough exam, then a personalized treatment plan that helps
            you reach full recovery at home.
          </p>
        </div>

        {/* Grid: 5 service cards + 1 CTA card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <article key={svc.id} id={`service-${svc.id}`} className="service-card">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e6f4f4" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#005F61" } as React.CSSProperties} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)", color: "#1a1a1a" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {svc.description}
                </p>
              </article>
            );
          })}

          {/* CTA card — Teal, orange button */}
          <article
            id="service-cta-card"
            className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ backgroundColor: "#005F61" }}
          >
            <div>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <ClipboardIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}>
                Not sure where to start?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                Book a free evaluation and our team will build the right treatment plan for your specific injuries.
              </p>
            </div>
            <a href="#book" id="services-cta-book" className="btn-cta mt-6 self-start">
              Book Online
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Conditions
   ───────────────────────────────────────────────── */
function Conditions() {
  return (
    <section
      id="conditions"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <span className="section-label">Conditions We Treat</span>
          <h2 className="section-heading mt-1">Common after a car accident</h2>
          <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: "#444" }}>
            Symptoms from auto accidents often emerge days or weeks after the crash.
            We treat these familiar injuries every day and know the fastest way to get
            you stable and moving again.
          </p>
          <a href="#book" id="conditions-book-cta" className="btn-cta mt-8 inline-flex">
            Book an Evaluation
          </a>
        </div>

        {/* Right — symptom grid */}
        <div>
          <ul className="grid grid-cols-2 gap-3 list-none">
            {conditions.map((condition) => (
              <li
                key={condition}
                className="flex items-start gap-2.5 px-4 py-3.5 rounded-xl bg-[#F4F6F6]"
                style={{ boxShadow: "0 1px 4px rgba(0,95,97,0.07)" }}
              >
                <CheckIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#005F61" } as React.CSSProperties}
                />
                <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  {condition}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Process / Steps
   ───────────────────────────────────────────────── */
function Process() {
  return (
    <section id="why-us" className="py-20 md:py-28" style={{ backgroundColor: "#F7F3EB" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="section-label">What to Expect</span>
          <h2 className="section-heading">Your first visit, made simple</h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#666" }}>
            No confusing paperwork, no insurance runaround. From the moment you call us,
            it's straightforward, start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                id={`step-${step.id}`}
                className="relative"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-px -translate-y-1/2"
                    style={{ backgroundColor: "rgba(0,95,97,0.15)", width: "calc(100% - 2rem)", left: "calc(50% + 1.5rem)" }}
                  />
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#e6f4f4" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#005F61" } as React.CSSProperties} />
                </div>

                <div
                  className="text-xs font-bold tracking-widest mb-1"
                  style={{ color: "rgba(0,95,97,0.4)" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)", color: "#1a1a1a" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Location Panel
   ───────────────────────────────────────────────── */
function Location() {
  return (
    <section id="location" className="py-20 md:py-28" style={{ backgroundColor: "#F7F3EB" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2" style={{ minHeight: 380 }}>
          {/* Google Map embed */}
          <div className="relative min-h-64 md:min-h-full">
            <iframe
              title="Curve Chiropractic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.630097728445!2d-82.52026212398464!3d27.912654316049283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c338f165f101%3A0x2285a4b1994067d6!2sCurve%20Chiropractic!5e0!3m2!1sen!2sus!4v1783379644026!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-center p-10 md:p-14" style={{ backgroundColor: "#005F61" }}>
            <span
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Visit Us
            </span>
            <h2
              className="text-3xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
            >
              Curve Chiropractic
            </h2>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#7EB2DD" } as React.CSSProperties} />
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    3408 S Manhattan Ave, Ste 1<br />
                    Tampa, FL 33629
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#7EB2DD" } as React.CSSProperties} />
                <div>
                  <p className="text-sm font-semibold text-white">Hours</p>
                  <div className="text-sm mt-0.5 space-y-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <p>Mon–Fri: 8am – 6pm</p>
                    <p>Saturday: 9am – 1pm</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#7EB2DD" } as React.CSSProperties} />
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a
                    href="tel:+18139994147"
                    className="text-sm mt-0.5"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    (813) 999-4147
                  </a>
                </div>
              </div>
            </div>

            <a href="#book" id="location-book-cta" className="btn-cta mt-10 self-start">
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   CTA Banner
   ───────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#005F61" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: "#7EB2DD" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "#7EB2DD" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2
          className="section-heading-white mb-5"
        >
          Relief starts with one visit.
        </h2>
        <p
          className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Start your appointment today and let's get you moving again.
          Most insurance accepted. No-obligation first evaluation.
        </p>
        <a href="tel:+18139994147" id="banner-book-cta" className="btn-cta text-base px-10 py-4">
          Start Today →
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Footer
   ───────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ backgroundColor: "#342E37" }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" id="footer-logo" className="block mb-4">
            <Image
              src="/logo.png"
              alt="Curve Chiropractic"
              width={140}
              height={66}
              className="object-contain"
              style={{
                height: "38px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.85,
              }}
            />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(247,243,235,0.55)" }}>
            Helping Tampa Bay patients recover from auto-injury accidents with personalized,
            insurance-covered chiropractic care.
          </p>
        </div>

        {/* Services links */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Services
          </h3>
          <ul className="space-y-2.5 list-none">
            {["Spinal Adjustment", "Auto-Injury Rehab", "Massage Therapy", "Corrective Exercise", "Spinal Decompression"].map((s) => (
              <li key={s}>
                <Link
                  href="/#services"
                  id={`footer-svc-${s.toLowerCase().replace(/[\s-]/g, "-")}`}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Navigation
          </h3>
          <ul className="space-y-2.5 list-none">
            {[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/#conditions" },
              { label: "Why Choose Us", href: "/#why-us" },
              { label: "Location & Hours", href: "/#location" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
              { label: "Book Appointment", href: "/#book" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  id={`footer-nav-${link.label.toLowerCase().replace(/[\s&]/g, "-")}`}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Legal */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(247,243,235,0.4)" }}>
            Contact
          </h3>
          <address className="not-italic space-y-2 text-sm" style={{ color: "rgba(247,243,235,0.65)" }}>
            <p>13108 Cortez Blvd, Suite 203</p>
            <p>Tampa, FL 33526</p>
            <a
              href="tel:+18139994147"
              id="footer-phone"
              className="block mt-1 transition-colors duration-150"
              style={{ color: "rgba(247,243,235,0.65)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
            >
              (813) 999-4147
            </a>
          </address>

          {/* Legal links */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(247,243,235,0.1)" }}>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(247,243,235,0.4)" }}>
              Legal
            </h3>
            <ul className="space-y-2 list-none">
              <li>
                <Link
                  href="/privacy-policy"
                  id="footer-privacy-policy"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  id="footer-terms-of-service"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(247,243,235,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB2DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,243,235,0.65)")}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — dynamic copyright */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(247,243,235,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(247,243,235,0.35)" }}>
            © {year} Curve Chiropractic - Serving Tampa Bay. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(247,243,235,0.25)" }}>
            Designed with care in Tampa Bay, FL
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <SiteNavbar />
      <Hero />
      <TrustBar />
      <Services />
      <Conditions />
      <Process />
      <Location />
      <CTABanner />
      <Footer />
    </main>
  );
}
