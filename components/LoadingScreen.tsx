"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"writing" | "fading" | "hidden">("writing");

  useEffect(() => {
    // 1.5s for writing animation, then start fading
    const t1 = setTimeout(() => {
      setStage("fading");
    }, 1800);

    // 0.7s for fade out, then hide completely
    const t2 = setTimeout(() => {
      setStage("hidden");
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        stage === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ice-100"
          style={{ 
            fontFamily: "var(--font-dancing-script), cursive",
            textShadow: "0 0 40px rgba(166, 197, 228, 0.3)"
          }}
        >
          <span className="inline-block relative overflow-hidden pb-4">
            Janarthanan P
            {/* The cover block that slides right to reveal the text */}
            <span 
              className="absolute inset-0 bg-background"
              style={{
                animation: "wipe-right 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                transformOrigin: "right"
              }}
            />
          </span>
        </h1>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wipe-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(101%); }
        }
      `}} />
    </div>
  );
}
