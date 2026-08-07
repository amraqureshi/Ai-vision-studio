import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export interface SidebarItem {
  label: string;
  to: string;
  icon: ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  logoText?: string;
  description?: string;
}

const Sidebar = ({
  items,
  logoText = "AI Vision Studio",
  description = "Manage detection workflows and analytics.",
}: SidebarProps) => {
  return (
    <aside className="hidden w-full max-w-[280px] shrink-0 space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/30 xl:block">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {logoText}
        </p>
        <h2 className="text-2xl font-semibold text-white">Command center</h2>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-3xl border border-white/10 px-4 py-3 text-left transition duration-200 ${
                isActive
                  ? "bg-slate-900/90 text-white shadow-xl shadow-cyan-500/10"
                  : "text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
