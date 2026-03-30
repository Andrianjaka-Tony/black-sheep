import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export type EscapeCardType = {
  image: string;
  alt: string;
  title: ReactNode;
  tags: ReactNode[];
  badge: ReactNode;
  badgeRotation: number;
};

type Props = { escape: EscapeCardType };

export function EscapeCard({ escape }: Props) {
  const aspect = 636 / 520;

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: aspect }}>
      <img
        src={escape.image}
        alt={escape.alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-green-1/70 to-transparent" />

      <div className="absolute top-0 left-0 p-6 h-full w-full text-white flex flex-col justify-end">
        <h3 className="font-ws text-6xl font-black uppercase leading-[0.8] opacity-80">
          {escape.title}
        </h3>

        <div className="mt-4 font-c">
          {escape.tags.map((tag, key) => (
            <p key={key} className="text-2xl leading-none">
              {tag}
            </p>
          ))}
        </div>

        <Button className="bg-yellow-2 px-5 py-3! mt-6 w-fit text-[#0F1F15]">
          Explore this trip <ArrowRight className="h-4 w-4" strokeWidth={3} />
        </Button>
      </div>

      <div
        className="bg-white absolute top-3 right-3 px-3 py-1.5 shadow-lg shadow-black/30 font-sm text-xs text-black uppercase"
        style={{ rotate: escape.badgeRotation + "deg" }}
      >
        {escape.badge}
      </div>
    </div>
  );
}
