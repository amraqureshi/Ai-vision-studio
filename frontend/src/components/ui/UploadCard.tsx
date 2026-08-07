import type { ReactNode } from "react";

interface UploadCardProps {
  title: string;
  description: string;
  fileName?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const UploadCard = ({
  title,
  description,
  fileName,
  icon,
  action,
}: UploadCardProps) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            {title}
          </p>
          <p className="mt-4 text-lg font-semibold text-white">{description}</p>
        </div>
        {icon ? (
          <div className="rounded-3xl bg-slate-900/85 p-3 text-cyan-300">
            {icon}
          </div>
        ) : null}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 rounded-3xl bg-slate-900/80 px-4 py-4 text-sm text-slate-300">
        <span>{fileName ?? "No file selected"}</span>
        {action}
      </div>
    </div>
  );
};

export default UploadCard;
