import Link from "next/link";
import React from "react";

export default function AboutComponent() {
  return (
    <div className="flex h-fit min-h-screen w-screen flex-col items-center justify-end bg-black text-muted-foreground [font-size:_clamp(2em,5vw,8em)]">
      <div className="poppins hidden px-4 font-light leading-[1rem] md:block md:leading-[2.5rem] lg:leading-[5rem]">
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
        <div className="text-black">What brings you here?</div>
        <div className="text-white hover:cursor-pointer">
          <Link href="/#contact">Let&apos;s Talk</Link>
        </div>
      </div>
      <div className="poppins px-4 font-normal md:hidden">
        Hey my name is{" "}
        <span>
          <Link href="/about">Luis</Link>,
        </span>
        I&apos;m a Web Developer{" "}
        <span className=" hover:cursor-pointer">
          <Link href="/#contact">ready for hire</Link>
        </span>
        , with a focus on modern design and user experience. I create visually
        appealing and functional{" "}
        <span className=" hover:cursor-pointer">
          <Link href="/work">websites</Link>
        </span>{" "}
        that meet your unique needs.
        <div className=" hover:cursor-pointer">
          <Link href="/#contact">Let&apos;s Talk</Link>
        </div>
      </div>
    </div>
  );
}