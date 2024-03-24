import { motion as m } from "framer-motion";
import React from "react";

export default function ProjectTitle() {
  return (
    <m.div className="relative top-0 flex h-fit flex-col items-start justify-end pt-[8vh] text-start text-white">
      <p className="sixcaps z-50 p-4 leading-none text-muted-foreground [font-size:_clamp(5em,8vw,8em)]">
        FEATURED PROJECTS
      </p>
    </m.div>
  );
}
