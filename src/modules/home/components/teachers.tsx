"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// lucide dropped its brand icons, so the Instagram glyph lives here
function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

type Reel = {
  src: string;
  poster: string;
  caption: string;
  href: string;
  hasAudio?: boolean;
};

type Workshop = {
  title: string;
  description: string;
};

type Teacher = {
  name: string;
  role: string;
  bio: string;
  instagram?: string;
  reels: Reel[];
  workshops: Workshop[];
};

const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

const teachers: Teacher[] = [
  {
    name: "Jessika",
    role: "Québec, Canada",
    bio: "A talented pole artist, performer, and coach from Québec, Jessika brings together strength, creativity, and artistic expression in everything she teaches. Her encouraging approach will inspire you to challenge yourself, move with confidence, and discover new ways to express yourself through pole.",
    instagram: "https://www.instagram.com/ika.away",
    reels: [
      {
        src: "/videos/teachers/jessika-1.mp4",
        poster: "/videos/teachers/jessika-1-poster.jpg",
        hasAudio: true,
        caption: "POV: learning Low Flow with Jessika.",
        href: "https://www.instagram.com/ika.away",
      },
      {
        src: "/videos/teachers/jessika-2.mp4",
        poster: "/videos/teachers/jessika-2-poster.jpg",
        hasAudio: true,
        caption: "POV: strength shapes, Madeira cliffside.",
        href: "https://www.instagram.com/reel/DNrNquh4j1o/",
      },
      {
        src: "/videos/teachers/jessika-3.mp4",
        poster: "/videos/teachers/jessika-3-poster.jpg",
        hasAudio: true,
        caption: "POV: her static combo, take four.",
        href: "https://www.instagram.com/reel/DZM-y8AR_9g/",
      },
      {
        src: "/videos/teachers/jessika-4.mp4",
        poster: "/videos/teachers/jessika-4-poster.jpg",
        caption: "POV: floorwork golden hour.",
        href: "https://www.instagram.com/reel/DXRjnwmh1-O/",
      },
    ],
    workshops: [
      {
        title: "Strength Shapes",
        description: "Develop the power and control to support your pole journey.",
      },
      {
        title: "Low Flow",
        description: "Discover fluid, grounded movement and creative floorwork.",
      },
      {
        title: "Static Pole Combo",
        description:
          "Learn a dynamic combo that highlights the unique possibilities of static pole.",
      },
    ],
  },
  {
    name: "Dariane",
    role: "Pole instructor & content creator",
    bio: "Dariane is a pole instructor and content creator known for her creative approach to movement, unique shapes, and innovative combinations. She loves making pole feel accessible by offering variations for different levels and helping every student discover what their body is capable of.",
    reels: [
      {
        src: "/videos/teachers/dariane-1.mp4",
        poster: "/videos/teachers/dariane-1-poster.jpg",
        caption: "POV: spin combo, both levels.",
        href: "https://www.instagram.com/reel/DSxWbXqDe3U/",
      },
      {
        src: "/videos/teachers/dariane-2.mp4",
        poster: "/videos/teachers/dariane-2-poster.jpg",
        caption: "POV: flexy shapes for every body.",
        href: "https://www.instagram.com/reel/DbJabMNPtSs/",
      },
      {
        src: "/videos/teachers/dariane-3.mp4",
        poster: "/videos/teachers/dariane-3-poster.jpg",
        caption: "POV: an uncommon shape you'll steal.",
        href: "https://www.instagram.com/reel/DOopaj2D5di/",
      },
      {
        src: "/videos/teachers/dariane-4.mp4",
        poster: "/videos/teachers/dariane-4-poster.jpg",
        hasAudio: true,
        caption: "POV: creative entries, on repeat.",
        href: "https://www.instagram.com/reel/DPEyon0D4om/",
      },
    ],
    workshops: [
      {
        title: "Spin Pole Combo (Multiple Levels)",
        description:
          "Learn one beautiful combo with beginner and intermediate variations, so everyone can challenge themselves at their own pace.",
      },
      {
        title: "Uncommon Shapes",
        description:
          "Explore unique shapes and creative entries that will add originality to your pole vocabulary.",
      },
      {
        title: "Flexy Shapes for Every Body",
        description:
          "Discover beautiful flexy shapes with progressions and adaptations designed for every level, even if you think you're not flexible.",
      },
    ],
  },
];

function ReelCard({ src, poster, caption, href, hasAudio, rotation }: Reel & { rotation: string }) {
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
    <div
      className={`group relative aspect-9/16 w-55 sm:w-60 md:w-65 shrink-0 snap-center scale-90 overflow-hidden rounded-2xl bg-green-1/70 shadow-lg transition-transform duration-500 hover:rotate-0! hover:scale-[0.93] ${rotation}`}
    >
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

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/25" />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${caption} — watch on Instagram`}
        className="absolute inset-0"
      />

      <span className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white-1 text-green-2 shadow">
        <Instagram className="h-4 w-4" />
      </span>

      <p className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center font-c text-white text-xl sm:text-2xl leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
        {caption}
      </p>

      <div className="absolute bottom-3 left-3 flex gap-2 z-10">
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        {/* Instagram serves several of these reels without an audio track */}
        {hasAudio && (
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

function TeacherArticle({ name, role, bio, instagram, reels, workshops }: Teacher) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="font-ws text-green-2 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[0.9]">
          {name}
        </h3>
        <span className="font-sm text-green-2/75 text-xs md:text-sm uppercase tracking-tight">
          — {role}
        </span>
      </div>

      <p className="mt-5 max-w-2xl font-i text-green-2 text-sm md:text-base leading-relaxed opacity-85">
        {bio}
      </p>

      {/* scrolls sideways on small screens, sits centered once there is room */}
      <div className="mt-10 -mx-6 md:-mx-8">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-6 md:justify-center md:overflow-visible md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel, index) => (
            <ReelCard key={reel.src} {...reel} rotation={rotations[index % rotations.length]} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-sm text-green-2/70 text-xs uppercase tracking-widest">Her workshops</h4>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4">
          {workshops.map((workshop, index) => (
            <li
              key={workshop.title}
              className={`h-fit bg-yellow-1 px-5 py-3 rounded shadow-lg ${
                index % 2 === 0 ? "-rotate-2" : "rotate-1"
              }`}
            >
              <p className="font-ws text-green-2 text-sm md:text-base font-bold tracking-tight">
                {workshop.title}
              </p>
              <p className="mt-1 font-i text-green-2 text-xs md:text-sm leading-relaxed opacity-70">
                {workshop.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <a
          href={instagram ?? "#"}
          target={instagram ? "_blank" : undefined}
          rel={instagram ? "noopener noreferrer" : undefined}
          aria-label={`${name} on Instagram`}
          className="grid h-9 w-9 place-items-center rounded-full border border-green-2/40 text-green-2 transition hover:-translate-y-0.5 hover:border-green-2 hover:bg-green-2 hover:text-white-1"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function Teachers() {
  return (
    <div
      id="teachers"
      className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col">
        <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
          <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
          <p>Your teachers</p>
        </div>

        <h2 className="mt-4 font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          Meet your teachers
        </h2>

        <p className="mt-6 max-w-xl font-i text-green-2 text-sm md:text-base leading-relaxed">
          The pole artists guiding your week in Madeira — real classes, real energy, real growth.
        </p>

        <div className="mt-16 space-y-20 md:space-y-24">
          {teachers.map((teacher) => (
            <TeacherArticle key={teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
