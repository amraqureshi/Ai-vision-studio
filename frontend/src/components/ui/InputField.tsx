import type { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
  action?: ReactNode;
}

const InputField = ({
  label,
  icon,
  error,
  action,
  className = "",
  ...props
}: InputFieldProps) => {
  return (
    <label className="block">
      <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-300">
        <span>{label}</span>
        {error ? <span className="text-rose-300">{error}</span> : null}
      </div>
      <div className="relative">
        {icon ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            {icon}
          </div>
        ) : null}
        <input
          className={`w-full rounded-3xl border border-white/10 bg-slate-950/85 px-4 py-4 text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ${
            icon ? "pl-12" : ""
          } ${action ? "pr-14" : ""} ${className}`}
          {...props}
        />
        {action ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            {action}
          </div>
        ) : null}
      </div>
    </label>
  );
};

export default InputField;
