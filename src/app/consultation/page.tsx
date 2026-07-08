"use client";

import { useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

/* ─── Icons ──────────────────────────────────────────────────────────────────── */
function PhoneIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
function ClockIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
function MapPinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

/* ─── Shared input style helpers ─────────────────────────────────────────────── */
const inputBase =
  "w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200";
const inputStyle = { borderColor: "rgba(0,0,0,0.12)", color: "#1a1a1a" };
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "#005F61";
  e.target.style.boxShadow = "0 0 0 3px rgba(0,95,97,0.12)";
};
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "rgba(0,0,0,0.12)";
  e.target.style.boxShadow = "none";
};

const labelClass = "block text-xs font-bold tracking-widest uppercase mb-1.5";
const labelStyle = { color: "#555" };
const required = <span style={{ color: "#BA5A31" }}>*</span>;

/* ─── Form state type ────────────────────────────────────────────────────────── */
type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  preferredDate: string;
  preferredTime: string;
  isNewPatient: string;
  visitReason: string;
  symptoms: string[];
  otherSymptom: string;
  painLevel: string;
  painDuration: string;
  injuryType: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  message: string;
};

const SYMPTOM_OPTIONS = [
  "Neck pain",
  "Lower back pain",
  "Mid-back pain",
  "Headaches / migraines",
  "Shoulder pain",
  "Sciatica",
  "Numbness / tingling",
  "Whiplash",
  "Herniated disc",
  "Tech neck / posture",
  "Hip pain",
  "Knee pain",
];

