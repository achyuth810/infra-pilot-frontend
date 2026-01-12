export default function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-semibold leading-tight">
            InfraPilot Tech
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            We build modern websites, AI-powered resume platforms, and scalable
            cloud solutions.
          </p>
  
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-white text-black font-medium">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20">
              Our Services
            </button>
          </div>
        </div>
      </div>
    );
  }