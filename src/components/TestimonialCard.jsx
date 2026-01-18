import { motion } from "framer-motion";

export default function TestimonialCard({ name, role, text, rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="min-w-[320px] max-w-[320px] rounded-3xl p-6
                 bg-white/15 backdrop-blur-xl border border-white/20
                 shadow-lg text-white"
    >
      {/* Stars */}
      <div className="flex items-center gap-1 text-yellow-400 mb-3">
        {Array.from({ length: full }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        {half ? <span>★</span> : null}
        <span className="ml-2 text-xs text-white/60">{rating}/5</span>
      </div>

      {/* Text */}
      <p className="text-sm text-white/80 leading-relaxed">“{text}”</p>

      {/* Divider line above name */}
      <div className="mt-5 pt-4 border-t border-white/15">
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-white/60">{role}</div>
      </div>
    </motion.div>
  );
}