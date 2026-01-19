import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import Testimonials from "../components/Testimonials";

import aboutImg from "../assets/images/about1.png";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
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
        className="mx-auto max-w-6xl px-4 py-16 text-white"
      >
        {/* ================= 1. HERO / ABOUT INTRO ================= */}
        <section className="mt-10">
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {/* LEFT */}
            <motion.div
              {...fadeUp(0)}
              className="glass rounded-3xl p-8 md:p-12 flex flex-col justify-center"
            >
              <h1 className="text-4xl font-semibold text-white">
                Grow Your IT Career Now.
              </h1>

              <p className="mt-4 text-white/90 leading-relaxed">
                <span className="font-semibold text-white">Custom IT Resumes</span>
                <br />
                Optimize your resume for ATS, showcase your skills, and attract
                top employers with expert help.
              </p>

              <div className="mt-6 text-white/70 text-sm">
                Resume • LinkedIn • Interview Prep • Job Strategy
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div {...fadeUp(0.1)}>
              <img
                src={aboutImg}
                alt="About InfraPilot Tech"
                className="w-full h-full rounded-3xl object-cover shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= 2. WHAT WE DO ================= */}
        <motion.section {...fadeUp(0.2)} className="mt-24">
          <h2 className="text-3xl font-semibold text-white">
            Supporting Your IT Career Journey
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="premium-box p-6">
              <h3 className="text-2xl font-semibold text-white">
                Mock Interviews & Career Coaching
              </h3>

              <p className="mt-4 text-base text-white/90 leading-relaxed">
                Practice interviews with experienced IT professionals who
                understand real recruiter expectations and current hiring trends.
                Our mock interviews are designed to improve confidence,
                communication, and technical clarity.
              </p>

              <p className="mt-5 text-lg font-semibold text-white">
                What’s included:
              </p>

              <ul className="mt-3 space-y-2 text-sm text-white/85">
                <li>• One-on-one mock interview sessions</li>
                <li>• Role-specific technical & behavioral questions</li>
                <li>• Detailed feedback with clear improvement points</li>
                <li>• Guidance to handle real interview scenarios</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="premium-box p-6">
              <h3 className="text-2xl font-semibold text-white">
                Certifications & Learning Support
              </h3>

              <p className="mt-4 text-base text-white/90 leading-relaxed">
                Clear guidance on choosing the right certifications and learning
                path for your IT career goals. We help you stay focused and
                prepared with structured support that aligns learning with real
                hiring expectations.
              </p>

              <p className="mt-5 text-lg font-semibold text-white">
                What’s included:
              </p>

              <ul className="mt-3 space-y-2 text-sm text-white/85">
                <li>• Certification roadmap for AWS, Azure, Salesforce, and more</li>
                <li>• Study guidance and curated resources</li>
                <li>• Balance learning with active job search</li>
                <li>• Ongoing motivation & progress tracking</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ================= 3. WHY US ================= */}
        <motion.section {...fadeUp(0.3)} className="mt-24">
          <h2 className="text-3xl font-semibold text-white">
            Why InfraPilot Tech?
          </h2>

          <div className="mt-8 space-y-6 max-w-4xl">
            <div className="premium-box p-6">
              <h4 className="text-lg font-semibold text-white">
                How are you different from resume services?
              </h4>
              <p className="mt-2 text-white/90">
                We don’t stop at resumes. We support the entire job journey 
                positioning, applications, and interview prep.
              </p>
            </div>

            <div className="premium-box p-6">
              <h4 className="text-lg font-semibold text-white">
                Do you apply to jobs for candidates?
              </h4>
              <p className="mt-2 text-white/90">
                Yes. Our managed application support ensures consistency and
                volume  without shortcuts.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= 4. TESTIMONIALS ================= */}
        <motion.section {...fadeUp(0.4)} className="mt-24">
          <Testimonials />
        </motion.section>
      </motion.div>
    </AppLayout>
  );
}