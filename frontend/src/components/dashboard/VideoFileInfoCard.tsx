import type { VideoFileInfo } from "../../types/videoDetection";

interface VideoFileInfoCardProps {
  fileInfo: VideoFileInfo | null;
}

const VideoFileInfoCard = ({ fileInfo }: VideoFileInfoCardProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <h2 className="text-lg font-semibold text-white">File information</h2>
      {fileInfo ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">File name</p>
            <p className="mt-2 text-white">{fileInfo.name}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">Size</p>
            <p className="mt-2 text-white">{fileInfo.sizeMB.toFixed(1)} MB</p>
          </div>
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="mt-2 text-white">{fileInfo.duration}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
            <p className="text-sm text-slate-400">Resolution</p>
            <p className="mt-2 text-white">{fileInfo.resolution}</p>
          </div>
        </div>
      ) : (
        <div className="mt-5 rounded-[1.75rem] border border-dashed border-white/10 bg-slate-900/85 p-6 text-center text-slate-400">
          Upload a video to inspect file metadata.
        </div>
      )}
    </div>
  );
};

export default VideoFileInfoCard;
