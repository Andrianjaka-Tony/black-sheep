"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* Booking request form — shared by every stay that still has spots left.
   Short link: https://forms.gle/FsLFztQF1YeZYP2v5 */
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMUJaLu-APs5RcwvzM2lmnN7Z5_lscinwczxY2Vpn8E97HXw/viewform";

/* Checkbox question "Hotel Private room" in the form above. */
const FORM_STAY_FIELD = "entry.1328982117";

/** Prefills the stay the visitor clicked. The option must match the form's wording exactly. */
function bookingUrl(option?: string) {
  const base = `${FORM_URL}?usp=pp_url`;
  return option ? `${base}&${FORM_STAY_FIELD}=${encodeURIComponent(option)}` : base;
}

type StayPlace = {
  photos: string[];
  badge?: string;
  soldOut?: boolean;
  bookingOption?: string;
  hand: string;
  title: string;
  description: string;
  note: string;
};

const places: StayPlace[] = [
  {
    photos: ["/images/stay/villa-1.avif", "/images/stay/villa-2.avif", "/images/stay/villa-3.avif"],
    soldOut: true,
    hand: "Wake up where you train",
    title: "The Villa",
    description: "Garden studio facing the ocean, home base for every pole and yoga session.",
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
    bookingOption: "Seixal Black Sand beach house (groups only)",
    hand: "Wake up on black sand, Seixal",
    title: "Black Sand Beach House",
    description:
      "remplacer le text : An apartment overlooking the Black Sand Beach, perfect for 2 to 4 pole friends or a small family. \nSubmit a group booking request, and we'll provide a personalized price based on the number of guests.",
    note: "15 min from the villa · parking on-site",
  },
  {
    photos: [
      "/images/stay/hotel-1.avif",
      "/images/stay/hotel-2.avif",
      "/images/stay/hotel-3.avif",
      "/images/stay/hotel-4.avif",
    ],
    badge: "From 700€ per person",
    hand: "Wake up by the pool, Porto Moniz",
    title: "The Hotel",
    description:
      "4-star hotel offering shared and private rooms with a swimming pool in Porto Moniz, just a 15-minute drive from our retreat location.\nWe provide complimentary pick-up and drop-off for all classes and activities.",
    note: "Private room 1150€ · Shared room 700€ per person",
  },
];

function StayCard({
  photos,
  badge,
  soldOut,
  bookingOption,
  hand,
  title,
  description,
  note,
}: StayPlace) {
  const [current, setCurrent] = useState(0);

  function go(step: number) {
    setCurrent((index) => (index + step + photos.length) % photos.length);
  }

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-green-2/10 bg-white shadow-lg transition-all ${
        soldOut ? "" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
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
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white-1/90 text-green-2 shadow hover:bg-white-1 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white-1/90 text-green-2 shadow hover:bg-white-1 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 flex gap-1.5">
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

          {soldOut && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-green-2/45">
              <span className="-rotate-6 rounded-full border-2 border-white-1 bg-green-2/80 px-6 py-2 font-ws text-white-1 text-lg md:text-xl font-black uppercase tracking-widest shadow-lg">
                Sold out
              </span>
            </div>
          )}
        </div>

        {badge && !soldOut && (
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
        {description.split("\n").map((line, index) => (
          <p
            key={line}
            className={`font-i text-green-2 text-sm md:text-base leading-relaxed opacity-80 ${
              index === 0 ? "mt-4" : "mt-0"
            }`}
          >
            {line}
          </p>
        ))}
        <div className="mb-5"></div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {soldOut && (
            <span className="inline-flex items-center gap-2 rounded-full bg-green-2 px-3 py-1.5 font-sm text-white-1 text-xs uppercase tracking-widest">
              Sold out
            </span>
          )}
          <span className="inline-flex items-center gap-2 rounded-full border border-green-2/20 bg-white-1 px-3 py-1.5 font-sm text-green-2 text-xs uppercase tracking-widest">
            {note}
          </span>
        </div>

        {!soldOut && (
          /* The ::after pseudo-element stretches this link over the whole card,
             so the card is clickable while the carousel controls (z-30) stay on top. */
          <a
            href={bookingUrl(bookingOption)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-2 px-5 py-3 font-ws text-white-1 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-green-2/90 after:absolute after:inset-0 after:z-20 after:content-['']"
          >
            Reserve my spot
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Stay() {
  return (
    <div id="stay" className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="mx-auto w-full max-w-6xl flex flex-col">
        <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
          <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
          <p>Your home base</p>
        </div>

        <h2 className="mt-4 font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          Three ways to stay
        </h2>

        <p className="mt-6 max-w-xl font-i text-green-2 text-sm md:text-base leading-relaxed">
          All within a 15-minute drive — pick whichever calls to you most.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch">
          {places.map((place) => (
            <StayCard key={place.title} {...place} />
          ))}
        </div>
      </div>
    </div>
  );
}
