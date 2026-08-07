import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  loading?: boolean;
  icon?: ReactNode;
}

const Button = ({
  variant = "primary",
  loading = false,
  icon,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex w-full items-center justify-center gap-3 rounded-3xl px-5 py-3.5 text-sm font-semibold transition duration-200";
  const variantStyles =
    variant === "ghost"
      ? "bg-slate-900/80 text-slate-100 border border-white/10 hover:bg-slate-800"
      : "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-105";

  return (
    <button
      disabled={loading || disabled}
      className={`${baseStyles} ${variantStyles} ${className} ${loading ? "cursor-wait opacity-90" : ""}`}
      {...props}
    >
      {loading ? (
        <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
      ) : null}
      {icon}
      {children}
    </button>
  );
};

export default Button;
