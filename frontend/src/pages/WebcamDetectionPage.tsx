import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import WebcamPreviewPlaceholder from "../components/dashboard/WebcamPreviewPlaceholder";
import WebcamControls from "../components/dashboard/WebcamControls";
import DetectionMetricsPanel from "../components/dashboard/DetectionMetricsPanel";
import DetectedObjectsList from "../components/dashboard/DetectedObjectsList";
import {
  captureWebcamSnapshot,
  initializeWebcamSession,
  refreshWebcamMetrics,
  terminateWebcamSession,
} from "../services/webcamDetectionService";
import type {
  WebcamSnapshot,
  WebcamStatus,
  WebcamConnectionState,
  WebcamDetectionPhase,
} from "../types/webcamDetection";

const snapshotPlaceholder: WebcamSnapshot = {
  capturedAt: "",
  detectedObjects: 0,
  averageConfidence: 0,
  previewLabel: "No snapshot captured yet",
  objects: [],
};

const initialStatus: WebcamStatus = {
  connection: "disconnected",
  phase: "idle",
  fps: 0,
  averageConfidence: 0,
};

const WebcamDetectionPage = () => {
  const [status, setStatus] = useState<WebcamStatus>(initialStatus);
  const [snapshot, setSnapshot] = useState<WebcamSnapshot>(snapshotPlaceholder);
  const [loading, setLoading] = useState(false);
  const [connectionState, setConnectionState] =
    useState<WebcamConnectionState>("disconnected");
  const [phase, setPhase] = useState<WebcamDetectionPhase>("idle");

  const updateMetrics = useCallback(async () => {
    const metrics = await refreshWebcamMetrics();
    setStatus(metrics);
    setConnectionState(metrics.connection);
    setPhase(metrics.phase);
  }, []);

  useEffect(() => {
    if (status.connection === "connected" && status.phase === "scanning") {
      const interval = window.setInterval(() => {
        void updateMetrics();
      }, 3000);
      return () => window.clearInterval(interval);
    }

    return undefined;
  }, [status.connection, status.phase, updateMetrics]);

  const handleStartCamera = async () => {
    setLoading(true);
    const session = await initializeWebcamSession();
    setStatus(session);
    setConnectionState(session.connection);
    setPhase(session.phase);
    setLoading(false);
  };

  const handleStopCamera = async () => {
    setLoading(true);
    const inactiveSession = await terminateWebcamSession();
    setStatus(inactiveSession);
    setConnectionState(inactiveSession.connection);
    setPhase(inactiveSession.phase);
    setLoading(false);
  };

  const handleCaptureSnapshot = async () => {
    setLoading(true);
    const captured = await captureWebcamSnapshot();
    setSnapshot(captured);
    setStatus((current) => ({
      ...current,
      phase: "captured",
      lastCapturedAt: captured.capturedAt,
    }));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1300px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <PageHeader
          title="Webcam Detection"
          subtitle="Monitor and capture camera detections."
          description="Use a production-ready mock webcam page with camera controls, detection metrics, snapshot capture, and object recognition insights."
          actions={
            <div className="flex items-center gap-3 text-slate-300">
              <CircleDot size={20} className="text-cyan-400" />
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Mock session only
              </span>
            </div>
          }
          className="border-b border-white/10 pb-5"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-6">
            <WebcamPreviewPlaceholder
              connectionStatus={connectionState}
              phase={phase}
              lastCapturedAt={status.lastCapturedAt}
            />
            <WebcamControls
              loading={loading}
              sessionActive={connectionState === "connected"}
              onStart={handleStartCamera}
              onStop={handleStopCamera}
              onCapture={handleCaptureSnapshot}
            />
          </div>
          <div className="space-y-6">
            <DetectionMetricsPanel status={status} />
            <DetectedObjectsList objects={snapshot.objects} />
            <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Snapshot summary
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Capture details
                  </h2>
                </div>
                <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                  {snapshot.capturedAt ? "Ready" : "Waiting"}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
                  <p className="text-sm text-slate-400">Objects detected</p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {snapshot.detectedObjects}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-900/85 p-4 text-slate-300">
                  <p className="text-sm text-slate-400">Average confidence</p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {snapshot.averageConfidence.toFixed(1)}%
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Capture details are generated from mock JSON data and designed
                to support future backend integration.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebcamDetectionPage;
