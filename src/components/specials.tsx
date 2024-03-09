import React from "react";

export default function SpecialOffersComponent() {
  return (
    <div className="relative z-[100] flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-black px-4">
      <h2 className="sixcaps z-50 inline-flex w-full text-start leading-none text-muted-foreground [font-size:_clamp(2em,8vw,8em)]">
        ONE LAST QUESTION
      </h2>
      <div className="flex">
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
            Non-Profit?
          </div>
          <div className="montserrat w-[80%] text-muted-foreground">
            If you are a non-profit ask away and maybe I'll create you a
            stunning{" "}
            <span className="text-white decoration-2 underline-offset-4">
              website for free
            </span>
            . As there still needs to be time for dance I can only fit in a few
            non-profits per year, but that means its all free for you.
          </div>
          <li className="poppins flex flex-col underline">
            <span>business@luiskessler.com</span>
          </li>
        </div>
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
            Local Store?
          </div>
          <div className="montserrat text-muted-foreground ">
            I strive to give the small businesses a chance at getting a top
            notch website. Hence I am offering my service at a{" "}
            <span className="text-white decoration-2 underline-offset-4">
              heavily discounted price
            </span>{" "}
            so you can focus all your energy and ressources on delivering your
            quality goods.
          </div>
          <li className="poppins flex flex-col underline">
            <span>business@luiskessler.com</span>
          </li>
        </div>
      </div>
    </div>
  );
}
