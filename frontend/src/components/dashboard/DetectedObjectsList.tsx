import type { DetectedObject } from "../../types/webcamDetection";

interface DetectedObjectsListProps {
  objects: DetectedObject[];
}

const DetectedObjectsList = ({ objects }: DetectedObjectsListProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Detected objects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Recognized entities
          </h2>
        </div>
      </div>

      <div className="mt-6 divide-y divide-white/10">
        {objects.map((object) => (
          <div
            key={object.label}
            className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-white">{object.label}</p>
              <p className="text-sm text-slate-400">
                {object.instances} instance{object.instances > 1 ? "s" : ""}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/85 px-4 py-3 text-right text-slate-300">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Confidence
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {object.confidence.toFixed(1)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectedObjectsList;
