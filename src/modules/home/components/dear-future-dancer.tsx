"use client";

import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Media =
  | { kind: "video"; src: string; poster: string }
  | { kind: "carousel"; photos: string[] }
  | { kind: "photo"; src: string };

type Moment = {
  media: Media;
  note: string;
  rotation: string;
  title?: string;
  text: string;
};

const moments: Moment[] = [
  {
    media: {
      kind: "video",
      src: "/images/8-days/boat.mp4",
      poster: "/images/8-days/boat-poster.jpg",
    },
    note: "Sunset boat",
    rotation: "-rotate-3",
    text: "You'll experience a unique sunset boat trip with a hanging pole — a fun and unforgettable activity.",
  },
  {
    media: {
      kind: "carousel",
      photos: [
        "/images/8-days/sunrise-1.avif",
        "/images/8-days/sunrise-2.avif",
        "/images/8-days/sunrise-3.avif",
      ],
    },
    note: "Sunrise, black sand",
    rotation: "rotate-[2.5deg]",
    title: "Black Sand Beach Photoshoot",
    text: "At sunrise, we head to the black sand beach for a stunning pole photoshoot with the rising sun and the Atlantic Ocean as your backdrop.",
  },
  {
    media: {
      kind: "video",
      src: "/images/8-days/porto-moniz.mp4",
      poster: "/images/8-days/porto-moniz-poster.jpg",
    },
    note: "Porto Moniz",
    rotation: "-rotate-2",
    title: "Swim in the Porto Moniz Natural Pools",
    text: "We explore Porto Moniz's natural swimming pools, take a refreshing swim in the Atlantic, relax, laugh, and enjoy one of Madeira's most iconic spots together.",
  },
  {
    media: { kind: "photo", src: "/images/8-days/4.avif" },
    note: "Oceanfront dinner",
    rotation: "rotate-3",
    title: "Enjoy an Oceanfront Dinner",
    text: "We gather for a special oceanfront dinner, enjoying great food, beautiful views, and a memorable evening together as a community.",
  },
];

function PolaroidVideo({
  src,
  poster,
  note,
  // the header polaroid has a photo overlapping its bottom-left corner
  controlsPosition = "bottom-3 left-3",
}: {
  src: string;
  poster: string;
  note: string;
  controlsPosition?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // play as soon as the polaroid is on screen, pause once it leaves
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
        preload="metadata"
        aria-label={note}
        className="h-full w-full object-cover"
      />
      <div className={`absolute ${controlsPosition} flex gap-2 z-10`}>
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

function PolaroidCarousel({ photos, note }: { photos: string[]; note: string }) {
  const [current, setCurrent] = useState(0);

  function go(step: number) {
    setCurrent((index) => (index + step + photos.length) % photos.length);
  }

  return (
    <>
      {photos.map((photo, index) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={photo}
          src={photo}
          alt={`${note} — photo ${index + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white-1/90 text-green-2 shadow hover:bg-white-1 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white-1/90 text-green-2 shadow hover:bg-white-1 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to photo ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-white-1" : "w-2 bg-white-1/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}

function Polaroid({ media, note, rotation }: Omit<Moment, "text">) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className={`relative bg-white p-3 pb-10 rounded shadow-lg ${rotation}`}>
        <div className="relative aspect-4/5 overflow-hidden bg-green-1/70">
          {media.kind === "video" && (
            <PolaroidVideo src={media.src} poster={media.poster} note={note} />
          )}
          {media.kind === "carousel" && <PolaroidCarousel photos={media.photos} note={note} />}
          {media.kind === "photo" && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={media.src} alt={note} loading="lazy" className="h-full w-full object-cover" />
          )}
        </div>
        <p className="absolute right-4 bottom-2 font-c text-green-2 text-xl -rotate-4">{note}</p>
      </div>
    </div>
  );
}

// sits on top of the header, so it never pushes the copy around
function HeaderMedia() {
  return (
    <div className="absolute top-0 right-0 hidden w-64 xl:w-72 lg:block">
      {/* photo overlapping the video's bottom-left corner */}
      <div className="absolute -left-20 -bottom-10 z-10 hidden w-40 -rotate-6 rounded bg-white p-2 pb-6 shadow-lg sm:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/8-days/future-dancer.avif"
          alt="Hanging pole above the Atlantic"
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>

      <div className="relative rotate-3 rounded bg-white p-3 pb-10 shadow-lg">
        <div className="relative aspect-4/5 overflow-hidden bg-green-1/70">
          <PolaroidVideo
            src="/images/8-days/future-dancer.mp4"
            poster="/images/8-days/future-dancer-poster.jpg"
            note="Your week in Madeira"
            controlsPosition="top-3 left-3"
          />
        </div>
        <p className="absolute right-4 bottom-2 font-c text-green-2 text-xl -rotate-4">
          Your 8 days →
        </p>
      </div>
    </div>
  );
}

export function DearFutureDancer() {
  return (
    <div className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="relative mx-auto w-full max-w-6xl flex flex-col">
        <HeaderMedia />

        <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
          <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
          <p>Your 8 days</p>
        </div>

        <h2 className="mt-4 font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          Dear dancer,
        </h2>

        <p className="mt-6 max-w-xl font-i text-green-2 text-sm md:text-base leading-relaxed">
          During your stay in Madeira, you&apos;ll enjoy the perfect balance of relaxation,
          adventure, and exclusive pole dancing experiences. Discover what awaits you!
        </p>

        <div className="mt-12 space-y-8 md:space-y-10">
          {moments.map(({ media, note, rotation, title, text }, index) => (
            <div
              key={note}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Polaroid media={media} note={note} rotation={rotation} />
              <div>
                {title && (
                  <h3 className="font-ws text-green-2 text-xl md:text-2xl font-black uppercase leading-[0.95]">
                    {title}
                  </h3>
                )}
                <p
                  className={`font-i text-green-2 text-base md:text-lg leading-relaxed opacity-90 ${
                    title ? "mt-3" : ""
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="mt-16 font-c text-green-2 text-2xl md:text-3xl">
          We can&apos;t wait to have you. — The Open Air Pole Camp Team
        </p> */}
      </div>
    </div>
  );
}
