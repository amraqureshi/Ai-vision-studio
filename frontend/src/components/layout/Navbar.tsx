import { Bell, UserCircle2 } from "lucide-react";
import SearchBar from "../ui/SearchBar";

interface NavbarProps {
  username: string;
  onSearch?: (value: string) => void;
}

const Navbar = ({ username, onSearch }: NavbarProps) => {
  return (
    <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/30">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar
          onSearch={onSearch}
          placeholder="Search detections, models, or assets"
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-slate-100 transition hover:border-cyan-400/20"
          >
            <Bell size={18} />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-slate-100 transition hover:border-cyan-400/20"
          >
            <UserCircle2 size={24} />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-white">{username}</p>
              <p className="text-xs text-slate-500">Account</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
