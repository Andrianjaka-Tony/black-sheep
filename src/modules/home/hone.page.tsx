import { BreakTheStatic } from "@/modules/home/components/break-the-staic";
import { Different } from "@/modules/home/components/different";
import { Escape } from "@/modules/home/components/escape";
import { Footer } from "@/modules/home/components/footer";
import { Hero } from "@/modules/home/components/hero";
import { Look } from "@/modules/home/components/look";
import { Stay } from "@/modules/home/components/stay";
import { Fragment } from "react/jsx-runtime";

export function HomePage() {
  return (
    <Fragment>
      <Hero />
      <BreakTheStatic />
      <Look />
      <Stay />
      <Escape />
      <Different />
      <Footer />
    </Fragment>
  );
}
