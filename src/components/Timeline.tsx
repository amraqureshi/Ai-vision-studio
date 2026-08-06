import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload data",
    description:
      "Import images, video feeds, and annotations from any source with a secure centralized dataset manager.",
  },
  {
    title: "Train models",
    description:
      "Choose architecture, auto-tune hyperparameters, and validate with real-time metrics before deployment.",
  },
  {
    title: "Deploy with confidence",
    description:
      "Push models to the cloud, edge devices, or hybrid endpoints and monitor health continuously.",
  },
];

const Timeline = () => {
  return (
    <section className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Deploy an end-to-end vision pipeline in minutes.
        </h2>
      </div>
      <div className="relative mx-auto grid max-w-4xl gap-8 sm:gap-10">
        <div className="absolute left-1/2 top-8 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 to-transparent" />
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`relative flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center ${
              index % 2 === 0 ? "sm:pl-12" : "sm:pr-12 sm:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.14 }}
          >
            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-slate-950 p-3 text-cyan-300 shadow-xl shadow-cyan-500/10 sm:static sm:translate-x-0">
              <span className="text-sm font-semibold">{index + 1}</span>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
