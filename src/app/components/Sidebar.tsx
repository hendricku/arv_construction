"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Sidebar({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  if (!mounted || !open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      {/* Sidebar */}
      <aside className="fixed right-0 top-0 bg-gray-900 text-white w-80 max-w-full h-full shadow-xl flex flex-col p-8 animate-slide-in-right">
        {/* Close button */}
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 text-2xl shadow hover:bg-gray-200 transition"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {children}
      </aside>
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>,
    document.body
  );
} 