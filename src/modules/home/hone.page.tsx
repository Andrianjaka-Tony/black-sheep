import { BreakTheStatic } from "@/modules/home/components/break-the-staic";
import { Hero } from "@/modules/home/components/hero";
import { Fragment } from "react/jsx-runtime";

export function HomePage() {
  return (
    <Fragment>
      <Hero />
      <BreakTheStatic />
    </Fragment>
  );
}
