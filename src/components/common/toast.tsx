"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

type ToastType = "success" | "error";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContainerProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

const toastVariants = {
  initial: { opacity: 0, x: 100, scale: 0.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex max-w-md flex-col gap-3">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-x-0 top-0 h-px ${
                toast.type === "success"
                  ? "bg-linear-to-r from-emerald-400/50 to-teal-400/50"
                  : "bg-linear-to-r from-red-400/50 to-rose-400/50"
              }`}
            />

            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
                  toast.type === "success"
                    ? "bg-emerald-400/15 text-emerald-300"
                    : "bg-red-400/15 text-red-300"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 className="size-5" />
                ) : (
                  <XCircle className="size-5" />
                )}
              </div>

              {/* Message */}
              <div className="flex-1 pr-8">
                <p className="text-sm font-medium text-white">{toast.message}</p>
              </div>

              {/* Dismiss button */}
              <button
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Dismiss notification"
              >
                <X className="size-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    setToasts((prev: Toast[]) => [...prev, { id, type, message }]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissToast(id);
    }, 5000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev: Toast[]) => prev.filter((toast: Toast) => toast.id !== id));
  };

  const success = (message: string) => addToast("success", message);
  const error = (message: string) => addToast("error", message);

  return { toasts, success, error, dismissToast };
}