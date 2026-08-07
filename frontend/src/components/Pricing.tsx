import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$89",
    description:
      "Best for early proof-of-concept teams with one project and live monitoring.",
    highlights: ["1000 images / month", "1 active model", "Email support"],
    accent: "bg-slate-900/80",
  },
  {
    name: "Growth",
    price: "$249",
    description:
      "Designed for scaling teams with collaboration, labeling automation, and edge exports.",
    highlights: ["10k images / month", "5 active models", "Priority support"],
    accent:
      "bg-gradient-to-b from-cyan-500/80 via-slate-900/70 to-slate-950/80",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Enterprise-grade architecture, SLA-backed service, and custom deployment workflows.",
    highlights: [
      "Unlimited projects",
      "Dedicated onboarding",
      "SLA & compliance",
    ],
    accent: "bg-slate-900/80",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12"
    >
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">
          Pricing
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Flexible plans for every vision workflow.
        </h2>
        <p className="mx-auto max-w-2xl text-slate-300">
          Choose a plan that fits your team and scale seamlessly from research
          to production deployments.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <div
              className={`glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-950/20 ${plan.featured ? "scale-[1.02] border-cyan-400/25" : ""}`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-sky-300 opacity-90 ${plan.featured ? "" : "opacity-50"}`}
              />
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {plan.name}
                  </p>
                  <p className="mt-4 text-4xl font-semibold text-white">
                    {plan.price}
                  </p>
                </div>
                <p className="text-slate-300">{plan.description}</p>
                <ul className="space-y-3 text-slate-300">
                  {plan.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "bg-slate-900/80 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.featured ? "Choose Growth" : "Select"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
