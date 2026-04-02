import { ArrowRight } from "lucide-react";

export function Different() {
  return (
    <div className="bg-white-1 text-green-1 px-6 md:px-12 lg:px-40 py-16 md:py-24 lg:py-40 w-screen flex flex-col items-center">
      <h2 className="font-ws text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] text-center">
        <span>How it&apos;s</span>
        <br />
        <span>different</span>
      </h2>
      <p className="mt-6 font-cg text-base md:text-xl italic text-center opacity-70">
        Freelancers are alone — you need bonding through experience.
      </p>

      <div className="mt-12 bg-green-1/70 w-full md:w-4/5 lg:w-2/3 aspect-video rounded-lg" />

      {/* Creative Stimulation block */}
      <div className="mt-16 md:mt-24 lg:mt-32 w-full flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
        {/* left: text */}
        <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col gap-6 text-brown-1">
          <div className="flex items-center font-sm uppercase tracking-tight text-sm">
            <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
            <p>02 - Creative Reset</p>
          </div>
          <h3 className="font-ws text-4xl md:text-5xl font-black uppercase leading-[0.85]">
            <span>Creative</span>
            <br />
            <span>Stimulation</span>
          </h3>
          <div className="font-i leading-relaxed text-sm md:text-base">
            <p>Not work. Not workshops.</p>
            <p className="font-bold">But experiences that spark something.</p>
          </div>
          <div className="py-3 px-4 pr-10 w-fit bg-yellow-1 flex flex-col gap-1.5 rounded shadow-lg -rotate-2 text-sm">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 shrink-0" />
              Late night creative talks
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 shrink-0" />
              Disposable cameras
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 shrink-0" />
              Shared soundtracks
            </div>
          </div>
          <div className="text-green-1 space-y-2 pl-4 border-l-2 border-[#4A6B54]">
            <p className="text-xl md:text-2xl font-cg italic tracking-tight">
              &quot;I never saw my own work this way.&quot;
            </p>
            <p className="font-sm text-xs uppercase opacity-50">— Past Traveler</p>
          </div>
        </div>

        {/* right: stacked cards */}
        <div
          className="relative w-3/4 sm:w-1/2 md:w-5/12 lg:w-3/10 mx-auto md:mx-0 flex flex-col items-center justify-end shrink-0"
          style={{ aspectRatio: 312 / 389 }}
        >
          <div className="absolute bottom-4 right-1/8 w-full h-full bg-[#CC9C6B] scale-80 rounded-lg shadow-lg rotate-8" />
          <div
            id="film-challenge"
            className="absolute overflow-hidden -top-4 right-4 w-full h-full bg-[#7CB5A5] rounded-lg shadow-lg flex items-center justify-center text-white font-c text-2xl tracking-tight scale-75 -rotate-6 md:-top-4 md:right-4 md:scale-90 md:-rotate-6 lg:scale-90 lg:top-0 lg:right-95/100 lg:rotate-0 animate-floating-delayed"
          >
            <img
              src="/images/difference.png"
              alt="difference"
              className="absolute h-full w-full object-cover -z-1 brightness-80"
            />
            film challenge
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-green-2 scale-80 rounded-lg shadow-lg flex flex-col items-center justify-center font-c tracking-tight animate-floating-slow">
            <p className="font-ws text-base text-white tracking-tight uppercase">Your soundtrack</p>
            <p className="text-yellow-1 text-lg">share your playlist</p>
          </div>
          <p className="relative z-10 text-xl font-c tracking-tight text-center pb-1 animate-floating-slow">
            this wasn&apos;t planned
          </p>
        </div>
      </div>

      {/* Pillar cards */}
      <div className="mt-16 md:mt-24 lg:mt-32 w-full flex flex-col lg:flex-row gap-6">
        <div className="bg-green-1/90 flex-1 rounded-xl p-8 md:p-10 lg:p-16">
          <p className="text-xs text-yellow-1 font-sm uppercase tracking-tight">Pillar Three</p>
          <h3 className="text-white mt-6 text-3xl md:text-4xl lg:text-5xl font-ws uppercase font-black leading-none">
            <span>There&apos;s a</span>
            <br />
            <span>secret moment</span>
            <br />
            <span>in every trip</span>
          </h3>
          <div className="text-white mt-8 flex flex-col gap-2 font-i tracking-tight text-sm md:text-base">
            <p>Unexpected location.</p>
            <p>Surprise drivers.</p>
            <p className="text-lg font-cg italic opacity-80">
              Exactly what doesn&apos;t see coming.
            </p>
            <p className="mt-6 text-sm opacity-60">Not revealed here.</p>
          </div>
        </div>
        <div
          id="bonding"
          className="bg-white lg:w-[38%] rounded-xl py-8 md:py-10 lg:py-16 px-8 md:px-10 shadow-lg"
        >
          <h3 className="text-green-1 text-2xl md:text-3xl font-ws uppercase font-black leading-none">
            <span>BONDING</span>
            <br />
            <span>THROUGH</span>
            <br />
            <span>EXPERIENCE</span>
          </h3>
          <div className="text-green-1 mt-8 flex flex-col gap-3 font-i tracking-tight text-sm md:text-base">
            <p className="flex gap-2 items-start">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
              sunset cliff drinks after hike
            </p>
            <div className="flex gap-2 items-start">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
              <span>night under the stars <span className="opacity-40 italic">(no phones moment)</span></span>
            </div>
            <div className="flex gap-2 items-start">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
              <span>&quot;jump together&quot; moments <span className="opacity-40 italic">(literally or metaphorically)</span></span>
            </div>
            <p className="mt-2 font-c text-lg animate-floating-delayed">real chemical bond here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
