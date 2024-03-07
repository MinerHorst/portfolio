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
import Navbar from "~/components/Navbar";

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
            <m.div className="relative flex h-fit w-screen flex-col overflow-x-hidden text-white">
              <div className="flex h-screen w-screen flex-col">
                <div className="montserrat fixed top-0 z-[200] flex h-[10vh] w-full items-center justify-between bg-black px-3 md:px-10">
                  <p className="text-lg">
                    <span className="poppins">Luis</span>
                    <span className="playfair italic">Keßler</span>
                  </p>
                  <p className="hidden md:inline">
                    <span className="text-muted-foreground">Projects, </span>
                    <span className="text-muted-foreground">About, </span>
                    <span className="text-muted-foreground">Specials, </span>
                    <span className="text-muted-foreground">Contact</span>
                  </p>

                  <div className="hidden underline md:inline">
                    <Navbar />
                  </div>
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
                className="top-0 flex h-fit flex-col items-center justify-center border bg-black text-white"
              >
                <div className="relative flex h-fit w-full flex-col items-center space-y-4">
                  <p className="sixcaps z-50 text-white [font-size:_clamp(2em,8vw,8em)]">
                    FEATURED PROJECTS
                  </p>
                  <div className="grid h-fit w-full place-items-center gap-6 px-2 md:grid-cols-2 md:gap-[2rem] lg:grid-cols-4">
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
              <m.div className="z-10 flex h-fit flex-col  bg-black">
                <div className="flex h-fit w-screen flex-col items-center bg-black pb-10 text-white [font-size:_clamp(2em,5vw,8em)]">
                  {/*content wrapper*/}
                  <p className="sixcaps z-50 text-white [font-size:_clamp(2em,8vw,8em)]">
                    About
                  </p>
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
                <div className="h-[50vh] w-full bg-white"></div>
                <div className="relative flex h-[50vh] w-screen justify-between bg-black px-4">
                  <m.div
                    whileInView={{ x: ["0%", "-101%"] }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-0 h-screen w-[50%] bg-white"
                  ></m.div>
                  <m.div
                    whileInView={{ x: ["0%", "+100%"] }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-0 h-screen w-[50%] bg-white"
                  ></m.div>
                  <div className="space-y-4">
                    <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
                      Non-Profit?
                    </div>
                    <div className="montserrat w-[80%]">
                      If you are a non-profit ask away and maybe I'll create you
                      a stunning website for free. As there still needs to be
                      time for dance I can only fit in a few non-profits per
                      year, but that means its all free for you.
                    </div>
                    <li className="poppins flex flex-col underline">
                      <span>business@luiskessler.com</span>
                    </li>
                  </div>
                  <div className="space-y-4">
                    <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
                      Local Store?
                    </div>
                    <div className="montserrat">
                      We strive to give the small businesses a chance at getting
                      a top notch website. Hence we are offering our services at
                      a heavily discounted price so you can focus all your
                      energy and ressources on delivering your quality goods.
                    </div>
                    <li className="poppins flex flex-col underline">
                      <span>business@luiskessler.com</span>
                    </li>
                  </div>
                </div>
                <div className="grid h-[60vh] w-screen grid-cols-2 grid-rows-2 border bg-black">
                  <div className="col-span-1 row-span-1 border"></div>
                  <div className="col-span-1 row-span-1 border"></div>
                  <div className="col-span-1 row-span-1 border"></div>
                  <div className="col-span-1 row-span-1 border"></div>
                </div>
                <div className="flex h-[90vh] w-screen flex-col justify-end bg-black">
                  <div className="grid h-[40vh] grid-cols-4 border-t p-4">
                    <p className="col-span-1 text-lg">
                      <span className="poppins">Luis</span>
                      <span className="playfair italic">Keßler</span>
                    </p>
                    <div className="col-span-1 h-full w-full">
                      <ul className="poppins flex h-full w-full flex-col justify-between text-lg">
                        <li>Index</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Specials</li>
                      </ul>
                    </div>

                    <div className="col-span-1 col-start-4 h-full w-full">
                      <ul className="poppins flex h-full w-full flex-col justify-between">
                        <li>+49 163 0813520</li>
                        <li className="flex flex-col">
                          <span>For business inquiries:</span>
                          <span>business@luiskessler.com</span>
                        </li>
                        <li className="flex flex-col">
                          <span>For general inquiries:</span>
                          <span>hi@luiskessler.com</span>
                        </li>
                        <li>Socials</li>
                      </ul>
                    </div>
                  </div>
                  <div className="h-[25vh] overflow-hidden">
                    <div className="margin-top:-23px w-full">
                      <div className="mt-[23px] h-[0] bg-white"></div>
                      <div className="mt-[22px] h-[1px] bg-white"></div>
                      <div className="mt-[21px] h-[2px] bg-white"></div>
                      <div className="mt-[20px] h-[3px] bg-white"></div>
                      <div className="mt-[19px] h-[4px] bg-white"></div>
                      <div className="mt-[18px] h-[5px] bg-white"></div>
                      <div className="mt-[17px] h-[6px] bg-white"></div>
                      <div className="mt-[16px] h-[7px] bg-white"></div>
                      <div className="mt-[15px] h-[8px] bg-white"></div>
                      <div className="mt-[14px] h-[9px] bg-white"></div>
                      <div className="mt-[13px] h-[10px] bg-white"></div>
                      <div className="mt-[12px] h-[11px] bg-white"></div>
                      <div className="mt-[11px] h-[12px] bg-white"></div>
                      <div className="mt-[10px] h-[13px] bg-white"></div>
                      <div className="mt-[9px] h-[14px] bg-white"></div>
                      <div className="mt-[8px] h-[15px] bg-white"></div>
                      <div className="mt-[7px] h-[16px] bg-white"></div>
                      <div className="mt-[6px] h-[17px] bg-white"></div>
                      <div className="mt-[5px] h-[18px] bg-white"></div>
                      <div className="mt-[4px] h-[19px] bg-white"></div>
                      <div className="mt-[3px] h-[20px] bg-white"></div>
                      <div className="mt-[2px] h-[21px] bg-white"></div>
                      <div className="mt-[1px] h-[22px] bg-white"></div>
                      <div className="mt-[0px]h-[23px]  bg-white"></div>
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
            <m.div
              animate={{ zIndex: [600, 60] }}
              transition={{ delay: 5, duration: 2 }}
              className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center"
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
