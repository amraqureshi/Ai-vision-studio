import { Bell, Search, UserCircle2 } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/30 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <input
          type="search"
          placeholder="Search models, detections, or labels"
          className="w-full rounded-3xl border border-white/10 bg-slate-900/85 px-12 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>
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
            <p className="text-sm font-semibold text-white">Skylar Reed</p>
            <p className="text-xs text-slate-500">Vision architect</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
