import { easeInOut, motion as m } from "framer-motion";
import React from "react";

export default function LoadingAnimationComponent() {
  const children = ["L", "u", "i", "s", "K", "e", "ß", "l", "e", "r"];

  return (
    <m.div
      animate={{ y: "-100%" }}
      initial={{ y: 0 }}
      transition={{ delay: 3.4, duration: 1.5, ease: easeInOut }}
      className="fixed left-0 top-0 z-[500] flex h-screen w-screen flex-col items-center justify-center bg-white text-black "
    >
      <m.div className="flex [font-size:_clamp(2em,7vw,16em)]">
        <m.p
          animate={{ x: ["0vw", "-3vw"] }}
          transition={{ duration: 0.5, delay: 2.3, ease: easeInOut }}
          className="flex justify-end pt-2"
        >
          {children.slice(0, 4).map((letter, index) => (
            <m.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ delay: 0.2 * index }}
              className="poppins"
            >
              {letter}
            </m.span>
          ))}
        </m.p>

        <m.p
          animate={{ x: ["0vw", "10.5vw"] }}
          transition={{ duration: 0.5, delay: 2.3, ease: easeInOut }}
          className=""
        >
          {children.slice(4).map((letter, index) => (
            <m.span
              key={index + 4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ delay: 0.2 * (index + 4) }}
              className="playfair italic"
            >
              {letter}
            </m.span>
          ))}
        </m.p>
      </m.div>
    </m.div>
  );
}
