"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type StayPlace = {
  photos: string[];
  badge?: string;
  hand: string;
  title: string;
  description: string;
  note: string;
};

const places: StayPlace[] = [
  {
    photos: [
      "/images/stay/villa-1.avif",
      "/images/stay/villa-2.avif",
      "/images/stay/villa-3.avif",
    ],
    hand: "Wake up where you train",
    title: "The Villa",
    description:
      "Garden studio facing the ocean, home base for every pole and yoga session.",
    note: "On-site training",
  },
  {
    photos: [
      "/images/stay/beach-1.avif",
      "/images/stay/beach-2.avif",
      "/images/stay/beach-3.avif",
      "/images/stay/beach-4.avif",
    ],
    badge: "Limited to 4 guests",
    hand: "Wake up on black sand, Seixal",
    title: "Black Sand Beach House",
    description:
      "2 double beds, shared by 4 pole friends, steps from Seixal's black sand beach.",
    note: "15 min from the villa · parking on-site",
  },
];

function StayCard({ photos, badge, hand, title, description, note }: StayPlace) {
  const [current, setCurrent] = useState(0);

  function go(step: number) {
    setCurrent((index) => (index + step + photos.length) % photos.length);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-green-2/10 bg-white shadow-lg">
      <div className="relative">
        <div className="relative aspect-4/3 overflow-hidden bg-green-1/70">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={photo}
              src={photo}
              alt={`${title} — photo ${index + 1}`}
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
        </div>

        {badge && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-yellow-1 px-3 py-1 font-ws text-green-2 text-xs font-bold uppercase tracking-wider shadow">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="font-c text-green-2 text-xl md:text-2xl">{hand}</p>
        <h3 className="mt-1 font-ws text-green-2 text-2xl md:text-3xl font-black uppercase leading-[0.95]">
          {title}
        </h3>
        <p className="mt-4 font-i text-green-2 text-sm md:text-base leading-relaxed opacity-80">
          {description}
        </p>
        <div className="mt-5 self-start inline-flex items-center gap-2 rounded-full border border-green-2/20 bg-white-1 px-3 py-1.5 font-sm text-green-2 text-xs uppercase tracking-widest">
          {note}
        </div>
      </div>
    </div>
  );
}

export function Stay() {
  return (
    <div
      id="stay"
      className="bg-white-1 px-6 md:px-8 xl:px-40 py-12 md:py-16 xl:py-32 w-screen flex flex-col"
    >
      <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
        <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
        <p>Your home base</p>
      </div>

      <h2 className="mt-4 font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
        Two ways to stay
      </h2>

      <p className="mt-6 max-w-xl font-i text-green-2 text-sm md:text-base leading-relaxed">
        Both are 15 minutes apart — pick whichever calls to you most.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch">
        {places.map((place) => (
          <StayCard key={place.title} {...place} />
        ))}
      </div>
    </div>
  );
}
