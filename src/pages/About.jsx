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

export default function About() {
  return (
    <AppLayout>
      <motion.div
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-6xl px-4 py-10 text-white"
      >
        <motion.h1 {...fadeUp(0)} className="text-4xl font-semibold">
          About
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="mt-4 text-white/70 max-w-3xl">
          InfraPilot Tech is a premium consultancy focused on building job-ready
          profiles—resume, interviews, and strategy—delivered with a product-level
          experience.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Mission",
              d: "Help candidates convert skills into offers with a clear plan.",
            },
            {
              t: "Approach",
              d: "Structured execution—review, optimize, practice, apply.",
            },
            {
              t: "Quality",
              d: "Premium outcomes with measurable improvement and confidence.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              {...fadeUp(0.1 + i * 0.05)}
              className="glass rounded-3xl p-6"
            >
              <div className="text-lg font-semibold">{x.t}</div>
              <div className="mt-2 text-white/70 text-sm">{x.d}</div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-12 glass rounded-3xl p-7">
          <div className="text-2xl font-semibold">What you can edit later</div>
          <p className="mt-3 text-white/70">
            This page is a clean template—replace text with your finalized story,
            add your photos/videos, and we can enhance with timeline/metrics.
          </p>
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}