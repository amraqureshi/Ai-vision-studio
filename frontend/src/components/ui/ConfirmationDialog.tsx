import type { ReactNode } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmationDialogProps {
  title: string;
  message: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationDialog = ({
  title,
  message,
  open,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationDialogProps) => {
  return (
    <Modal title={title} open={open} onClose={onCancel}>
      <p className="text-slate-300">{message}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button variant="ghost" onClick={onCancel} type="button">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} type="button">
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
