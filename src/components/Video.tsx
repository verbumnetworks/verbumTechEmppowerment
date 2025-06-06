"use client";

import { useState } from "react";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center text-sm font-semibold  cursor-pointer text-blue-600 hover:underline mt-4"
      >
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-2">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
          </svg>
        </div>
        Watch Our Intro!
      </button>

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-3xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/--5ykeQvo5E"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            />

            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full p-2 shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
