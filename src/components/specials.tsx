import React from "react";

export default function SpecialOffersComponent() {
  return (
    <div
      id="specials"
      className="relative z-[100] flex h-screen w-screen flex-col space-y-4 bg-black px-2 md:items-center md:px-4 lg:justify-center"
    >
      <h2 className="sixcaps z-50 inline-flex w-full text-start leading-none text-muted-foreground [font-size:_clamp(5em,8vw,8em)]">
        ONE LAST QUESTION
      </h2>
      <div className="flex h-full flex-col justify-around">
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
            Non-Profit?
          </div>
          <div className="inline md:hidden">
            <p className="text-muted-foreground">
              We might create a stunning{" "}
              <span className="text-white">website for free!</span> Limited
              slots available due to time constraints, but all{" "}
              <span className="text-white">free for you.</span>
            </p>
          </div>
          <div className="montserrat hidden w-full text-muted-foreground md:inline">
            If you are a non-profit ask away and maybe we&apos;ll create you a
            stunning{" "}
            <span className="text-white decoration-2 underline-offset-4">
              website for free
            </span>
            . As there still needs to be time for dance we can only fit in a few
            non-profits per year, but that means its all free for you.
          </div>
          <li className="poppins flex flex-col underline">
            <span>business@lullabydesign.com</span>
          </li>
        </div>
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
            Small Business?
          </div>
          <div className="inline md:hidden">
            <p className="text-muted-foreground">
              We offer top-notch website services at a{" "}
              <span className="text-white">heavily discounted price</span>,
              allowing you to focus your energy and resources on delivering
              quality goods.
            </p>
          </div>
          <div className="montserrat hidden text-muted-foreground md:inline ">
            We strive to give the small businesses a chance at getting a top
            notch website. Hence we are offering our service at a{" "}
            <span className="text-white decoration-2 underline-offset-4">
              heavily discounted price
            </span>{" "}
            so you can focus all your energy and ressources on delivering your
            quality goods.
          </div>
          <li className="poppins flex flex-col underline">
            <span>business@lullabydesign.com</span>
          </li>
        </div>
      </div>
    </div>
  );
}
