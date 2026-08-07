import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import InputField from "./InputField";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PasswordInput = ({
  label,
  error,
  className = "",
  ...props
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <InputField
      label={label}
      icon={<Lock size={18} />}
      error={error}
      type={visible ? "text" : "password"}
      action={
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="text-slate-300 transition hover:text-white"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
      className={className}
      {...props}
    />
  );
};

export default PasswordInput;
