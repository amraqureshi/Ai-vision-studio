import { motion } from "framer-motion";
import {
  Archive,
  BarChart3,
  Boxes,
  Camera,
  Clock3,
  LayoutGrid,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutGrid size={18} /> },
  { label: "Image Detection", icon: <Camera size={18} /> },
  { label: "Video Detection", icon: <Boxes size={18} /> },
  { label: "Webcam Detection", icon: <BarChart3 size={18} /> },
  { label: "Detection History", icon: <Clock3 size={18} /> },
  { label: "Analytics", icon: <Archive size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="hidden w-72 shrink-0 space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/30 xl:block">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          AI Vision Studio
        </p>
        <h2 className="text-2xl font-semibold text-white">Vision HQ</h2>
        <p className="text-sm text-slate-400">
          Manage object detection workflows, analytics, and deployments.
        </p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className={`flex w-full items-center gap-3 rounded-3xl border border-white/10 px-4 py-3 text-left transition duration-200 hover:border-cyan-400/20 hover:bg-slate-900/80 ${
              item.label === "Dashboard"
                ? "bg-slate-900/90 text-white shadow-xl shadow-cyan-500/10"
                : "text-slate-300"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>
      <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-slate-300 shadow-inner shadow-slate-950/20">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Next model retrain</span>
          <span className="text-cyan-300">2h 16m</span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-950/80">
          <div className="h-full w-3/4 rounded-full bg-cyan-400" />
        </div>
      </div>
      <button
        type="button"
        className="mt-4 flex w-full items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-slate-100 transition hover:border-rose-400/20 hover:bg-rose-500/10"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
