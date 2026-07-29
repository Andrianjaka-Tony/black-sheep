"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Story = {
  media: { kind: "photo"; src: string } | { kind: "video"; src: string; poster: string };
  label: string;
  rotation: string;
  // the three variants keep the cards out of sync with each other
  float: string;
};

const stories: Story[] = [
  {
    media: {
      kind: "video",
      src: "/images/stories/the-crew.mp4",
      poster: "/images/stories/the-crew-poster.jpg",
    },
    label: "The crew, on the coast",
    float: "animate-floating-slow",
    rotation: "-rotate-4",
  },
  {
    media: {
      kind: "video",
      src: "/images/stories/hanging-pole.mp4",
      poster: "/images/stories/hanging-pole-poster.jpg",
    },
    label: "Pole above the Atlantic",
    float: "animate-floating-delayed",
    rotation: "rotate-3",
  },
  {
    media: { kind: "photo", src: "/images/stories/green-cliffs.avif" },
    label: "Green cliffs, all together",
    float: "animate-floating-slow",
    rotation: "-rotate-2",
  },
  {
    media: { kind: "photo", src: "/images/stories/pole-camp-madeira.avif" },
    label: "Pole Camp Madeira",
    float: "animate-floating-delayed",
    rotation: "rotate-4",
  },
  {
    media: { kind: "photo", src: "/images/stories/boat-day.avif" },
    label: "Boat day",
    float: "animate-floating-slow",
    rotation: "-rotate-3",
  },
  {
    media: { kind: "photo", src: "/images/stories/fanal-forest.avif" },
    label: "Fanal forest",
    float: "animate-floating-delayed",
    rotation: "-rotate-2",
  },
];

function StoryVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // only play the clips that are actually on screen
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
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-3 left-3 flex gap-2 z-10">
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
    </>
  );
}

function StoryCard({ media, label, rotation, float }: Story) {
  return (
    <div className={`shrink-0 snap-start ${float}`}>
      <div className={`relative w-55 md:w-60 aspect-3/4 ${rotation}`}>
        {/* offset plate peeking out behind the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-lg bg-white-1 shadow-lg"
          style={{ transform: "translate(10px, 12px) rotate(2deg)" }}
        />

        <div className="relative h-full w-full overflow-hidden rounded-lg bg-green-1/70 shadow-lg">
          {media.kind === "photo" ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={media.src}
              alt={label}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <StoryVideo src={media.src} poster={media.poster} label={label} />
          )}

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <p className="absolute inset-x-0 bottom-4 px-4 font-ws text-white text-base md:text-lg font-black uppercase tracking-tight leading-tight">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="mx-auto w-full max-w-6xl flex flex-col">
        <h2 className="font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          Hear it from
          <br />
          the women
          <br />
          who came.
        </h2>

        <blockquote className="mt-10 max-w-3xl font-cg text-green-2 text-xl md:text-2xl xl:text-3xl italic tracking-tight leading-relaxed">
          The most transformative week of my life. I arrived a stranger and left with a family — the
          ocean, the poles, the women.{" "}
          <span className="inline-block bg-yellow-1 px-3 py-1 rounded shadow-lg font-ws text-green-2 text-base md:text-lg font-bold not-italic tracking-tight -rotate-2">
            I came home a different dancer — and a different person.
          </span>{" "}
          Every moment still lives in me.
        </blockquote>

        <p className="mt-16 font-sm text-green-2/70 text-xs md:text-sm uppercase tracking-widest">
          More from past retreats
        </p>

        {/* scrolls sideways, the cards keep their own width */}
        <div className="mt-4 -mx-6 md:-mx-8">
          <div className="flex items-start gap-10 md:gap-14 overflow-x-auto snap-x snap-mandatory px-6 md:px-8 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {stories.map((story) => (
              <StoryCard key={story.label} {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
