import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount: 0.25 },
});

const plans = [
  { title: "1 Month Career Support", price: "$199", points: ["Resume & ATS Optimization", "Targeted Job Applications", "Professional Submissions", "Weekly Progress Tracking"] },
  { title: "3 Months Career Support", price: "$549", points: ["Everything in 1 Month", "Interview Preparation", "LinkedIn Profile Optimization", "Ongoing Application Strategy"] },
  { title: "6 Months Career Support", price: "$999", points: ["End-to-End Job Search", "Dedicated Career Manager", "High Volume Applications", "Priority Interview Support"] },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="services">
      <motion.div {...fadeUp(0)} className="text-center">
        <h2 className="text-3xl font-semibold text-white">Services & Plans</h2>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          Managed job application support, interview prep, and career strategy.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div key={plan.title} {...fadeUp(0.1 + i * 0.1)} className="glass rounded-3xl p-6 flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
              <div className="mt-2 text-4xl font-bold text-blue-500">{plan.price}</div>

              <ul className="mt-5 space-y-2 text-sm text-white">
                {plan.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blue-400">✔</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/contact" className="btn-blue mt-6 w-full justify-center">
              Pay Now
            </NavLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}