const INSURANCE_OPTIONS = [
  "State Farm",
  "Allstate",
  "GEICO",
  "Progressive",
  "USAA",
  "Travelers",
  "Nationwide",
  "Liberty Mutual",
  "Farmers",
  "Medicare",
  "Medicaid",
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealth",
  "Self-pay / No insurance",
  "Other",
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function ConsultationPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    preferredDate: "",
    preferredTime: "",
    isNewPatient: "yes",
    visitReason: "",
    symptoms: [],
    otherSymptom: "",
    painLevel: "",
    painDuration: "",
    injuryType: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSymptomToggle = (symptom: string) => {
    setForm((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend / email API
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <SiteNavbar />

      {/* ── Page Hero ── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ backgroundColor: "#005F61" }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#7EB2DD" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#7EB2DD" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
          >
            New Patient Intake
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            Schedule Your Consultation
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Fill out the form below and our team will confirm your appointment within one business day. Same-day slots are often available.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F7F3EB" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* ── Left: Sidebar info ── */}
          <aside className="lg:col-span-1 space-y-6">

            {/* What to expect card */}
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "#005F61" }}
            >
              <h2
                className="text-lg font-bold text-white mb-5"
                style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
              >
                What to Expect
              </h2>
              <ul className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                {[
                  ["01", "We review your intake form before your visit so Dr. Murray is prepared."],
                  ["02", "Your first appointment includes a full structural exam and X-rays if needed."],
                  ["03", "You leave with a written care plan and a clear timeline for recovery."],
                  ["04", "Most auto-insurance policies cover 100% of your treatment cost."],
                ].map(([num, text]) => (
                  <li key={num} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff" }}
                    >
                      {num}
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div
              className="rounded-2xl p-7 border"
              style={{ backgroundColor: "#ffffff", borderColor: "rgba(0,95,97,0.1)" }}
            >
              <h2
                className="text-base font-bold mb-5"
                style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)", color: "#1a1a1a" }}
              >
                Prefer to Call?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,95,97,0.08)" }}>
                    <PhoneIcon className="w-4 h-4" style={{ color: "#005F61" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#005F61" }}>Phone</p>
                    <a href="tel:+18138323164" className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>(813) 832-3164</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,95,97,0.08)" }}>
                    <ClockIcon className="w-4 h-4" style={{ color: "#005F61" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#005F61" }}>Hours</p>
                    <p className="text-sm" style={{ color: "#1a1a1a" }}>Mon–Fri: 9am – 6pm</p>
                    <p className="text-sm" style={{ color: "#777" }}>Sat: 9am – 1pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,95,97,0.08)" }}>
                    <MapPinIcon className="w-4 h-4" style={{ color: "#005F61" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#005F61" }}>Location</p>
                    <p className="text-sm" style={{ color: "#1a1a1a" }}>3408 S Manhattan Ave, Ste 1</p>
                    <p className="text-sm" style={{ color: "#777" }}>Tampa, FL 33629</p>
                  </div>
                </div>
              </div>
            </div>

          </aside>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 md:p-10 shadow-xl border"
              style={{ backgroundColor: "#ffffff", borderColor: "rgba(0,0,0,0.06)" }}
            >
              {submitted ? (
                /* ── Success state ── */
                <div className="py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "rgba(0,95,97,0.1)" }}
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#005F61" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)", color: "#005F61" }}
                  >
                    Request Received!
                  </h2>
                  <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "#555" }}>
                    Thank you, <strong>{form.firstName}</strong>. Our team will review your intake and reach out within one business day to confirm your appointment.
                  </p>
                  <p className="mt-4 text-sm" style={{ color: "#888" }}>
                    Questions? Call us at{" "}
                    <a href="tel:+18138323164" className="font-semibold" style={{ color: "#005F61" }}>(813) 832-3164</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>

                  {/* ── Section: Personal Info ── */}
                  <fieldset>
                    <legend
                      className="text-sm font-bold tracking-widest uppercase pb-3 mb-5 w-full border-b"
                      style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.15)" }}
                    >
                      Personal Information
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-firstName" className={labelClass} style={labelStyle}>First Name {required}</label>
                        <input id="c-firstName" name="firstName" type="text" required placeholder="John" value={form.firstName} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-lastName" className={labelClass} style={labelStyle}>Last Name {required}</label>
                        <input id="c-lastName" name="lastName" type="text" required placeholder="Smith" value={form.lastName} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass} style={labelStyle}>Email Address {required}</label>
                        <input id="c-email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className={labelClass} style={labelStyle}>Phone Number {required}</label>
                        <input id="c-phone" name="phone" type="tel" required placeholder="(813) 555-0100" value={form.phone} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-dob" className={labelClass} style={labelStyle}>Date of Birth</label>
                        <input id="c-dob" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-newPatient" className={labelClass} style={labelStyle}>Are You a New Patient?</label>
                        <select id="c-newPatient" name="isNewPatient" value={form.isNewPatient} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="yes">Yes — first visit</option>
                          <option value="no">No — returning patient</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* ── Section: Appointment Preferences ── */}
                  <fieldset>
                    <legend
                      className="text-sm font-bold tracking-widest uppercase pb-3 mb-5 w-full border-b"
                      style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.15)" }}
                    >
                      Appointment Preferences
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-preferredDate" className={labelClass} style={labelStyle}>Preferred Date</label>
                        <input id="c-preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="c-preferredTime" className={labelClass} style={labelStyle}>Preferred Time</label>
                        <select id="c-preferredTime" name="preferredTime" value={form.preferredTime} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select a time --</option>
                          <option value="morning">Morning (9am – 12pm)</option>
                          <option value="afternoon">Afternoon (12pm – 3pm)</option>
                          <option value="late-afternoon">Late Afternoon (3pm – 6pm)</option>
                          <option value="saturday">Saturday Morning</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="c-visitReason" className={labelClass} style={labelStyle}>Primary Reason for Visit {required}</label>
                        <select id="c-visitReason" name="visitReason" required value={form.visitReason} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select a reason --</option>
                          <option value="auto-accident">Auto Accident / Injury</option>
                          <option value="chronic-pain">Chronic Pain</option>
                          <option value="new-injury">New Injury (non-auto)</option>
                          <option value="prenatal">Prenatal Care</option>
                          <option value="posture">Posture / Tech Neck</option>
                          <option value="wellness">General Wellness</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* ── Section: Symptoms ── */}
                  <fieldset>
                    <legend
                      className="text-sm font-bold tracking-widest uppercase pb-3 mb-5 w-full border-b"
                      style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.15)" }}
                    >
                      Symptoms &amp; Pain
                    </legend>

                    {/* Symptom checkboxes */}
                    <div className="mb-5">
                      <p className={labelClass} style={labelStyle}>Select All That Apply</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
                        {SYMPTOM_OPTIONS.map((symptom) => {
                          const checked = form.symptoms.includes(symptom);
                          return (
                            <button
                              key={symptom}
                              type="button"
                              id={`symptom-${symptom.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                              onClick={() => handleSymptomToggle(symptom)}
                              className="text-left text-xs font-medium px-3 py-2.5 rounded-xl border transition-all duration-150"
                              style={{
                                backgroundColor: checked ? "rgba(0,95,97,0.08)" : "#F7F3EB",
                                borderColor: checked ? "#005F61" : "rgba(0,0,0,0.1)",
                                color: checked ? "#005F61" : "#555",
                                fontWeight: checked ? 700 : 500,
                              }}
                            >
                              {checked ? "✓ " : ""}{symptom}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Pain level */}
                      <div>
                        <label htmlFor="c-painLevel" className={labelClass} style={labelStyle}>Current Pain Level (1–10)</label>
                        <select id="c-painLevel" name="painLevel" value={form.painLevel} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select level --</option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={String(i + 1)}>
                              {i + 1} — {i < 3 ? "Mild" : i < 6 ? "Moderate" : i < 9 ? "Severe" : "Worst possible"}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Pain duration */}
                      <div>
                        <label htmlFor="c-painDuration" className={labelClass} style={labelStyle}>How Long Have You Had Pain?</label>
                        <select id="c-painDuration" name="painDuration" value={form.painDuration} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select duration --</option>
                          <option value="days">Less than a week</option>
                          <option value="weeks">1–4 weeks</option>
                          <option value="1-3months">1–3 months</option>
                          <option value="3-6months">3–6 months</option>
                          <option value="6-12months">6–12 months</option>
                          <option value="1year+">More than a year</option>
                        </select>
                      </div>

                      {/* Injury type */}
                      <div className="sm:col-span-2">
                        <label htmlFor="c-injuryType" className={labelClass} style={labelStyle}>Type of Injury / Cause</label>
                        <select id="c-injuryType" name="injuryType" value={form.injuryType} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select cause --</option>
                          <option value="auto-accident">Auto Accident</option>
                          <option value="slip-fall">Slip &amp; Fall</option>
                          <option value="sports">Sports / Athletic Injury</option>
                          <option value="work">Work / Occupational Injury</option>
                          <option value="gradual">Gradual / No Specific Incident</option>
                          <option value="unknown">Unknown</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* ── Section: Insurance ── */}
                  <fieldset>
                    <legend
                      className="text-sm font-bold tracking-widest uppercase pb-3 mb-5 w-full border-b"
                      style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.15)" }}
                    >
                      Insurance Information
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-insurance" className={labelClass} style={labelStyle}>Insurance Provider</label>
                        <select id="c-insurance" name="insuranceProvider" value={form.insuranceProvider} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                          <option value="">-- Select provider --</option>
                          {INSURANCE_OPTIONS.map((ins) => (
                            <option key={ins} value={ins}>{ins}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="c-policyNumber" className={labelClass} style={labelStyle}>Policy / Claim Number</label>
                        <input id="c-policyNumber" name="insurancePolicyNumber" type="text" placeholder="Optional" value={form.insurancePolicyNumber} onChange={handleChange} className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                    </div>
                    <p className="mt-3 text-xs" style={{ color: "#888" }}>
                      Don&apos;t know your insurance info? No problem — we can help you verify coverage when you arrive.
                    </p>
                  </fieldset>

                  {/* ── Section: Additional Notes ── */}
                  <fieldset>
                    <legend
                      className="text-sm font-bold tracking-widest uppercase pb-3 mb-5 w-full border-b"
                      style={{ color: "#005F61", borderColor: "rgba(0,95,97,0.15)" }}
                    >
                      Additional Notes
                    </legend>
                    <div>
                      <label htmlFor="c-message" className={labelClass} style={labelStyle}>Anything else we should know?</label>
                      <textarea
                        id="c-message"
                        name="message"
                        rows={4}
                        placeholder="Previous treatments, medications, specific concerns, or questions for Dr. Murray..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200 resize-none"
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                  </fieldset>

                  {/* ── Submit ── */}
                  <div>
                    <button
                      id="consultation-submit"
                      type="submit"
                      className="btn-cta w-full text-base py-4"
                    >
                      Request My Consultation →
                    </button>
                    <p className="text-xs text-center mt-3" style={{ color: "#aaa" }}>
                      By submitting, you agree to be contacted by our team. We never share your information.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
