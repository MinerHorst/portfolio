import { motion as m } from "framer-motion";
import React from "react";

export default function ProjectTitle() {
  return (
    <m.div className="relative top-0 hidden h-fit flex-col items-start justify-end pt-[8vh] text-start text-white md:flex">
      <p className="sixcaps z-50 p-4 leading-none text-muted-foreground [font-size:_clamp(2em,8vw,8em)]">
        FEATURED PROJECTS
      </p>
    </m.div>
  );
}
