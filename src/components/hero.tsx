import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function AboutComponent() {
  return (
    <div className="flex h-fit min-h-screen w-screen flex-col items-center justify-start bg-black pt-[10vh] text-muted-foreground [font-size:_clamp(1.5em,5vw,8em)] md:pt-[10vh] lg:min-h-screen lg:pt-[8vh]">
      <div className="poppins flex h-full flex-col justify-between px-2 font-light leading-[2rem] md:block md:px-4 md:leading-[3rem] lg:leading-[4rem]">
        <div className="h-full">
          <div>
            Hey we are{" "}
            <span className="text-white">
              <Link href="/about">Lullaby Design</Link>
            </span>
            ,
          </div>
          <div>
            A Design Studio{" "}
            <span className="text-white  hover:cursor-pointer">
              <Link href="/#contact">ready for hire</Link>
            </span>
            ,
          </div>
          <div>with a focus on modern design and user experience.</div>
          <div>
            We create visually appealing and functional{" "}
            <span className="text-white  hover:cursor-pointer">
              <Link href="/work">websites</Link>
            </span>{" "}
            that meet your unique needs.
          </div>
        </div>

        <div className="hidden text-black md:inline">What brings you here?</div>
        <div className="text-white hover:cursor-pointer">
          <Link href="/#contact">Let&apos;s Talk</Link>
        </div>
      </div>
    </div>
  );
}
