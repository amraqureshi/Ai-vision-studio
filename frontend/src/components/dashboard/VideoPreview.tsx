interface VideoPreviewProps {
  file: File | null;
}

const VideoPreview = ({ file }: VideoPreviewProps) => {
  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <h2 className="text-lg font-semibold text-white">Video preview</h2>
      {previewUrl ? (
        <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/90">
          <video
            src={previewUrl}
            controls
            className="h-72 w-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-5 rounded-[1.75rem] border border-dashed border-white/10 bg-slate-900/85 p-10 text-center text-slate-400">
          Choose a video to preview before processing.
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
