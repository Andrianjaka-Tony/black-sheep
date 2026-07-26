"use client";

import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type LookItem = {
  src: string;
  poster: string;
  caption: string;
  href: string;
  rotation: string;
};

const items: LookItem[] = [
  {
    src: "/videos/look-1.mp4",
    poster: "/videos/look-1-poster.jpg",
    caption: "First combo landed",
    href: "https://www.tiktok.com/@madeira_creative_village/video/7652757478920228129",
    rotation: "-rotate-2",
  },
  {
    src: "/videos/look-2.mp4",
    poster: "/videos/look-2-poster.jpg",
    caption: "Sunset session, day 3",
    href: "https://www.tiktok.com/@madeira_creative_village/video/7628334679619341601",
    rotation: "rotate-2",
  },
  {
    src: "/videos/look-3.mp4",
    poster: "/videos/look-3-poster.jpg",
    caption: "Volcanic pool swim",
    href: "https://www.tiktok.com/@madeira_creative_village/video/7626699460218834209",
    rotation: "-rotate-1",
  },
];

// TikTok photo post — no video stream, only the cover image
const photoItem = {
  src: "/images/look-4.jpg",
  caption: "Last night, our crew",
  href: "https://www.tiktok.com/@madeira_creative_village/photo/7624642842509561120",
  rotation: "rotate-3",
};

const cardClassName =
  "group relative aspect-9/16 scale-90 overflow-hidden rounded-lg bg-green-1/70 shadow-lg";

function LookOverlay({
  caption,
  href,
  // videos keep room for the play/mute controls, photos don't need it
  captionPadding = "pb-12",
}: {
  caption: string;
  href: string;
  captionPadding?: string;
}) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`${caption} — watch on TikTok`}
      />

      <span className="absolute top-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-white-1/90 text-green-2">
        <Music2 className="h-4 w-4" />
      </span>

      <span
        className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-green-1/90 to-transparent p-3 ${captionPadding} font-i text-xs md:text-sm font-medium text-white`}
      >
        {caption}
      </span>
    </>
  );
}

function LookPhotoCard({ src, caption, href, rotation }: typeof photoItem) {
  return (
    <div className={`${cardClassName} ${rotation}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={caption} loading="lazy" className="h-full w-full object-cover" />
      <LookOverlay caption={caption} href={href} captionPadding="pb-3" />
    </div>
  );
}

function LookCard({ src, poster, caption, href, rotation }: LookItem) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // play as soon as the card is on screen, pause once it leaves
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pausedByUser.current) return;
          video.play().then(
            () => setPlaying(true),
            () => setPlaying(false),
          );
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play();
      setPlaying(true);
    } else {
      pausedByUser.current = true;
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
    <div className={`${cardClassName} ${rotation}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />

      <LookOverlay caption={caption} href={href} />

      <div className="absolute bottom-3 left-3 flex gap-2 z-10">
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
  );
}

export function Look() {
  return (
    <div className="bg-white-1 px-6 md:px-8 xl:px-40 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
        <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
        <p>From past retreats</p>
      </div>

      <h2 className="mt-4 max-w-3xl font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
        This is what it actually looks like
      </h2>

      <p className="mt-6 max-w-xl font-i text-green-2 text-sm md:text-base leading-relaxed">
        See what our past retreats actually looked like — in the exact same garden you&apos;ll be
        training in.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <LookCard key={item.href} {...item} />
        ))}
        <LookPhotoCard {...photoItem} />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://www.tiktok.com/@madeira_creative_village"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sm text-green-2 text-xs md:text-sm uppercase tracking-widest hover:text-green-1 transition-colors"
        >
          <Music2 className="h-4 w-4" />
          For more, follow @madeira_creative_village
        </a>
      </div>
    </div>
  );
}
