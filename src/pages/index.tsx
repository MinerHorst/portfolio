import Head from "next/head";
import Link from "next/link";
import { delay, easeInOut, motion as m } from "framer-motion";
import Image from "next/image";

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

      <m.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.4 }}
      >
        <m.div
          animate={{ y: "-100%" }}
          initial={{ y: 0 }}
          transition={{ delay: 2.6, duration: 1.5, ease: easeInOut }}
          className="fixed left-0 top-0 z-[50] flex h-screen w-screen flex-col items-center justify-center bg-white text-black "
        >
          <m.div className="[font-size:_clamp(2em,7vw,16em)]">
            {children.map((letter, index) => (
              <m.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ delay: 0.2 * index }}
              >
                <m.span className={index < 4 ? "poppins" : "playfair italic"}>
                  {letter}
                </m.span>
              </m.span>
            ))}
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
                <p className="hidden underline md:inline">Send me a message.</p>
              </div>
              <div className="flex h-[90vh] flex-col items-center justify-center">
                <m.div
                  animate={{ y: ["0vh", "-19vh"], opacity: [1, 0.4] }}
                  transition={{ delay: 4.2, duration: 1, ease: easeInOut }}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <Image src={top} alt="" className="max-w-[40%]"></Image>
                </m.div>
                <m.div
                  animate={{ y: ["0vh", "19vh"], opacity: [1, 0.4] }}
                  transition={{ delay: 4.2, duration: 1, ease: easeInOut }}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <Image src={bottom} alt="" className="max-w-[40%]"></Image>
                </m.div>
              </div>
            </div>
            <div className="h-screen bg-white"></div>
          </m.div>
          <m.div
            animate={{
              scaleX: [0, 1],
            }}
            transition={{ delay: 5.2, duration: 1.5 }}
            className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center pt-[10vh]"
          >
            <div className="flex h-[50%] w-full items-center justify-between overflow-scroll">
              <div className="h-full w-full">
                <div className="grid h-full w-[300vw] grid-cols-8 bg-red-500">
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                  <div className="col-span-1 border"></div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </m.main>
    </>
  );
}
