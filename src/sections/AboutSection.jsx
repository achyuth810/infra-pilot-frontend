import { motion } from "framer-motion";
import aboutImg from "../assets/images/about1.png"; // change if your file name differs

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount: 0.25 },
});

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="about">
      <div className="grid gap-10 md:grid-cols-2 items-stretch">
        <motion.div {...fadeUp(0)} className="glass rounded-3xl p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white">Grow Your IT Career Now</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
          Custom IT Resumes
          Optimize your resume for ATS, showcase your skills, and attract top employers with expert help.
          </p>
          <div className="mt-6 text-white/70 text-sm">
            Resume • LinkedIn • Interview Prep • Job Strategy
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="relative">
          <img
            src={aboutImg}
            alt="About InfraPilot Tech"
            className="w-full h-full rounded-3xl object-cover shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}