import { motion } from "framer-motion";
import { Camera, Signal } from "lucide-react";
import type {
  WebcamConnectionState,
  WebcamDetectionPhase,
} from "../../types/webcamDetection";

interface WebcamPreviewPlaceholderProps {
  connectionStatus: WebcamConnectionState;
  phase: WebcamDetectionPhase;
  lastCapturedAt?: string;
}

const statusTextMap: Record<WebcamDetectionPhase, string> = {
  idle: "Camera offline",
  "warming-up": "Warming up the stream",
  scanning: "Live detection active",
  captured: "Snapshot ready",
};

const WebcamPreviewPlaceholder = ({
  connectionStatus,
  phase,
  lastCapturedAt,
}: WebcamPreviewPlaceholderProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Webcam preview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Live camera frame
          </h2>
        </div>
        <Signal
          className={
            connectionStatus === "connected"
              ? "text-cyan-400"
              : "text-slate-500"
          }
          size={22}
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-12 text-center text-slate-400">
        <motion.div
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300"
        >
          <Camera size={34} />
        </motion.div>
        <p className="text-lg font-semibold text-white">
          {statusTextMap[phase]}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          This preview is a mock representation for architecture, data flow, and
          UI design.
        </p>
        {lastCapturedAt ? (
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
            Last snapshot: {new Date(lastCapturedAt).toLocaleTimeString()}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default WebcamPreviewPlaceholder;
