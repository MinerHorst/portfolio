import Head from "next/head";
import Link from "next/link";

import springperfume from "../../public/springperfume.png";

import {
  AnimatePresence,
  animate,
  delay,
  easeInOut,
  motion as m,
  progress,
  scroll,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";

import { Parallax } from "react-scroll-parallax";

import { CSSProperties, useEffect, useRef, useState } from "react";

import top from "../../public/top.png";
import bottom from "../../public/bottom.png";
import { ChevronLeft, ChevronRight, Scale } from "lucide-react";

export default function Home() {
  const children = ["L", "u", "i", "s", "K", "e", "ß", "l", "e", "r"];

  const aboutref = useRef(null);

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);
  const [yProgress, setYProgress] = useState(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setYProgress(latest);
  });

  const width60Percent = screenWidth * 0.6;

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

          <div>
            <m.div className="relative flex h-fit w-screen flex-col text-white">
              <div className="flex h-screen w-screen flex-col">
                <div className="montserrat fixed top-0 z-[200] flex h-[10vh] w-full items-center justify-between bg-black px-3 md:px-10">
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
                <div className="flex h-[80vh] flex-col items-center justify-center pt-[20vh]">
                  <m.div
                    animate={{ y: ["0vh", "-25vh"], opacity: [1, 0.5] }}
                    transition={{ delay: 4.5, duration: 1, ease: easeInOut }}
                    className="flex w-full flex-col items-center justify-center"
                  >
                    <Image src={top} alt="" className="max-w-[40%]"></Image>
                  </m.div>
                  <m.div
                    animate={{ y: ["0vh", "26vh"], opacity: [1, 0.5] }}
                    transition={{ delay: 4.5, duration: 1, ease: easeInOut }}
                    className="flex w-full flex-col items-center justify-center"
                  >
                    <Image src={bottom} alt="" className="max-w-[40%]"></Image>
                  </m.div>
                </div>
                <div className="montserrat flex h-[10vh] items-center justify-between px-3 md:px-10">
                  <p className=""></p> {/*Hero - Footer*/}
                </div>
              </div>
              <m.div
                ref={aboutref}
                className="top-0 flex h-[120vh] flex-col items-center justify-center bg-black text-white"
              >
                <div className="relative flex h-full w-full flex-col items-center space-y-4">
                  <p className="sixcaps z-50 text-white opacity-50 [font-size:_clamp(2em,8vw,8em)]">
                    FEATURED PROJECTS
                  </p>
                  <div className="grid h-full w-full place-items-center gap-6 px-2 md:grid-cols-2 md:gap-[2rem] lg:grid-cols-4">
                    <div className="col-span-1 flex h-full w-full flex-col justify-between px-2 md:hidden">
                      <Parallax
                        speed={5}
                        className="flex h-full flex-col justify-between space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                      </Parallax>
                    </div>
                    <div className="md col-span-1 flex w-full flex-col justify-between md:hidden md:h-[60vh] lg:h-screen">
                      <Parallax
                        speed={5}
                        className="flex h-full flex-col justify-between space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                      </Parallax>
                    </div>
                    <div className="ol-span-1 md hidden w-full flex-col justify-between md:flex md:h-[60vh] lg:h-screen">
                      <Parallax
                        speed={5}
                        className="flex h-full flex-col justify-between space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                        {/*<div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                </div>*/}
                      </Parallax>
                    </div>
                    <div className="hidden w-full flex-col justify-between  md:h-[60vh] lg:flex lg:h-screen">
                      <Parallax
                        speed={-5}
                        className="relative flex h-full w-full flex-col justify-between space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>

                        {/*<div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                </div>*/}
                      </Parallax>
                    </div>
                    <div className="md col-span-1 hidden h-[20vh] w-full md:h-[60vh] lg:inline lg:h-screen">
                      <Parallax
                        speed={5}
                        className="flex h-full flex-col space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                        {/*<div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                </div>*/}
                      </Parallax>
                    </div>
                    <div className="md col-span-1 hidden h-[20vh] w-full md:inline md:h-[60vh] lg:h-screen">
                      <Parallax
                        speed={-5}
                        className="flex h-full flex-col justify-between space-y-2"
                      >
                        <div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                        </div>
                        {/*<div className="h-[50%]">
                          <div className="h-full w-full bg-white"></div>
                </div>*/}
                      </Parallax>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center"></div>
              </m.div>
              <m.div className="z-10 flex h-fit flex-col items-center justify-center bg-black">
                <div className="h-screen w-screen bg-black text-white [font-size:_clamp(2em,5vw,8em)]">
                  {/*content wrapper*/}
                  <div className="poppins hidden px-4 font-bold leading-[1rem] md:block md:leading-[2.5rem] lg:leading-[5rem]">
                    <div>
                      Hey my name is{" "}
                      <span className="underline decoration-red-500 decoration-2 underline-offset-4">
                        <a href="/about">Luis</a>
                      </span>
                      ,
                    </div>
                    <div>
                      I&apos;m a Web Developer{" "}
                      <span className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                        <a href="/#contact">ready for hire</a>
                      </span>
                      ,
                    </div>
                    <div>
                      with a focus on modern design and user experience.
                    </div>
                    <div>
                      I create visually appealing and functional{" "}
                      <span className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                        <a href="/work">websites</a>
                      </span>{" "}
                      that meet your unique needs.
                    </div>
                    <div className="text-black">What brings you here?</div>
                    <div className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                      <a href="/#contact">Let's Talk</a>
                    </div>
                  </div>
                  <div className="poppins px-4 font-bold md:hidden">
                    Hey my name is{" "}
                    <span className="underline decoration-red-500 decoration-2 underline-offset-4">
                      <a href="/about">Luis</a>,
                    </span>
                    I&apos;m a Web Developer{" "}
                    <span className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                      <a href="/#contact">ready for hire</a>
                    </span>
                    , with a focus on modern design and user experience. I
                    create visually appealing and functional{" "}
                    <span className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                      <a href="/work">websites</a>
                    </span>{" "}
                    that meet your unique needs.
                    <div className="underline decoration-red-500 decoration-2 underline-offset-4 hover:cursor-pointer">
                      <a href="/#contact">Let&apos;s Talk</a>
                    </div>
                  </div>
                </div>
                <div className="flex h-screen w-screen flex-col justify-between bg-black px-4">
                  <div></div>
                </div>
              </m.div>
            </m.div>
            <m.div
              animate={{ paddingTop: ["0vh", "2.5vh"] }}
              transition={{ delay: 4, duration: 2 }}
              className="absolute left-0 top-0 z-[600] flex h-screen w-screen items-center justify-center"
            >
              <m.div
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 2.5, duration: 1 }}
                className="flex h-full w-full flex-col items-center justify-center"
              >
                <m.div
                  initial={{ height: "10%" }}
                  animate={{
                    height: ["10%", "60%"],
                    width: ["10%", "60%"],
                    backgroundColor: ["#000", "#fff"],
                  }}
                  transition={{
                    times: [0.5, 0.8],
                    duration: 4,
                    delay: 2.5,
                  }}
                  className="h-full w-full"
                ></m.div>
              </m.div>
            </m.div>
          </div>
        </m.main>
      </AnimatePresence>
    </>
  );
}
