import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const Card = ({ title, description, icon, className = "" }: CardProps) => {
  return (
    <div
      className={`glass-card rounded-[1.75rem] p-6 shadow-xl shadow-slate-950/20 ${className}`}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
    </div>
  );
};

export default Card;
