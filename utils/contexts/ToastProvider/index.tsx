"use client";

import { ReactNode } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer position="top-center" />
    </>
  );
};

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};
