
import Hero from "@components/Home/Hero/Hero";
import { useState } from "react";

export default function Home() {
  const heroHeading = "Hero Heading";
  const heroDesc =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quaerat illo est, odit porro nemo delectus iste quasi voluptate saepe?";
  const heroBtn = "Home  Button";

  return (
    <div className="h-[300vh]">
      <Hero heroHeading={heroHeading} heroDesc={heroDesc} heroBtn={heroBtn} />
    </div>
  );
}
