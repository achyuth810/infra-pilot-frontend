import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "../components/AppLayout";
import { signUp, confirmSignUp, signIn } from "aws-amplify/auth";

export default function Auth() {
  const navigate = useNavigate();

  // modes
  const [mode, setMode] = useState("login"); // login | signup | verify
  const [loading, setLoading] = useState(false);

  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobStream, setJobStream] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  /* ======================
     VALIDATIONS
  ====================== */
  const nameValid =
    name.trim().length >= 3 && name.trim().length <= 20;

  const jobValid =
    jobStream.trim().length >= 2 && jobStream.trim().length <= 25;

  const emailValid = /\S+@\S+\.\S+/.test(email);

  const passwordValid =
    password.length >= 8 && password.length <= 15;

  /* ======================
     HANDLERS
  ====================== */
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!nameValid)
      return setError("Name must be 3–20 characters.");
    if (!jobValid)
      return setError("Job stream must be 2–25 characters.");
    if (!emailValid)
      return setError("Enter a valid email.");
    if (!passwordValid)
      return setError("Password must be 8–15 characters.");

    setLoading(true);
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name,
            profile: jobStream,
          },
        },
      });
      setMode("verify");
      setMessage("OTP sent to your email.");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await confirmSignUp({
        username: email,
        confirmationCode: otp,
      });
      setMessage("Verified. Please login.");
      setMode("login");
    } catch (err) {
      setError(err.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn({ username: email, password });
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass w-full max-w-md p-8 rounded-3xl"
        >
          {/* Tabs */}
          {mode !== "verify" && (
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 rounded-xl font-semibold transition ${
                  mode === "login"
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-xl font-semibold transition ${
                  mode === "signup"
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Sign up
              </button>
            </div>
          )}

          {/* Messages */}
          {error && (
            <div className="mb-4 text-sm text-red-300 bg-red-500/10 p-3 rounded-xl">
              {error}
            </div>
          )}
          {message && (
            <div className="mb-4 text-sm text-white/80 bg-white/10 p-3 rounded-xl">
              {message}
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* LOGIN */}
            {mode === "login" && (
              <motion.form
                key="login"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleLogin}
                className="space-y-4"
              >
                <input
                  className="auth-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="relative">
                  <input
                    className="auth-input pr-12"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <button className="btn-blue w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </motion.form>
            )}

            {/* SIGNUP */}
            {mode === "signup" && (
              <motion.form
                key="signup"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSignup}
                className="space-y-4"
              >
                <input
                  className="auth-input"
                  placeholder="Full Name "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="auth-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="auth-input"
                  placeholder="Job Stream "
                  value={jobStream}
                  onChange={(e) => setJobStream(e.target.value)}
                />

                <div className="relative">
                  <input
                    className="auth-input pr-12"
                    placeholder="Password (8–15 chars)"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <button className="btn-blue w-full" disabled={loading}>
                  {loading ? "Creating account..." : "Sign up"}
                </button>
              </motion.form>
            )}

            {/* VERIFY */}
            {mode === "verify" && (
              <motion.form
                key="verify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleVerify}
                className="space-y-4"
              >
                <input
                  className="auth-input"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button className="btn-blue w-full" disabled={loading}>
                  Verify & Continue
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AppLayout>
  );
}