import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white bg-green-1 px-6 md:px-16 lg:px-40 py-16 lg:py-40 pb-10 lg:pb-20 w-screen flex flex-col items-center">
      <div className="bg-yellow-1 text-green-1 px-5 py-3 mb-12 text-xs font-sm rounded -rotate-2">
        LIMITED SPOTS • APRIL 2026
      </div>
      <h2 className="font-ws text-5xl md:text-7xl lg:text-8xl text-center font-black uppercase leading-[0.8] opacity-90">
        <span>Ready to</span> <br /> <span>reset?</span>
      </h2>
      <p className="mt-8 flex items-center font-cg text-xl md:text-2xl lg:text-3xl italic opacity-80 text-center">
        Join the next cohort of Black Sheep heading to Madeira.
      </p>

      <Button className="bg-white mt-12 w-fit text-[#0F1F15] hover:shadow-lg hover:shadow-white/30">
        Apply now <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
      </Button>

      <p className="mt-4 font-c tracking-tight text-xl opacity-50 animate-floating-slow">(application takes 3 minutes)</p>

      <div className="py-12 lg:py-16 mt-16 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-y border-white/20">
        <div className="space-y-6 text-sm">
          <p className="font-ws uppercase font-semibold">About</p>
          <div className="space-y-3 font-i opacity-70">
            <p>Our Story</p>
            <p>The team</p>
            <p>Philosophy</p>
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <p className="font-ws uppercase font-semibold">Experiences</p>
          <div className="space-y-3 font-i opacity-70">
            <p>Wild &amp; Carefree</p>
            <p>Fit &amp; Crazy</p>
            <p>Dare to Be Sexy</p>
            <p>Surprise Me</p>
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <p className="font-ws uppercase font-semibold">Resources</p>
          <div className="space-y-3 font-i opacity-70">
            <p>FAQs</p>
            <p>Travel Guide</p>
            <p>Past Trips</p>
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <p className="font-ws uppercase font-semibold">Connect</p>
          <div className="space-y-3 font-i opacity-70">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center">
          <p className="text-3xl">🐑</p>
          <p className="ml-4 font-sm text-xs opacity-50 uppercase tracking-tight">
            The Black Sheep Editorial
          </p>
        </div>
        <p className="font-i text-xs opacity-50 tracking-tight">
          © 2026 Metamorphosis Games. For the rebels.
        </p>
      </div>
    </footer>
  );
}
