import type { WebcamStatus } from "../../types/webcamDetection";

interface DetectionMetricsPanelProps {
  status: WebcamStatus;
}

const DetectionMetricsPanel = ({ status }: DetectionMetricsPanelProps) => {
  const metrics = [
    {
      title: "Detection status",
      value: status.phase.replace("-", " "),
      description: "Current mock detection state.",
    },
    {
      title: "FPS",
      value: status.fps.toFixed(0),
      description: "Frames per second from the simulated feed.",
    },
    {
      title: "Confidence",
      value: `${status.averageConfidence.toFixed(1)}%`,
      description: "Average confidence score for detected objects.",
    },
    {
      title: "Connection",
      value: status.connection,
      description: "Webcam session connection state.",
    },
  ];

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Live metrics
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Detection insights
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-3xl bg-slate-900/85 p-5 text-slate-300"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              {metric.title}
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectionMetricsPanel;
