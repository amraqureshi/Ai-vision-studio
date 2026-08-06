import { motion } from "framer-motion";
import Card from "./Card";

const features = [
  {
    title: "Automated labeling pipeline",
    description:
      "Smart annotation tools with active learning, multi-class segmentation, and quality checks built for enterprise workflows.",
  },
  {
    title: "Real-time analytics dashboard",
    description:
      "Monitor precision, recall, and detection drift across cameras, video feeds, and live deployments.",
  },
  {
    title: "Edge-ready deployment",
    description:
      "Optimize models for edge devices and deploy with one click to embedded systems or cloud endpoints.",
  },
];

const Features = () => {
  return (
    <section className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Features
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Built for modern computer vision teams.
        </h2>
        <p className="mx-auto max-w-2xl text-slate-300">
          AI Vision Studio combines advanced model training, scalable labeling,
          and deployment orchestration in a unified AI platform.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <Card
              title={feature.title}
              description={feature.description}
              icon={<span className="text-xl">✨</span>}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
