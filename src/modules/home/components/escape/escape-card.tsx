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
  return (
    <div className="relative w-full rounded-lg overflow-hidden [aspect-ratio:3/4] xl:[aspect-ratio:636/520]">
      <img
        src={escape.image}
        alt={escape.alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-green-1/70 to-transparent" />

      <div className="absolute top-0 left-0 p-4 md:p-5 xl:p-6 h-full w-full text-white flex flex-col justify-end gap-2 md:gap-3 xl:gap-4">
        <h3 className="font-ws text-4xl md:text-5xl xl:text-6xl font-black uppercase leading-[0.8] opacity-80">
          {escape.title}
        </h3>

        <div className="font-c">
          {escape.tags.map((tag, key) => (
            <p key={key} className="text-base md:text-lg xl:text-2xl leading-snug">
              {tag}
            </p>
          ))}
        </div>

        <Button className="bg-yellow-2 mt-2 w-fit text-[#0F1F15] hover:shadow-lg hover:shadow-yellow-2/50">
          Explore this trip <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
        </Button>
      </div>

      <div
        className="bg-white absolute top-3 right-3 px-2 py-1 md:px-3 md:py-1.5 shadow-lg shadow-black/30 font-sm text-xs text-black uppercase"
        style={{ rotate: escape.badgeRotation + "deg" }}
      >
        {escape.badge}
      </div>
    </div>
  );
}
