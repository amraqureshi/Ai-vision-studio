import { motion } from "framer-motion";
import type {
  DetectionSummary,
  DetectionResult,
} from "../../types/imageDetection";

interface DetectionResultsCardProps {
  summary: DetectionSummary;
  results: DetectionResult[];
}

const DetectionResultsCard = ({
  summary,
  results,
}: DetectionResultsCardProps) => {
  return (
    <motion.div
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Detection Summary
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Review the latest object recognition results.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/85 px-4 py-3 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Total objects
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {summary.totalObjects}
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900/85 px-4 py-3 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Average confidence
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {summary.averageConfidence}%
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/85">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/90 text-slate-400">
            <tr>
              <th className="px-4 py-4">Object Name</th>
              <th className="px-4 py-4">Confidence</th>
              <th className="px-4 py-4">Bounding Box</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr
                key={`${result.objectName}-${index}`}
                className={
                  index % 2 === 0 ? "bg-slate-950/80" : "bg-slate-900/80"
                }
              >
                <td className="px-4 py-4 text-white">{result.objectName}</td>
                <td className="px-4 py-4">{result.confidence}%</td>
                <td className="px-4 py-4">{`${result.boundingBox.x}, ${result.boundingBox.y}, ${result.boundingBox.width}x${result.boundingBox.height}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DetectionResultsCard;
