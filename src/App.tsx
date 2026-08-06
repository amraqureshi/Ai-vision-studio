import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import DemoPreview from "./components/DemoPreview";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-gradient opacity-90 blur-3xl" />
        <div className="container mx-auto px-6 py-8 sm:px-8 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              className="space-y-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Hero />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <Features />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <Timeline />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <DemoPreview />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <Pricing />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              >
                <FAQ />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              >
                <Testimonials />
              </motion.section>
              <motion.section
                variants={sectionFade}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              >
                <Footer />
              </motion.section>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
