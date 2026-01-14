import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import AuthShell from "../components/AuthShell";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Auth() {
  const [mode, setMode] = useState("login"); // "login" | "signup"

  // shared
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // signup fields
  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const title = useMemo(
    () => (mode === "login" ? "Welcome back" : "Create your account"),
    [mode]
  );

  const subtitle = useMemo(
    () =>
      mode === "login"
        ? "Login to continue."
        : "Join and start your premium journey.",
    [mode]
  );

  const submitLogin = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await axios.post(
        `${API_URL}/auth/login`,
        { email: loginEmail, password: loginPassword },
        { withCredentials: true }
      );
      window.location.href = "/";
    } catch (error) {
      setErr(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await axios.post(
        `${API_URL}/auth/signup`,
        { fullName, email: signupEmail, password: signupPassword },
        { withCredentials: true }
      );
      window.location.href = "/";
    } catch (error) {
      setErr(error?.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title={title} subtitle={subtitle}>
      {/* Toggle */}
      <div className="glass rounded-2xl p-1 flex gap-1">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={[
            "w-1/2 rounded-2xl px-4 py-2 text-sm font-semibold transition",
            mode === "login"
              ? "bg-white text-black"
              : "text-white/80 hover:text-white",
          ].join(" ")}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={[
            "w-1/2 rounded-2xl px-4 py-2 text-sm font-semibold transition",
            mode === "signup"
              ? "bg-white text-black"
              : "text-white/80 hover:text-white",
          ].join(" ")}
        >
          Sign up
        </button>
      </div>

      {/* Error */}
      {err ? (
        <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {err}
        </div>
      ) : null}

      {/* Animated forms */}
      <div className="relative mt-5">
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.form
              key="login"
              onSubmit={submitLogin}
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 22 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-4"
            >
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-white/35"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Password</label>
                <input
                  className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-white/35"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                disabled={loading}
                className="btn-solid w-full justify-center inline-flex"
                type="submit"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="flex justify-between text-sm text-white/70">
                <a className="hover:text-white transition" href="/forgot-password">
                  Forgot password?
                </a>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="hover:text-white transition"
                >
                  New user? Sign up
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              onSubmit={submitSignup}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-4"
            >
              <div>
                <label className="text-sm text-white/70">Full name</label>
                <input
                  className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-white/35"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Akshitha"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-white/35"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Password</label>
                <input
                  className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-white/35"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <button
                disabled={loading}
                className="btn-solid w-full justify-center inline-flex"
                type="submit"
              >
                {loading ? "Creating..." : "Create account"}
              </button>

              <div className="text-sm text-white/70 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="hover:text-white transition"
                >
                  Login
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </AuthShell>
  );
}