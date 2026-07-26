import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CreditCard, Sparkles, Wallet } from "lucide-react";

export function Hero() {
  return (
    <div className="h-screen w-screen relative text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        className="absolute top-0 left-0 h-full w-full object-cover brightness-50 grayscale-50"
      >
        <source src="/videos/hero.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute z-0 bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs font-sm uppercase opacity-80">Scroll to explore</p>
        <div className="h-6 w-px bg-white opacity-80" />
      </div>

      <div className="relative px-6 md:px-20 lg:px-40 h-full w-full top-0 left-0 flex flex-col justify-center">
        <h2 className="text-xs font-sm uppercase opacity-80">
          Early bird registration — save €150
        </h2>
        <h1 className="mt-4 font-ws text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.8] opacity-80">
          <span>Open air pole</span>
          <br />
          <span className="text-yellow-1">Camp Madeira</span>
        </h1>

        <div className="mt-8 ml-1.25 flex items-center gap-6">
          <div className="h-28 bg-yellow-1 w-px hidden sm:block" />
          <p className="w-2xl text-xl md:text-2xl lg:text-3xl font-cg leading-none tracking-tighter italic opacity-80">
            Train in an exceptional location overlooking the Atlantic Ocean. Daily pole dance
            training with two pole instructors, yoga classes, island adventures, photoshoots, boat
            trips, and breathtaking hikes — one unforgettable retreat.
          </p>
        </div>

        <div className="mt-8 flex max-w-4xl flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/6">
            <Calendar className="h-4 w-4 shrink-0 text-yellow-1/80" />
            <span className="text-sm font-light tracking-wide leading-none text-white/85">
              26 September – 2 October 2027
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/6">
            <CreditCard className="h-4 w-4 shrink-0 text-yellow-1/80" />
            <span className="text-sm font-light tracking-wide leading-none text-white/85">
              €500 deposit to reserve your spot
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/6">
            <Wallet className="h-4 w-4 shrink-0 text-yellow-1/80" />
            <span className="text-sm font-light tracking-wide leading-none text-white/85">
              Flexible payment plans available
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/6">
            <Sparkles className="h-4 w-4 shrink-0 text-yellow-1/80" />
            <span className="text-sm font-light tracking-wide leading-none text-white/85">
              All levels welcome • beginner friendly
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <div className="relative h-fit w-fit">
            <p className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -translate-x-full items-center text-yellow-2 font-c text-2xl animate-floating">
              Step out <span className="ml-2 -translate-y-1">→</span>
            </p>
            <Button className="lg:ml-6 bg-white text-green-1 hover:shadow-lg hover:shadow-white/30">
              <span className="tracking-tight">Reserve your spot</span>
              <ArrowRight
                className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Button>
          </div>

          <a
            href="#included"
            className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-xs font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-yellow-1"
          >
            See what&apos;s included
          </a>
        </div>
      </div>
    </div>
  );
}
