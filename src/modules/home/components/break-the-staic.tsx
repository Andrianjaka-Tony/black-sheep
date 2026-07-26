"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Pause, Play, Users, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export function BreakTheStatic() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="bg-white-1 px-6 md:px-8 xl:px-40 py-12 md:py-16 xl:py-40 w-screen flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-0">
      {/* left: text */}
      <div className="w-full xl:w-1/2 flex flex-col md:items-center md:text-center xl:items-start xl:text-left">
        <h2 className="font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          <span className="xl:hidden">No studio. No ceiling. No limits.</span>
          <span className="hidden xl:inline">
            No studio.
            <br />
            No ceiling.
            <br />
            No limits.
          </span>
        </h2>

        <p className="mt-8 max-w-sm font-i text-green-2 text-sm md:text-base leading-relaxed">
          We left the studio behind — train with the ocean on one side and the mountains on the
          other, and wake up to waves and birds instead of four walls.
        </p>

        <div className="px-4 py-2 mt-8 font-i text-green-2 text-sm md:text-base line-through border-l border-yellow-1 opacity-50">
          <p>Not a fitness bootcamp.</p>
          <p>Not a plateau with a view.</p>
          <p>Not another retreat you&apos;ll forget by next month.</p>
        </div>

        <div className="bg-yellow-1 px-5 py-3 mt-6 w-fit font-ws text-green-2 text-sm md:text-base font-bold tracking-tight rounded -rotate-2">
          <span className="xl:hidden">
            Real progression on the pole. Wild nature outside every window. A community that gets
            it. — Welcome to Open Air Pole Camp.
          </span>
          <span className="hidden xl:inline">
            Real progression on the pole. Wild nature outside every window.
            <br />
            A community that gets it. — Welcome to Open Air Pole Camp.
          </span>
        </div>

        <p className="mt-8 max-w-sm font-i text-green-2 text-sm md:text-base leading-relaxed">
          8 days, our garden studio facing the ocean, every level welcome.
        </p>

        <div className="mt-2 flex items-center gap-2 font-ws text-green-2 text-xs md:text-sm font-bold uppercase tracking-widest">
          <Users className="h-4 w-4" strokeWidth={2.5} />
          Small group — max 10 dancers · 2 per pole
        </div>

        <Button className="mt-8 bg-green-2 hover:shadow-lg hover:shadow-green-2/40">
          <span className="text-white tracking-tight">Claim your spot</span>
          <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 xl:h-4 xl:w-4 text-yellow-1 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
        </Button>
      </div>

      {/* right: video */}
      <div className="relative xl:ml-auto w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 mx-auto xl:mx-0" style={{ aspectRatio: 544 / 685 }}>
        <div className="absolute top-0 left-0 h-full w-full bg-[#D4A5744D] flex items-end justify-end px-4 pb-3 rounded rotate-3">
          <p className="text-green-2 flex items-center font-c text-sm animate-floating-slow">
            Worth it <span className="ml-2 -translate-y-1">→</span>
          </p>
        </div>

        <div className="absolute top-7 -left-4 w-full" style={{ aspectRatio: 544 / 627 }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/static-poster.jpg"
            className="h-full w-full object-cover rounded shadow-lg"
          >
            <source src="/videos/static.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" />
            <source src="/videos/static.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            <button
              onClick={togglePlay}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
