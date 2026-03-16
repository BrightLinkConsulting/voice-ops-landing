'use client';

import { useEffect, useCallback } from 'react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111114] border border-[#1E1E24] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative sm:rounded-2xl max-sm:rounded-none max-sm:max-h-[100dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl cursor-pointer z-10"
          aria-label="Close modal"
        >
          &times;
        </button>

        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/Vl2mxnSkXUDdLJqKphWi"
          width="100%"
          className="h-[600px] max-sm:h-[500px]"
          frameBorder="0"
          scrolling="yes"
          title="Book a Strategy Call"
        />
      </div>
    </div>
  );
}
