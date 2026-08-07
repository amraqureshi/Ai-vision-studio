import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Play, DownloadCloud, Image } from "lucide-react";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import ImageUploadZone from "../components/dashboard/ImageUploadZone";
import ImagePreview from "../components/dashboard/ImagePreview";
import DetectionResultsCard from "../components/dashboard/DetectionResultsCard";
import { fetchDetectionResults } from "../services/imageDetectionService";
import type {
  DetectionResult,
  DetectionSummary,
} from "../types/imageDetection";

const ImageDetectionPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<DetectionSummary | null>(null);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [error, setError] = useState<string>("");

  const isValidImage = useMemo(() => !!file, [file]);

  const handleDetect = async () => {
    if (!file) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetchDetectionResults(file);
      setSummary(response.summary);
      setResults(response.results);
    } catch (err) {
      setError("Unable to fetch detection results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setSummary(null);
    setResults([]);
    setError("");
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
          title="Image Detection"
          subtitle="Process images with AI-powered detection."
          description="Upload an image to extract objects, confidence scores, and bounding box coordinates. The upload and detection workflow is ready for backend integration."
          actions={
            <>
              <Button
                type="button"
                onClick={handleDetect}
                disabled={!isValidImage || loading}
                loading={loading}
                icon={<Play size={16} />}
                className="rounded-full px-6 py-3 text-sm"
              >
                Detect objects
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={handleClear}
                className="rounded-full px-6 py-3 text-sm bg-slate-900/85 text-slate-100 hover:bg-rose-500/10 hover:border-rose-400/20"
                icon={<AlertTriangle size={16} />}
              >
                Clear
              </Button>
            </>
          }
          className="border-b border-white/10 pb-5"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.95fr]">
          <div className="space-y-6">
            <ImageUploadZone
              file={file}
              setFile={setFile}
              onClear={handleClear}
            />
            <ImagePreview file={file} />
          </div>
          <div className="space-y-6">
            {error ? (
              <div className="rounded-[1.75rem] border border-rose-400/20 bg-rose-400/10 p-5 text-sm text-rose-100">
                {error}
              </div>
            ) : null}
            {summary && results.length > 0 ? (
              <DetectionResultsCard summary={summary} results={results} />
            ) : (
              <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
                <div className="flex items-center gap-4 text-slate-300">
                  <Image size={24} />
                  <div>
                    <p className="font-semibold text-white">
                      Detection results placeholder
                    </p>
                    <p className="mt-1 text-sm">
                      Run detection to view the object table, summary, and
                      export options.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    Download result
                  </p>
                  <p className="mt-2 text-white">
                    Export the latest detection report as a JSON file for
                    review.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={!summary || results.length === 0}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <DownloadCloud size={18} />
                  Download result
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageDetectionPage;
