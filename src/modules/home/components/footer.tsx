import { Instagram, TikTok } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white bg-green-1 px-6 md:px-8 py-8 lg:py-20 pb-5 lg:pb-10 w-screen flex flex-col items-center">
      <div className="mx-auto w-full max-w-6xl flex flex-col items-center">
        <div className="bg-yellow-1 text-green-1 px-5 py-3 mb-12 text-xs font-sm rounded-sm -rotate-2">
          LIMITED SPOTS • APRIL 2026
        </div>
        <h2 className="font-ws text-5xl md:text-7xl lg:text-8xl text-center font-black uppercase leading-[0.8] opacity-90">
          <span>Ready for</span> <br /> <span>Madeira?</span>
        </h2>
        <p className="mt-8 flex items-center font-cg text-xl md:text-2xl lg:text-3xl italic opacity-80 text-center">
          Join our pole dance retreat in Madeira.
        </p>

        <Button className="bg-white mt-12 w-fit text-[#0F1F15] hover:shadow-lg hover:shadow-white/30">
          Apply now{" "}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={3}
          />
        </Button>

        <p className="mt-4 font-c tracking-tight text-xl opacity-50 animate-floating-slow">
          (application takes 3 minutes)
        </p>

        <div className="mt-16 lg:mt-24 w-full h-px bg-white/20" />

        {/* newsletter */}
        <div className="py-10 lg:py-16 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-12">
          <h3 className="shrink-0 lg:max-w-70 font-cg text-2xl md:text-3xl lg:text-4xl italic leading-tight text-center lg:text-left">
            Follow The Madeira Creative Village
          </h3>

          <div className="w-full lg:flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-1">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="font-i text-xs md:text-sm text-white/80">
                Get updates about openings, experiences, retreats
              </span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-stretch gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full md:flex-1 h-12 px-4 bg-white/5 border border-white/20 rounded font-i text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-1 transition-colors"
              />
              <Button className="w-full md:w-fit bg-white text-green-1 hover:shadow-lg hover:shadow-white/30">
                <span className="tracking-tight">Get updates</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={3}
                />
              </Button>
            </div>

            <p className="mt-1 font-i text-xs text-white/50 text-center lg:text-left">
              Opening late 2026 · No spam · Only meaningful updates.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/20" />

        {/* links */}
        <div className="py-8 lg:py-12 w-full flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
          <div>
            <p className="font-ws text-base md:text-lg font-black uppercase tracking-tight">
              Madeira Creative Village
            </p>
            <p className="mt-4 font-i text-sm leading-relaxed text-white/70">
              Active Holidays &amp; Retreats in Madeira. Rebuild your strength. Rediscover your
              confidence through sport, nature, and art.
            </p>
          </div>

          <div>
            <p className="font-sm text-xs uppercase tracking-widest text-white/50">Support</p>
            <ul className="mt-4 flex flex-col gap-3 font-i text-sm text-white/70">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="mailto:madeiracreativevillage@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms &amp; Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sm text-xs uppercase tracking-widest text-white/50">Follow us</p>
            <ul className="mt-4 flex flex-col gap-3 font-i text-sm text-white/70">
              <li>
                <a
                  href="https://www.instagram.com/madeiracreativevillage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@madeira_creative_village"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <TikTok className="h-4 w-4" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/20" />

        <p className="py-6 font-i text-sm text-white/50 text-center">
          © 2026 Madeira Creative Village
        </p>
      </div>
    </footer>
  );
}
