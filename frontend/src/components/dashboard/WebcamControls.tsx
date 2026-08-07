import Button from "../ui/Button";
import { Play, Square, Camera } from "lucide-react";

interface WebcamControlsProps {
  loading: boolean;
  sessionActive: boolean;
  onStart: () => void;
  onStop: () => void;
  onCapture: () => void;
}

const WebcamControls = ({
  loading,
  sessionActive,
  onStart,
  onStop,
  onCapture,
}: WebcamControlsProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Camera controls
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Manage the mock webcam session
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Button
          className="w-full"
          onClick={onStart}
          disabled={sessionActive || loading}
          loading={loading && !sessionActive}
          icon={<Play size={16} />}
          type="button"
        >
          Start Camera
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          onClick={onStop}
          disabled={!sessionActive || loading}
          icon={<Square size={16} />}
          type="button"
        >
          Stop Camera
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          onClick={onCapture}
          disabled={!sessionActive || loading}
          icon={<Camera size={16} />}
          type="button"
        >
          Capture Snapshot
        </Button>
      </div>
    </div>
  );
};

export default WebcamControls;
