import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, delay, easeInOut, motion as m } from "framer-motion";
import Image from "next/image";

import { CSSProperties } from "react";

import top from "../../public/top.png";
import bottom from "../../public/bottom.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const children = ["L", "u", "i", "s", "K", "e", "ß", "l", "e", "r"];

  return (
    <>
      <Head>
        <title>Luis Keßler - Web Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <m.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 0.4 }}
        >
          <m.div
            animate={{ y: "-100%" }}
            initial={{ y: 0 }}
            transition={{ delay: 3.4, duration: 1.5, ease: easeInOut }}
            className="fixed left-0 top-0 z-[50] flex h-screen w-screen flex-col items-center justify-center bg-white text-black "
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

          <div>
            <m.div className="flex h-fit w-screen flex-col text-white">
              <div className="flex h-screen w-screen flex-col">
                <div className="montserrat flex h-[10vh] items-center justify-between px-3 md:px-10">
                  <p className="text-lg">
                    <span className="poppins">Luis</span>
                    <span className="playfair italic">Keßler</span>
                  </p>
                  <p className="hidden md:inline">
                    <span>Index, </span>
                    <span className="text-muted-foreground">Projects, </span>
                    <span className="text-muted-foreground">About, </span>
                    <span className="text-muted-foreground">Contact</span>
                  </p>
                  <p className="hidden underline md:inline">
                    Send me a message.
                  </p>
                </div>
                <div className="flex h-[90vh] flex-col items-center justify-center">
                  <m.div
                    animate={{ y: ["0vh", "-19vh"], opacity: [1, 0.5] }}
                    transition={{ delay: 4.5, duration: 1, ease: easeInOut }}
                    className="flex w-full flex-col items-center justify-center"
                  >
                    <Image src={top} alt="" className="max-w-[40%]"></Image>
                  </m.div>
                  <m.div
                    animate={{ y: ["0vh", "19vh"], opacity: [1, 0.5] }}
                    transition={{ delay: 4.5, duration: 1, ease: easeInOut }}
                    className="flex w-full flex-col items-center justify-center"
                  >
                    <Image src={bottom} alt="" className="max-w-[40%]"></Image>
                  </m.div>
                </div>
              </div>
              <div className="h-screen bg-white"></div>
            </m.div>
            <m.div
              animate={{ paddingTop: ["0vh", "10vh"] }}
              transition={{ delay: 4, duration: 2 }}
              className="absolute left-0 top-0 z-[60] flex h-screen w-screen items-center justify-center"
            >
              <m.div
                animate={{
                  width: ["10%"],
                  height: ["10%"],
                  scaleX: [0, 1],
                }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <m.div
                  animate={{ scale: [0.9, 6] }}
                  transition={{
                    times: [0.5, 1],
                    duration: 4,
                    delay: 2.5,
                  }}
                  className="h-full w-full bg-red-500"
                ></m.div>
              </m.div>
            </m.div>
          </div>
        </m.main>
      </AnimatePresence>
    </>
  );
}
