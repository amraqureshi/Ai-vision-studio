import { useMemo, useRef } from "react";
import { CloudUpload, ImagePlus } from "lucide-react";

interface ImageUploadZoneProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onClear: () => void;
}

const acceptedFormats = ["jpg", "jpeg", "png"];

const ImageUploadZone = ({ file, setFile, onClear }: ImageUploadZoneProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const fileName = useMemo(() => {
    return file ? file.name : "No file selected";
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
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
          <CloudUpload size={28} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            Upload your image
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Supported formats: {acceptedFormats.join(", ")}. Drag and drop or
            browse files.
          </p>
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          className="rounded-[1.75rem] border-2 border-dashed border-white/10 bg-slate-900/80 p-8 transition hover:border-cyan-400/40 hover:bg-slate-900/90"
        >
          <p className="text-sm text-slate-300">Drop an image here</p>
          <p className="mt-2 text-sm font-medium text-slate-100">{fileName}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleUploadClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <ImagePlus size={18} /> Browse files
          </button>
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/85 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-rose-400/20 hover:bg-rose-500/10"
          >
            Clear
          </button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFormats.map((ext) => `image/${ext}`).join(",")}
        className="hidden"
        onChange={(event) => {
          const selected = event.target.files?.[0] ?? null;
          setFile(selected);
        }}
      />
    </div>
  );
};

export default ImageUploadZone;
