import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ShieldCheck, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import PasswordInput from "../components/ui/PasswordInput";
import CheckboxField from "../components/ui/CheckboxField";
import { isValidEmail } from "../lib/validators";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isFormValid = useMemo(() => {
    return (
      form.email.trim() !== "" &&
      form.password.trim() !== "" &&
      isValidEmail(form.email)
    );
  }, [form]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: typeof errors = {};

    if (!form.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      validationErrors.email = "Enter a valid email";
    }
    if (!form.password.trim()) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setLoading(false);
    setSubmitError("Invalid email or password (demo only).");
  };

  return (
    <motion.div
      className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-10 md:flex md:gap-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid gap-8 md:w-1/2">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-400/20">
            <ShieldCheck size={16} /> Secure AI platform access
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Welcome back to AI Vision Studio
            </h1>
            <p className="max-w-xl text-slate-300">
              Access your vision workflows, inspect models, and manage every
              deployment from one secure entrypoint.
            </p>
          </div>
        </div>

        <div className="rounded-[1.85rem] border border-white/10 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
            Welcome back
          </p>
          <p className="mt-3 text-lg font-semibold text-white">
            Sign in to continue
          </p>
          <div className="mt-6 grid gap-4">
            <Button
              variant="ghost"
              icon={<LogIn size={18} />}
              className="text-slate-100"
            >
              Continue with Google
            </Button>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="h-px flex-1 bg-white/10" />
              <span>or use your email</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            type="email"
            placeholder="hello@visionstudio.ai"
            icon={<Mail size={18} />}
            error={errors.email}
          />
          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, password: event.target.value }))
            }
            placeholder="Enter your password"
            error={errors.password}
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CheckboxField
              label="Remember me"
              checked={form.remember}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, remember: event.target.checked }))
              }
            />
            <a
              href="#"
              className="text-sm text-cyan-300 transition hover:text-cyan-100"
            >
              Forgot password?
            </a>
          </div>
          <div className="space-y-4">
            {submitError ? (
              <div className="rounded-3xl border border-rose-400/20 bg-rose-400/5 p-4 text-sm text-rose-200">
                {submitError}
              </div>
            ) : null}
            <Button type="submit" loading={loading} disabled={!isFormValid}>
              Login to AI Vision Studio
            </Button>
          </div>
          <p className="text-center text-sm text-slate-400">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-cyan-300 transition hover:text-cyan-100"
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
