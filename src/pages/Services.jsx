import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount: 0.25 },
});

const cards = [
  {
    title: "Resume Optimization",
    desc: "ATS-ready structure, impact bullets, and a clean premium format.",
  },
  {
    title: "Interview Prep",
    desc: "Mock interviews, feedback, and a question bank tailored to your role.",
  },
  {
    title: "Career Strategy",
    desc: "Weekly plan for networking, applications, and skill upgrades.",
  },
  {
    title: "LinkedIn Makeover",
    desc: "Headline, about section, keywords, and recruiter-friendly profile.",
  },
  {
    title: "Portfolio / Projects",
    desc: "Present your work like a product—story, visuals, and proof.",
  },
  {
    title: "Consultation",
    desc: "Clear next steps based on your profile and target roles.",
  },
];

export default function Services() {
  return (
    <AppLayout>
      <motion.div
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-6xl px-4 py-10 text-black"
      >
        <motion.h1 {...fadeUp(0)} className="text-4xl font-semibold">
          Services
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="mt-4 text-black/70 max-w-3xl">
          Choose what you need. Each service is delivered with a premium, clear,
          step-by-step process.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(0.08 + i * 0.03)}
              className="glass rounded-3xl p-6"
            >
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-black/70 text-sm">{c.desc}</div>
              <div className="mt-5 flex gap-2">
                <a className="btn-blue" href="/contact">
                  Enquire
                </a>
                <a className="btn-outline" href="/auth?mode=signup">
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  );
}