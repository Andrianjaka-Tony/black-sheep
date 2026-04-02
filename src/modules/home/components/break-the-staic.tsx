"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
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
        <h2 className="font-ws text-green-2 text-5xl md:text-6xl xl:text-8xl font-black uppercase leading-[0.85] opacity-80">
          <span className="xl:hidden">Break the static</span>
          <span className="hidden xl:inline">
            Break the
            <br />
            static
          </span>
        </h2>

        <div className="px-4 py-2 mt-8 font-i text-green-2 text-sm md:text-base line-through border-l border-yellow-1 opacity-50">
          <p>Not a retreat</p>
          <p>Not a mass tourism</p>
          <p>Not another workshop or &quot;growth camp.&quot;</p>
        </div>

        <div className="bg-yellow-1 px-5 py-3 mt-6 w-fit font-ws text-green-2 text-sm md:text-base font-bold tracking-tight rounded -rotate-2">
          <span className="xl:hidden">Just do epic things with interesting people — and see what changes.</span>
          <span className="hidden xl:inline">
            Just do epic things with interesting people —
            <br />
            and see what changes.
          </span>
        </div>

        <p className="mt-10 md:mt-16 max-w-sm font-i text-green-2 text-sm md:text-base leading-relaxed">
          We craft out-of-the-box trips where entrepreneurs, freelancers, and creators leave the
          &quot;Status Quo&quot; behind to reconnect through adrenaline, fun activities, and raw
          nature. It&apos;s an authentic way to step out of your comfort zone and back into the
          wild.
        </p>

        <Button className="mt-8 bg-green-2 hover:shadow-lg hover:shadow-green-2/40">
          <span className="text-white tracking-tight">Choose your adventure</span>
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

        <video
          ref={videoRef}
          src="/videos/static.mov"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-7 -left-4 w-full object-cover rounded shadow-lg -rotate-1"
          style={{ aspectRatio: 544 / 627 }}
        />
        <div className="absolute bottom-10 left-2 flex gap-2 z-10">
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
  );
}
