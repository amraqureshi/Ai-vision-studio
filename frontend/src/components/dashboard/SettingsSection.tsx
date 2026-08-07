import type { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SettingsSection = ({
  title,
  description,
  children,
}: SettingsSectionProps) => {
  return (
    <section className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {title}
        </p>
        <p className="mt-2 text-xl font-semibold text-white">{description}</p>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
};

export default SettingsSection;
