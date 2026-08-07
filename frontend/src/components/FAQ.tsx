import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I connect live camera streams for real-time detection?",
    answer:
      "Yes. AI Vision Studio supports RTSP feeds, IP cameras, and video pipelines so you can monitor live object detection with instant alerts.",
  },
  {
    question: "How do you handle model drift and dataset updates?",
    answer:
      "Our platform includes drift monitoring, dataset versioning, and retraining workflows that make it easy to refresh models automatically based on new data.",
  },
  {
    question: "Is there support for edge deployment?",
    answer:
      "Absolutely. Export optimized models for edge devices or deploy through our hosted edge service with one-click provisioning.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300">FAQ</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Answers for modern vision teams.
        </h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={faq.question}
              className="glass-card overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left text-white"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-2xl text-cyan-300">
                  {isActive ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 overflow-hidden text-slate-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
