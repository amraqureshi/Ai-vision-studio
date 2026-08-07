import type { InputHTMLAttributes } from "react";

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckboxField = ({
  label,
  className = "",
  ...props
}: CheckboxFieldProps) => {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 text-sm text-slate-300 ${className}`}
    >
      <input
        type="checkbox"
        className="h-5 w-5 rounded-xl border border-white/10 bg-slate-950/90 text-cyan-400 transition duration-200 focus:ring-2 focus:ring-cyan-400/20"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckboxField;
