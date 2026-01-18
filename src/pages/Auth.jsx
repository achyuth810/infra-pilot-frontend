import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "../components/AppLayout";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const panel = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function useQueryMode() {
  const { search } = useLocation();
  return useMemo(
    () => new URLSearchParams(search).get("mode") || "login",
    [search]
  );
}

export default function Auth() {
  const navigate = useNavigate();
  const modeFromUrl = useQueryMode();
  const [mode, setMode] = useState(modeFromUrl); // login | signup | forgot
  const [loading, setLoading] = useState(false);

  const setModeAndUrl = (next) => {
    setMode(next);
    if (next === "signup") navigate("/auth?mode=signup", { replace: true });
    else if (next === "forgot") navigate("/auth?mode=forgot", { replace: true });
    else navigate("/auth", { replace: true });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for Cognito
    setTimeout(() => {
      setLoading(false);
      alert("AWS Cognito will be connected here.");
    }, 600);
  };

  return (
    <AppLayout>
      <motion.div
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="auth-page"
      >
        <div className="w-full max-w-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold">
              {mode === "signup"
                ? "Create your account"
                : mode === "forgot"
                ? "Reset password"
                : "Welcome back"}
            </h1>
            <p className="mt-3 text-white/70">
              {mode === "signup"
                ? "Start your journey with InfraPilot Tech."
                : mode === "forgot"
                ? "Enter your email to reset your password."
                : "Log in to continue."}
            </p>
          </div>

          {/* Tabs */}
          <div className="glass rounded-3xl p-2 flex gap-2 mb-4">
            <button
              onClick={() => setModeAndUrl("login")}
              className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                mode === "login"
                  ? "bg-blue-600 text-white"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setModeAndUrl("signup")}
              className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-blue-600 text-white"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              Sign up
            </button>
          </div>

          {/* Card */}
          <div className="auth-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                variants={panel}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <form onSubmit={onSubmit} className="space-y-4">
                  {mode === "signup" && (
                    <>
                      <input className="auth-input" placeholder="Full Name" />
                      <input className="auth-input" placeholder="Email" />
                      <input
                        className="auth-input"
                        placeholder="Password"
                        type="password"
                      />
                      <input
                        className="auth-input"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </>
                  )}

                  {mode === "login" && (
                    <>
                      <input className="auth-input" placeholder="Email" />
                      <input
                        className="auth-input"
                        placeholder="Password"
                        type="password"
                      />
                      <div className="flex justify-between items-center">
                        <label className="text-xs text-white/70">
                          <input type="checkbox" className="mr-2 accent-blue-600" />
                          Remember me
                        </label>
                        <button
                          type="button"
                          onClick={() => setModeAndUrl("forgot")}
                          className="auth-link"
                        >
                          Forgot password?
                        </button>
                      </div>
                    </>
                  )}

                  {mode === "forgot" && (
                    <>
                      <input className="auth-input" placeholder="Email" />
                      <div className="text-xs text-white/60">
                        Reset link will be sent via email.
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-blue w-full py-3"
                  >
                    {loading
                      ? "Please wait..."
                      : mode === "signup"
                      ? "Create account"
                      : mode === "forgot"
                      ? "Send reset link"
                      : "Login"}
                  </button>

                  {mode === "forgot" && (
                    <button
                      type="button"
                      onClick={() => setModeAndUrl("login")}
                      className="btn-outline w-full py-3"
                    >
                      Back to Login
                    </button>
                  )}
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}