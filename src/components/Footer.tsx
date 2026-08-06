const Footer = () => {
  return (
    <footer className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12">
      <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] lg:grid-cols-[1.3fr,0.7fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            AI Vision Studio
          </p>
          <h3 className="text-2xl font-semibold text-white">
            Vision-ready AI for modern teams.
          </h3>
          <p className="max-w-xl text-slate-300">
            Build, deploy, and manage object detection models with visibility
            and compliance for every stage of production.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Platform
            </p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Dashboard</li>
              <li>Dataset manager</li>
              <li>Model hub</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Resources
            </p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Docs</li>
              <li>API</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>About</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 AI Vision Studio. Designed for intelligent visual automation.
      </div>
    </footer>
  );
};

export default Footer;
