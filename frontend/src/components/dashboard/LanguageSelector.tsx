import type { LanguageOption } from "../../types/settings";

interface LanguageSelectorProps {
  value: LanguageOption;
  onChange: (value: LanguageOption) => void;
}

const languageOptions: { label: string; value: LanguageOption }[] = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
];

const LanguageSelector = ({ value, onChange }: LanguageSelectorProps) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-4">
      <label className="block text-sm font-medium text-slate-300">
        Language
      </label>
      <select
        className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/85 px-4 py-4 text-slate-100 outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        value={value}
        onChange={(event) => onChange(event.target.value as LanguageOption)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
