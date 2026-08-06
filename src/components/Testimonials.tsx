import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "AI Vision Studio reduced our deployment cycle by 60% and gave our robotics team a single dashboard for all live feeds.",
    name: "Mina Patel",
    role: "Head of Computer Vision, Nexa Robotics",
  },
  {
    quote:
      "The automated labeling and drift monitoring have transformed our warehouse safety system into a reliable production service.",
    name: "Caleb Ortiz",
    role: "AI Product Lead, Sentinel Labs",
  },
];

const Testimonials = () => {
  return (
    <section className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">
          Testimonials
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Loved by teams building mission-critical vision systems.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="glass-card rounded-[1.75rem] p-8 shadow-xl shadow-slate-950/20"
          >
            <p className="text-slate-200">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-5 text-slate-300">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
