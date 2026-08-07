import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

const QuickUpload = () => {
  return (
    <motion.section
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Upload</h3>
          <p className="text-sm text-slate-400">
            Upload a dataset and start detection instantly.
          </p>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-3 text-cyan-300">
          <UploadCloud size={20} />
        </div>
      </div>
      <div className="mt-6 rounded-[1.75rem] border border-dashed border-white/10 bg-slate-900/85 p-6 text-center">
        <p className="text-sm text-slate-400">
          Drag and drop image or video files here, or
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Upload files
        </button>
      </div>
    </motion.section>
  );
};

export default QuickUpload;
