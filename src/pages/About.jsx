import { motion } from "framer-motion";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function About() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-72px)] bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold">About InfraPilot Tech</h1>

        <p className="mt-6 text-white/70 leading-relaxed">
          We’re a consultancy focused on practical, high-quality delivery. Our approach is simple:
          understand the goal, design the right solution, and execute with discipline.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium">What we value</div>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>• Clarity over complexity</li>
              <li>• Reliability and security</li>
              <li>• Performance and UX</li>
              <li>• Sustainable systems</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium">How we work</div>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>• Discovery → plan → build</li>
              <li>• Weekly updates & deliverables</li>
              <li>• Documentation + handover</li>
              <li>• Long-term support options</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}