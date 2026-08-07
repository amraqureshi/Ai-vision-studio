import type { ReactNode } from "react";

export interface ToastNotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  visible: boolean;
  onClose: () => void;
  action?: ReactNode;
}

const toastStyles = {
  success: "bg-emerald-500/10 border-emerald-400/20 text-emerald-300",
  error: "bg-rose-500/10 border-rose-400/20 text-rose-300",
  info: "bg-cyan-500/10 border-cyan-400/20 text-cyan-300",
};

const ToastNotification = ({
  message,
  type = "info",
  visible,
  onClose,
  action,
}: ToastNotificationProps) => {
  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-[1.75rem] border px-5 py-4 shadow-2xl shadow-slate-950/30 ${toastStyles[type]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">{message}</p>
          {action ? <div className="mt-3">{action}</div> : null}
        </div>
        <button
          type="button"
          className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-xs text-slate-200"
          onClick={onClose}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;
