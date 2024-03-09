import { motion as m } from "framer-motion";
import React from "react";

export default function ProjectComponent() {
  return (
    <m.div className="relative top-0 flex h-fit flex-col items-start justify-end border text-start text-white">
      <p className="sixcaps z-50 p-4 leading-none text-white [font-size:_clamp(2em,8vw,8em)]">
        FEATURED PROJECTS
      </p>
    </m.div>
  );
}
