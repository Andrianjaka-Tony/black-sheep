import { ArrowRight } from "lucide-react";

export function Different() {
  return (
    <div className="bg-white-1 text-green-1 px-40 py-40 w-screen flex flex-col items-center">
      <h2 className="mt-4 font-ws text-8xl font-black uppercase leading-[0.8] text-center">
        <span>How it's</span> <br /> <span>different</span>
      </h2>
      <p className="mt-8 flex items-center font-cg text-xl italic">
        Freelancers are alone — you need bonding through experience.
      </p>

      <div className="mt-16 bg-green-1/70 w-2/3 aspect-video rounded-lg"></div>
      {/* yellow badge */}

      <div className="mt-32 w-full flex justify-between items-center">
        <div className="w-1/3 flex flex-col gap-8 text-brown-1">
          <div className="flex items-center font-sm uppercase tracking-tight">
            <div className="h-px w-8 bg-yellow-1 mr-3 translate-y-0.5" />
            <p>02 - Creative Reset</p>
          </div>
          <h3 className="font-ws text-5xl font-black uppercase leading-[0.8]">
            <span>Creative</span> <br /> <span>Stimulation</span>
          </h3>
          <div className="font-i leading-[1.35]">
            <p>Not work. Not workshops.</p>
            <p className="font-bold">But experiences that spark something.</p>
          </div>
          <div className="py-3 px-4 pr-12 w-fit bg-yellow-1 flex flex-col gap-1 rounded shadow-lg -rotate-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Late night creative talks
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Disposable cameras
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Shared soundtracks
            </div>
          </div>
          <div className="text-green-1 space-y-2 pl-4 border-l-2 border-[#4A6B54]">
            <p className="text-2xl font-cg italic tracking-tight">
              "I never saw my own work this way."
            </p>
            <p className="font-sm text-xs uppercase opacity-50">— Past Traveler</p>
          </div>
        </div>
        {/* right content */}
      </div>

      <div className="mt-32 w-full grid grid-cols-5 gap-10">
        <div className="bg-green-1/90 col-span-3 rounded-xl p-16">
          <p className="text-xs text-yellow-1 font-sm uppercase tracking-tight">Pillar Three</p>
          <h3 className="text-white mt-8 text-5xl font-ws uppercase font-black leading-none">
            <span>There's a</span> <br />
            <span>secret moment</span>
            <br />
            <span>in every trip</span>
          </h3>
          <div className="text-white mt-12 flex flex-col gap-2 font-i tracking-tight">
            <p>Unexpected location.</p>
            <p>Surprise drivers.</p>
            <p className="text-xl font-cg italic opacity-80">Exactly what doesn't see coming.</p>
            <p className="mt-8 text-sm opacity-60">Not revealed here.</p>
          </div>
        </div>
        <div className="bg-white col-span-2 rounded-xl py-16 px-10 shadow-lg">
          <h3 className="text-green-1 text-3xl font-ws uppercase font-black leading-none">
            <span>BONDING</span> <br />
            <span>THROUGH</span>
            <br />
            <span>EXPERIENCE</span>
          </h3>
          <div className="text-green-1 mt-12 flex flex-col gap-2 font-i tracking-tight">
            <p className="flex gap-2 items-center">
              <ArrowRight className="h-4 w-4" />
              sunset cliff drinks after hike
            </p>
            <p className="flex gap-2 items-center">
              <ArrowRight className="h-4 w-4" />
              night under the stars <span className="opacity-40 italic">(no phones moment)</span>
            </p>
            <p className="flex gap-2 items-center">
              <ArrowRight className="h-4 w-4" />
              "jump together" moments{" "}
              <span className="opacity-40 italic">(literally or metaphorically)</span>
            </p>
            <p className="mt-4 font-c text-xl">real chemical bond here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
