const LOGO_TOKEN = import.meta.env.VITE_LOGO_TOKEN;

const logos = [
  "tesla.com",
 "tcs.com",
 "walmart.com",
 "meta.com",
 "rivian.com",
 "google.com",
 "cars.com",
 "united.com",
 "delta.com",
 "dell.com",
 "wipro.com",
 "sandp.com",
 "chase.com",
 "cat.com",
 "open.com",
];

export default function LogoMarquee() {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white">
          Trusted by Professionals From
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Companies our clients have interviewed with and joined.
        </p>

        {/* Glossy marquee */}
        <div className="mt-10 overflow-hidden rounded-3xl glass">
          <div className="flex items-center gap-16 px-10 py-10 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((domain, i) => (
              <img
                key={i}
                src={`https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=96&retina=true`}
                alt={domain}
                className="h-[90px] w-auto opacity-95"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}