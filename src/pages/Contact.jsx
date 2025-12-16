// src/pages/Contact.jsx
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_kredxc9";
const TEMPLATE_ID = "template_duobvpf";
const PUBLIC_KEY = "Rmweo0z_13yvDUDUA";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields before sending.");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // main variables we want to use in the EmailJS template
          from_name: form.name,
          from_email: form.email,
          message: form.message,

          // extra aliases in case your template still uses these:
          name: form.name,
          email: form.email,
          title: "Junoon 4.0 Website Contact",
        },
        PUBLIC_KEY
      );

      alert("✅ Message sent successfully! We’ll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-28 pb-20 px-6 md:px-10 bg-black min-h-screen">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Heading */}
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Junoon 4.0 • Reach Us
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="block text-white">Contact the</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Organizing Team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-200/80">
            For registrations, sponsorship, scheduling, media coverage, or
            general queries — we’re here.
          </p>
        </header>

        {/* Cards */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:umang25@gce.org"
            className="
              group relative overflow-hidden rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 space-y-4
              shadow-[0_0_35px_rgba(0,0,0,0.5)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(236,72,153,0.6)]
              cursor-pointer
            "
          >
            <div
              className="
                pointer-events-none absolute -inset-20 -z-10
                bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/25
                opacity-0 blur-3xl
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />
            <FiMail className="h-8 w-8 text-sky-300" />
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="text-slate-300 text-sm">umang25@gce.org</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+917367055728"
            className="
              group relative overflow-hidden rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 space-y-4
              shadow-[0_0_35px_rgba(0,0,0,0.5)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(236,72,153,0.6)]
              cursor-pointer
            "
          >
            <div
              className="
                pointer-events-none absolute -inset-20 -z-10
                bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/25
                opacity-0 blur-3xl
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />
            <FiPhone className="h-8 w-8 text-fuchsia-300" />
            <h3 className="text-xl font-bold text-white">Phone</h3>
            <p className="text-slate-300 text-sm">+91 7367055728</p>
          </a>

          {/* Campus */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Government+Engineering+College+Aurangabad+Bihar"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative overflow-hidden rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 space-y-4
              shadow-[0_0_35px_rgba(0,0,0,0.5)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(236,72,153,0.6)]
              cursor-pointer
            "
          >
            <div
              className="
                pointer-events-none absolute -inset-20 -z-10
                bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/25
                opacity-0 blur-3xl
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />
            <FiMapPin className="h-8 w-8 text-rose-300" />
            <h3 className="text-xl font-bold text-white">Campus</h3>
            <p className="text-slate-300 text-sm">
              Government Engineering College, Aurangabad
            </p>
          </a>
        </section>

        {/* Contact Form */}
        <section className="mt-12 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-fuchsia-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-fuchsia-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-fuchsia-500"
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className="
                w-full rounded-xl
                bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500
                py-3 font-semibold text-black
                shadow-[0_0_18px_rgba(236,72,153,0.6)]
                transition-transform duration-200
                hover:scale-105 active:scale-95
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
