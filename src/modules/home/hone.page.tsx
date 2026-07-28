import { BreakTheStatic } from "@/modules/home/components/break-the-staic";
import { DearFutureDancer } from "@/modules/home/components/dear-future-dancer";
import { Different } from "@/modules/home/components/different";
import { Escape } from "@/modules/home/components/escape";
import { Faq } from "@/modules/home/components/faq";
import { Footer } from "@/modules/home/components/footer";
import { Hero } from "@/modules/home/components/hero";
import { Look } from "@/modules/home/components/look";
import { Stay } from "@/modules/home/components/stay";
import { Teachers } from "@/modules/home/components/teachers";
import { Testimonials } from "@/modules/home/components/testimonials";
import { Fragment } from "react/jsx-runtime";

export function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Look />
      <BreakTheStatic />
      <DearFutureDancer />
      <Stay />
      <Teachers />
      <Testimonials />
      <Faq />
      {/* <Escape />
      <Different /> */}
      <Footer />
    </Fragment>
  );
}
