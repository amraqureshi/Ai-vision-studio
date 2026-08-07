import { useRef } from "react";
import type { ReactNode } from "react";

interface FileUploadProps {
  label: string;
  acceptedTypes?: string;
  buttonText?: string;
  fileName?: string;
  icon?: ReactNode;
  onFileSelect: (file: File | null) => void;
}

const FileUpload = ({
  label,
  acceptedTypes = "*/*",
  buttonText = "Choose file",
  fileName,
  icon,
  onFileSelect,
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            {label}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {fileName ?? "No file selected yet."}
          </p>
        </div>
        {icon ? <div className="text-cyan-300">{icon}</div> : null}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleBrowseClick}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          {buttonText}
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes}
        className="hidden"
        onChange={(event) => onFileSelect(event.target.files?.[0] ?? null)}
      />
    </div>
  );
};

export default FileUpload;
