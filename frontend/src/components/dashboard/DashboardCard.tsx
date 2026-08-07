import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

const DashboardCard = ({ title, value, change, icon }: DashboardCardProps) => {
  return (
    <motion.div
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
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
      <p className="mt-4 text-sm text-slate-400">{change}</p>
    </motion.div>
  );
};

export default DashboardCard;
