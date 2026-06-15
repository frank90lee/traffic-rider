"use client";

import { useState, useRef, useEffect } from "react";

interface GameProps {
  src: string;
  title?: string;
}

const Game = ({ src, title = "Game" }: GameProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  return (
    <section id="play" className="p-2 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={containerRef}
          className="relative w-full" 
          style={{ paddingTop: "65%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={src}
            title={title}
            allowFullScreen
          />
          {/* 左下角遮罩层 */}
          {/* <div className="absolute bottom-0 left-0 h-12 w-full bg-gray-900 z-10 flex items-center px-4">
            <p className="text-white text-lg font-medium">{title}</p>
          </div> */}
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-1 right-2 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity z-10"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H5a2 2 0 01-2-2v-4m14 6h4a2 2 0 002-2v-4M5 4h4M4 16v4m0-4h4m12-4h4m-4 0v4m0-16v4m0-4h4" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Game;
