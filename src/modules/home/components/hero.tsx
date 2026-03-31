import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="h-screen w-screen relative text-white">
      <video
        src="/videos/hero.mov"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover brightness-50 grayscale-50"
      />
      <div className="absolute z-0 bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs font-sm uppercase opacity-80">Scroll to explore</p>
        <div className="h-6 w-px bg-white opacity-80" />
      </div>

      <div className="relative px-40 h-full w-full top-0 left-0 flex flex-col justify-center">
        <h2 className="text-xs font-sm uppercase opacity-80">Metamorphosis Games presents</h2>
        <h1 className="mt-4 font-ws text-8xl font-black uppercase leading-[0.8] opacity-80">
          <span>Fuck the</span> <br /> <span>normal.</span>
          <br />
          <span className="text-yellow-1">Live fully.</span>
        </h1>

        <div className="mt-8 ml-1.25 flex items-center gap-6">
          <div className="h-20 bg-yellow-1 w-px" />
          <p className="text-3xl font-cg leading-none tracking-tighter italic opacity-80">
            <span>Holidays for the artists and entrepreneurs,</span>
            <br /> <span>freelancers & free souls</span>
          </p>
        </div>

        <div className="mt-10 relative h-fit w-fit">
          <p className="absolute top-1/2 -translate-y-1/2 -translate-x-full flex items-center text-yellow-2 font-c text-2xl">
            step out <span className="ml-2 -translate-y-1">→</span>
          </p>
          <Button className="ml-6 bg-white text-green-1">
            <span className="tracking-tight">Choose your adventure</span>
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  );
}
