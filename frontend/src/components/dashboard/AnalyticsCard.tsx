import type { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  detail: string;
  icon: ReactNode;
}

const AnalyticsCard = ({ title, value, detail, icon }: AnalyticsCardProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            {title}
          </p>
          <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="rounded-3xl bg-cyan-400/10 p-3 text-cyan-300">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
};

export default AnalyticsCard;
