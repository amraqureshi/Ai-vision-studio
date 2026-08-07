import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-xl shadow-slate-950/20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
        {title}
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-white">{description}</h2>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
};

export default EmptyState;
