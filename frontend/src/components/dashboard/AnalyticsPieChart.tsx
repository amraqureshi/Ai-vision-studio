import type { DetectedObjectShare } from "../../types/analytics";

interface AnalyticsPieChartProps {
  objects: DetectedObjectShare[];
}

const colors = ["#22d3ee", "#f472b6", "#a78bfa", "#34d399", "#fb923c"];

const AnalyticsPieChart = ({ objects }: AnalyticsPieChartProps) => {
  const totalShare = objects.reduce((sum, item) => sum + item.share, 0);
  let startAngle = 0;

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Most detected
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Object share
          </h3>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        <div className="h-56 w-56">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            {objects.map((item, index) => {
              const slice = (item.share / totalShare) * 360;
              const endAngle = startAngle + slice;
              const largeArc = slice > 180 ? 1 : 0;
              const x1 = 100 + 80 * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 100 + 80 * Math.sin((Math.PI * startAngle) / 180);
              const x2 = 100 + 80 * Math.cos((Math.PI * endAngle) / 180);
              const y2 = 100 + 80 * Math.sin((Math.PI * endAngle) / 180);
              const path = `M100,100 L${x1},${y1} A80,80 0 ${largeArc},1 ${x2},${y2} Z`;
              startAngle = endAngle;
              return <path key={item.label} d={path} fill={colors[index]} />;
            })}
          </svg>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {objects.map((item, index) => (
            <div
              key={item.label}
              className="rounded-3xl bg-slate-900/85 p-4 text-slate-300"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">
                {item.share}%
              </p>
              <p className="text-sm text-slate-500">{item.count} detections</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPieChart;
