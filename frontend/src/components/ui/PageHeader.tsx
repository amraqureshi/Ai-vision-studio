import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  subtitle,
  description,
  actions,
  className = "",
}: PageHeaderProps) => {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 ${className}`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {title}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">{subtitle}</h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  );
};

export default PageHeader;
