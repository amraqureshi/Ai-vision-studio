import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, User, ShieldCheck, Key } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import PasswordInput from "../components/ui/PasswordInput";
import CheckboxField from "../components/ui/CheckboxField";
import { getPasswordStrength, isValidEmail } from "../lib/validators";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const strength = useMemo(
    () => getPasswordStrength(form.password),
    [form.password],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!form.fullName.trim())
      validationErrors.fullName = "Full name is required";
    if (!form.username.trim())
      validationErrors.username = "Username is required";
    if (!form.email.trim()) validationErrors.email = "Email is required";
    else if (!isValidEmail(form.email))
      validationErrors.email = "Enter a valid email";
    if (!form.password.trim())
      validationErrors.password = "Password is required";
    if (!form.confirmPassword.trim())
      validationErrors.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword)
      validationErrors.confirmPassword = "Passwords must match";
    if (!form.terms) validationErrors.terms = "You must accept terms";

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
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
          <p className="inline-flex items-center gap-2 rounded-full bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200 ring-1 ring-fuchsia-400/20">
            <ShieldCheck size={16} /> Create an AI Vision Studio account
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Create your account
            </h1>
            <p className="max-w-xl text-slate-300">
              Join AI Vision Studio and begin designing advanced object
              detection experiences with model-driven workflows.
            </p>
          </div>
        </div>

        <div className="rounded-[1.85rem] border border-white/10 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
            Why register?
          </p>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li>• Save projects and model configurations</li>
            <li>• Access centralized dataset management</li>
            <li>• Monitor live inference from any device</li>
          </ul>
        </div>
      </div>

      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, fullName: event.target.value }))
            }
            placeholder="Ava Mitchell"
            icon={<User size={18} />}
            error={errors.fullName}
          />
          <InputField
            label="Username"
            name="username"
            value={form.username}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, username: event.target.value }))
            }
            placeholder="ava_mitchell"
            icon={<ShieldCheck size={18} />}
            error={errors.username}
          />
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
            placeholder="Create a password"
            error={errors.password}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Password strength</span>
              <span className="font-semibold text-slate-100">
                {strength.label}
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-900">
              <div className={`h-full ${strength.color} ${strength.width}`} />
            </div>
          </div>
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                confirmPassword: event.target.value,
              }))
            }
            placeholder="Repeat your password"
            error={errors.confirmPassword}
          />
          <CheckboxField
            label="I agree to the terms and conditions"
            checked={form.terms}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, terms: event.target.checked }))
            }
            className={errors.terms ? "text-rose-300" : ""}
          />
          {errors.terms ? (
            <p className="text-sm text-rose-300">{errors.terms}</p>
          ) : null}
          <Button type="submit" loading={loading}>
            Create account
          </Button>
          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-cyan-300 transition hover:text-cyan-100"
            >
              Login instead
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
