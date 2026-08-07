import type { ReactNode } from "react";

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  open: boolean;
}

const Modal = ({ title, children, onClose, open }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            type="button"
            className="rounded-full border border-white/10 bg-slate-900/85 px-3 py-2 text-slate-200 hover:bg-slate-900"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
