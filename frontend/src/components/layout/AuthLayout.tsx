import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_25%)] opacity-80 blur-3xl" />
        <div className="relative mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
