"use client";

import { useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

/* ─── Icons ─────────────────────────────────────── */
function PhoneIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
function MailIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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
function ClockIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

/* ─── Contact Info ───────────────────────────────── */
const contactDetails = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "(813) 999-4147",
    sub: "Mon–Fri 9am–6pm · Sat 9am–1pm",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "info@curvechiropractic.com",
    sub: "We respond within 1 business day",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "13108 Cortez Blvd, Suite 203",
    sub: "Tampa, FL 33526",
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM",
    sub: "Saturday: 9:00 AM – 1:00 PM · Sun: Closed",
  },
];

/* ─── Page ───────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Resend API
    setSubmitted(true);
  };

  return (
    <main>
      <SiteNavbar />

      {/* ── Page Header ── */}
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
            Get In Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
          >
            We&apos;d love to hear from you
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Ready to start your recovery? Have a question? Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Split Content ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* ── Left Column: Info + Map ── */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: "#005F61", fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
            >
              Clinic Information
            </h2>

            <div className="space-y-6 mb-10">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,95,97,0.08)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "#005F61" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#005F61" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{item.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#888" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
              <iframe
                title="Curve Chiropractic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.7!2d-82.5717!3d28.3113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c6f1b1f1b1f1%3A0x1!2s13108+Cortez+Blvd%2C+Brooksville%2C+FL+34613!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div
            className="rounded-3xl p-8 md:p-10 shadow-xl border"
            style={{ backgroundColor: "#F7F3EB", borderColor: "rgba(0,0,0,0.06)" }}
          >
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-jakarta, system-ui, sans-serif)" }}
            >
              Send Us a Message
            </h2>
            <p className="text-sm mb-8" style={{ color: "#666" }}>
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "rgba(0,95,97,0.06)", border: "1px solid rgba(0,95,97,0.2)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(0,95,97,0.12)" }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#005F61" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#005F61" }}>Message Received!</h3>
                <p className="text-sm" style={{ color: "#444" }}>
                  Thank you for reaching out. Our team will contact you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#555" }}>
                    Full Name <span style={{ color: "#BA5A31" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200"
                    style={{
                      borderColor: "rgba(0,0,0,0.12)",
                      color: "#1a1a1a",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#005F61"; e.target.style.boxShadow = "0 0 0 3px rgba(0,95,97,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#555" }}>
                    Email Address <span style={{ color: "#BA5A31" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1a1a1a" }}
                    onFocus={(e) => { e.target.style.borderColor = "#005F61"; e.target.style.boxShadow = "0 0 0 3px rgba(0,95,97,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#555" }}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(813) 555-0100"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1a1a1a" }}
                    onFocus={(e) => { e.target.style.borderColor = "#005F61"; e.target.style.boxShadow = "0 0 0 3px rgba(0,95,97,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#555" }}>
                    Message <span style={{ color: "#BA5A31" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your injury or how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1a1a1a" }}
                    onFocus={(e) => { e.target.style.borderColor = "#005F61"; e.target.style.boxShadow = "0 0 0 3px rgba(0,95,97,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-cta w-full text-base py-4"
                >
                  Send Message
                </button>

                <p className="text-xs text-center" style={{ color: "#aaa" }}>
                  By submitting, you agree to be contacted by our team. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
