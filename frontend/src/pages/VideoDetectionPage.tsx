import { useState } from "react";
import { motion } from "framer-motion";
import { Play, DownloadCloud, Film, Clock3 } from "lucide-react";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import VideoUploadZone from "../components/dashboard/VideoUploadZone";
import VideoPreview from "../components/dashboard/VideoPreview";
import VideoFileInfoCard from "../components/dashboard/VideoFileInfoCard";
import VideoProcessingSummary from "../components/dashboard/VideoProcessingSummary";
import {
  fetchVideoFileInfo,
  processVideoDetection,
} from "../services/videoDetectionService";
import type {
  VideoDetectionSummary,
  VideoProcessingStatus,
} from "../types/videoDetection";

const VideoDetectionPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState<null | {
    name: string;
    sizeMB: number;
    duration: string;
    resolution: string;
  }>(null);
  const [status, setStatus] = useState<VideoProcessingStatus | null>(null);
  const [summary, setSummary] = useState<VideoDetectionSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [error, setError] = useState("");

  const canProcess = Boolean(file) && !loading;

  const handleFileChange = async (selectedFile: File | null) => {
    setFile(selectedFile);
    setSummary(null);
    setStatus(null);
    setDownloadReady(false);
    setError("");

    if (selectedFile) {
      try {
        const info = await fetchVideoFileInfo(selectedFile);
        setFileInfo(info);
      } catch {
        setError("Unable to read video metadata.");
      }
    } else {
      setFileInfo(null);
    }
  };

  const handleProcess = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setDownloadReady(false);

    const onProgress = (progressStatus: VideoProcessingStatus) => {
      setStatus(progressStatus);
    };

    try {
      const result = await processVideoDetection(file, onProgress);
      setSummary(result);
      setDownloadReady(true);
    } catch {
      setError("Video processing failed. Please try another file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1200px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="Video Detection"
          subtitle="Upload a video and inspect detections"
          description="Upload a supported video file, preview the media, and track processing status with confidence."
          actions={
            <>
              <Button
                type="button"
                onClick={handleProcess}
                disabled={!canProcess}
                loading={loading}
                icon={<Play size={16} />}
                className="rounded-full px-6 py-3 text-sm"
              >
                Process video
              </Button>
              <Button
                type="button"
                variant="ghost"
                disabled={!downloadReady}
                icon={<DownloadCloud size={16} />}
                className="rounded-full px-6 py-3 text-sm bg-slate-900/85 text-slate-100"
              >
                Download processed video
              </Button>
            </>
          }
          className="border-b border-white/10 pb-5"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.85fr]">
          <div className="space-y-6">
            <VideoUploadZone file={file} setFile={handleFileChange} />
            <VideoPreview file={file} />
          </div>
          <div className="space-y-6">
            <VideoFileInfoCard fileInfo={fileInfo} />
            <VideoProcessingSummary summary={summary} status={status} />
            {error ? (
              <div className="rounded-[1.75rem] border border-rose-400/20 bg-rose-400/10 p-5 text-sm text-rose-100">
                {error}
              </div>
            ) : null}
            <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-3 text-slate-300">
                <Film size={20} />
                <div>
                  <p className="font-semibold text-white">
                    Processing animation
                  </p>
                  <p className="text-sm text-slate-400">
                    The processing indicator represents mock progress status for
                    demonstration.
                  </p>
                </div>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-900/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                  style={{ width: `${status?.progress ?? 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoDetectionPage;
