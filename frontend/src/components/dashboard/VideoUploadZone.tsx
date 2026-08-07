import { useMemo, useRef } from "react";
import { Film, UploadCloud } from "lucide-react";

interface VideoUploadZoneProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

const acceptedFormats = ["mp4", "mov", "webm"];

const VideoUploadZone = ({ file, setFile }: VideoUploadZoneProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const fileLabel = useMemo(() => {
    return file ? file.name : "Drop a video or browse to upload";
  }, [file]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center gap-3 text-slate-300">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
          <Film size={28} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Video upload</h2>
          <p className="text-sm text-slate-400">
            Supported formats: {acceptedFormats.join(", ")}. Drag, drop, or
            browse to upload.
          </p>
        </div>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        className="mt-6 rounded-[1.75rem] border-2 border-dashed border-white/10 bg-slate-900/85 p-8 text-center transition hover:border-cyan-400/40 hover:bg-slate-900/90"
      >
        <p className="text-sm text-slate-300">{fileLabel}</p>
        <button
          type="button"
          onClick={handleUploadClick}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          <UploadCloud size={18} /> Browse files
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFormats.map((ext) => `video/${ext}`).join(",")}
        className="hidden"
        onChange={(event) => setFile(event.target.files?.[0] ?? null)}
      />
    </div>
  );
};

export default VideoUploadZone;
