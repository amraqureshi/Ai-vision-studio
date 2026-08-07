import type { MonthlyDetectionPoint } from "../../types/analytics";

interface AnalyticsLineChartProps {
  data: MonthlyDetectionPoint[];
}

const AnalyticsLineChart = ({ data }: AnalyticsLineChartProps) => {
  const maxValue = Math.max(...data.map((point) => point.count));
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Monthly detection
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Monthly detection chart
          </h3>
        </div>
      </div>
      <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-slate-900/90 p-5">
        <div className="relative h-72 w-full">
          <svg viewBox="0 0 700 300" className="h-full w-full">
            <polyline
              fill="none"
              stroke="#22d3ee"
              strokeWidth="4"
              points={data
                .map((point, index) => {
                  const x = 80 + (index * 520) / (data.length - 1);
                  const y = 260 - (point.count / maxValue) * 200;
                  return `${x},${y}`;
                })
                .join(" ")}
            />
            {data.map((point, index) => {
              const x = 80 + (index * 520) / (data.length - 1);
              const y = 260 - (point.count / maxValue) * 200;
              return (
                <g key={point.month}>
                  <circle cx={x} cy={y} r="6" fill="#22d3ee" />
                  <text
                    x={x}
                    y={y - 14}
                    textAnchor="middle"
                    className="text-[12px] fill-slate-200"
                  >
                    {point.count}
                  </text>
                </g>
              );
            })}
            {data.map((point, index) => {
              const x = 80 + (index * 520) / (data.length - 1);
              return (
                <text
                  key={`${point.month}-label`}
                  x={x}
                  y={286}
                  textAnchor="middle"
                  className="text-[12px] fill-slate-400"
                >
                  {point.month}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
