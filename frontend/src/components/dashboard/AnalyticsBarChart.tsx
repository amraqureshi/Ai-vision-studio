import type { WeeklyActivityPoint } from "../../types/analytics";

interface AnalyticsBarChartProps {
  data: WeeklyActivityPoint[];
}

const AnalyticsBarChart = ({ data }: AnalyticsBarChartProps) => {
  const maxValue = Math.max(...data.map((item) => item.count));

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Weekly activity
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Weekly activity
          </h3>
        </div>
      </div>
      <div className="mt-6 flex items-end gap-4">
        {data.map((item) => (
          <div key={item.day} className="flex-1 text-center">
            <div className="mx-auto mb-3 h-56 w-full max-w-[52px] rounded-3xl bg-slate-900/80">
              <div
                className="h-full rounded-3xl bg-gradient-to-t from-cyan-400 to-slate-400"
                style={{ height: `${(item.count / maxValue) * 100}%` }}
              />
            </div>
            <p className="text-sm text-slate-300">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsBarChart;
