import type {
  VideoDetectionSummary,
  VideoProcessingStatus,
} from "../../types/videoDetection";

interface VideoProcessingSummaryProps {
  summary: VideoDetectionSummary | null;
  status: VideoProcessingStatus | null;
}

const VideoProcessingSummary = ({
  summary,
  status,
}: VideoProcessingSummaryProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Processing summary
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Track progress and estimated completion time.
          </p>
        </div>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
          {status ? `${status.progress}%` : "Idle"}
        </span>
      </div>
      <div className="mt-6 space-y-4">
        <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
          <p className="text-sm text-slate-400">Progress</p>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-950/80">
            <div
              className="h-full rounded-full bg-cyan-400"
              style={{ width: `${status?.progress ?? 0}%` }}
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">Processed frames</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {summary?.processedFrames ?? "-"}
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">Estimated time</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {status?.estimatedTime ?? "-"}
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
          <p className="text-sm text-slate-400">Total detected objects</p>
          <p className="mt-2 text-xl font-semibold text-white">
            {summary?.totalObjects ?? "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoProcessingSummary;
