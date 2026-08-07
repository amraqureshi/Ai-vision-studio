import { motion } from "framer-motion";

const heroCTA = [
  { label: "Start Free Trial", href: "#pricing" },
  { label: "Book a Demo", href: "#demo" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-12 lg:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_20%)] opacity-60" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div className="space-y-6 text-slate-100">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-sm shadow-cyan-400/10">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            AI Vision Studio is live: deploy the future of object detection.
          </div>
          <div className="space-y-5">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build enterprise-grade object detection pipelines with a single
              studio.
            </motion.h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              Train, validate, and deploy computer vision models with instant
              labeling, analytics, and edge-ready inference in one premium AI
              SaaS experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {heroCTA.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/5 px-4 py-5 text-sm text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                Avg. Detection Latency
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">14ms</p>
            </div>
            <div className="rounded-3xl bg-white/5 px-4 py-5 text-sm text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300">
                Supported Inputs
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Images + Video + RTSP
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 px-4 py-5 text-sm text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.22em] text-sky-300">
                Availability
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                99.95% SLA
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6">
            <div className="mb-6 flex items-center justify-between text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Demo environment
              </span>
              <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                Live
              </span>
            </div>
            <div className="space-y-4 rounded-[1.5rem] bg-slate-900/90 p-5">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-200">Bounding box confidence</p>
                  <p className="text-3xl font-semibold text-white">98.7%</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-xs uppercase tracking-[0.22em] text-cyan-300">
                  Model
                </div>
              </div>
              <div className="space-y-3 rounded-3xl bg-slate-950/90 p-4">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Pedestrian</span>
                  <span>89%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-9/12 rounded-full bg-cyan-400" />
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Vehicle</span>
                  <span>94%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-11/12 rounded-full bg-fuchsia-400" />
                </div>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/5 bg-slate-950/95 p-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {["Warehouse", "Traffic", "Robotics"].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl bg-slate-900/80 px-4 py-3 text-center text-xs uppercase tracking-[0.22em] text-slate-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
