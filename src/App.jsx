export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
      <div className="w-[420px] rounded-2xl bg-glass backdrop-blur-xl border border-white/10 shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-semibold mb-2">
          InfraPilot Tech
        </h1>
        <p className="text-sm text-white/70 mb-6">
          Build. Scale. Deploy.
        </p>

        <button className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}