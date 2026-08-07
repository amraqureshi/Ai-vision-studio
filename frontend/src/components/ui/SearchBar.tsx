import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search...",
  ...props
}: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
      <input
        type="search"
        placeholder={placeholder}
        onChange={(event) => onSearch?.(event.target.value)}
        className="w-full rounded-3xl border border-white/10 bg-slate-900/85 px-12 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
