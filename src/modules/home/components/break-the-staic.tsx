import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BreakTheStatic() {
  return (
    <div className="bg-[#FAF9F6] px-40 py-20 w-screen flex items-center">
      <div className="w-1/2">
        <h2 className="mt-4 font-ws text-green-2 text-8xl font-black uppercase leading-[0.8] opacity-80">
          <span>Break the</span> <br /> <span>static</span>
        </h2>

        <div className="px-6 py-2 mt-8 font-i text-green-2 line-through border-l border-yellow-1 opacity-50">
          <p>Not a retreat</p>
          <p>Not a mass tourism </p>
          <p>Not another workshop or “growth camp.”</p>
        </div>

        <div className="bg-yellow-1 px-6 py-3 mt-6 w-fit font-ws text-green-2 font-bold tracking-tight rounded -rotate-2">
          <span>Just do epic things with interesting people —</span>
          <br />
          <span>and see what changes.</span>
        </div>

        <p className="mt-16 w-2/3 font-i text-green-2">
          We craft out-of-the-box trips where entrepreneurs, freelancers, and creators leave the
          "Status Quo" behind to reconnect through adrenaline, fun activities, and raw nature. It’s
          an authentic way to step out of your comfort zone and back into the wild.
        </p>

        <Button className="mt-8 bg-green-2">
          <span className="text-white tracking-tight">Choose your adventure</span>
          <ArrowRight className="h-4 w-4 text-yellow-1" strokeWidth={3} />
        </Button>
      </div>

      <div className="relative ml-auto w-2/5" style={{ aspectRatio: 544 / 685 }}>
        <div className="absolute top-0 left-0 py-2.25 px-4 h-full w-full bg-[#D4A5744D] flex items-end justify-end rounded rotate-3">
          <p className="text-green-2 flex items-center font-c">
            Worth it <span className="ml-2 -translate-y-1">→</span>
          </p>
        </div>

        <img
          src="/images/break-the-static-image.jpg"
          className="absolute top-7 -left-4 w-full object-cover rounded shadow-lg -rotate-1"
          style={{ aspectRatio: 544 / 627 }}
        />
      </div>
    </div>
  );
}
