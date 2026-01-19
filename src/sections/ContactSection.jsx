import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/images/contact1.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, text: "Please fill all fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error);

      setStatus({ ok: true, text: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ ok: false, text: "Failed to send. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <p className="mt-4 text-white/70">
            Tell us your goals. We’ll guide the next steps.
          </p>
          <img
            src={contactImg}
            alt="Contact"
            className="mt-8 rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
            />
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
            />

            {status && (
              <div
                className={`p-3 rounded-xl text-sm ${
                  status.ok
                    ? "bg-green-500/15 text-green-300"
                    : "bg-red-500/15 text-red-300"
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}