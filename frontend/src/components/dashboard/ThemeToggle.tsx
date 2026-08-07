import type { ThemeOption } from "../../types/settings";

interface ThemeToggleProps {
  value: ThemeOption;
  onChange: (value: ThemeOption) => void;
}

const ThemeToggle = ({ value, onChange }: ThemeToggleProps) => {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/85 p-4">
      <div>
        <p className="text-sm font-semibold text-white">Theme</p>
        <p className="text-sm text-slate-400">Choose your UI mode.</p>
      </div>
      <div className="ml-auto flex gap-3">
        {(["dark", "light"] as ThemeOption[]).map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              value === option
                ? "bg-cyan-400 text-slate-950"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-900"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
