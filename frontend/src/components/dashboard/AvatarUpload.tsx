import { useRef } from "react";
import { Camera } from "lucide-react";
import type { UserSettings } from "../../types/settings";

interface AvatarUploadProps {
  settings: UserSettings;
  onAvatarChange: (url: string) => void;
}

const AvatarUpload = ({ settings, onAvatarChange }: AvatarUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center gap-4">
        <img
          src={settings.avatarUrl}
          alt="Profile avatar"
          className="h-20 w-20 rounded-[1.5rem] object-cover border border-white/10"
        />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Profile avatar
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Upload a new avatar
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Supported formats: JPG, PNG. Max 5MB.
          </p>
          <button
            type="button"
            onClick={handleBrowse}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <Camera size={16} />
            Browse image
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                onAvatarChange(URL.createObjectURL(file));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
