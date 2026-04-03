import { Button } from "@/components/ui/button";
import { EscapeCard, EscapeCardType } from "@/modules/home/components/escape/escape-card";
import { ArrowRight } from "lucide-react";

const escapes: EscapeCardType[] = [
  {
    image: "/images/wild-networking.jpg",
    alt: "Wild networking",
    title: (
      <>
        Wild
        <br />
        Networking
      </>
    ),
    tags: ["Usual networking is boring.", "Meet and connect differently."],
    badge: "0% small talk",
    badgeRotation: 3,
  },
  {
    image: "/images/fit-and-crazy.jpg",
    alt: "Fit & Crazy",
    title: (
      <div className="relative w-fit">
        <span className="line-through">Fat</span>
        {" & "}
        <img
          className="h-25 object-cover absolute left-full -translate-y-2/3 -translate-x-1/4 bottom-0 font-c font-black"
          src="/images/fit.svg"
          alt="Fit"
        />
        <br />
        Crazy
      </div>
    ),
    tags: ["Combine workouts", "and fun activities."],
    badge: "AUTHENTIC ONLY",
    badgeRotation: -2,
  },
  {
    image: "/images/dare-dancing.jpg",
    alt: "Dare Dancing",
    title: (
      <>
        Dare
        <br />
        Dancing
      </>
    ),
    tags: ["Pole dancing, sensual movement, fun."],
    badge: "THE ARCHITECT'S PICK",
    badgeRotation: 3,
  },
  {
    image: "/images/no-purpose-day.jpg",
    alt: "No Purpose day",
    title: (
      <>
        No
        <br />
        Purpose day
      </>
    ),
    tags: ["For those who tired to be productive.", "Slow days, chill and fun."],
    badge: "ZERO HUSTLE",
    badgeRotation: -2,
  },
];

export function Escape() {
  return (
    <div className="text-white bg-green-1 px-6 md:px-16 xl:px-40 py-16 xl:py-40 w-screen flex flex-col items-center">
      <h2 className="font-ws text-5xl md:text-7xl xl:text-8xl text-center font-black uppercase leading-[0.8] opacity-90">
        <span>Choose your</span> <br /> <span>escape</span>
      </h2>
      <p className="mt-8 flex items-center font-cg text-xl md:text-2xl xl:text-3xl italic text-center">
        Four journeys. One mission: Pull you out of the mundane.
      </p>

      <div className="w-full mt-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
        {escapes.map((escape, key) => (
          <EscapeCard key={key} escape={escape} />
        ))}
      </div>

      <p className="mt-16 flex items-center font-c text-xl md:text-2xl xl:text-3xl italic opacity-50 text-center">
        Can&apos;t decide? Let us curate your perfect chaos →
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Button className="bg-yellow-2 mt-6 w-fit text-[#0F1F15] shadow-lg shadow-yellow-2/50">
          See All Upcoming Trips{" "}
          <ArrowRight
            className="h-3 w-3 md:h-3.5 md:w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={3}
          />
        </Button>
        <p className="text-yellow-1 flex items-center font-c text-xl md:text-2xl italic opacity-50 animate-floating-delayed">
          honestly... all of them ✨
        </p>
      </div>
    </div>
  );
}
