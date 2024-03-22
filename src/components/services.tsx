import React from "react";

export default function ServiceComponent() {
  return (
    <div className="relative z-[100] flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-black px-4">
      <h2 className="sixcaps z-50 inline-flex w-full text-start leading-none text-muted-foreground [font-size:_clamp(2em,8vw,8em)]">
        SERVICES
      </h2>
      <div className="flex">
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,3.5vw,8em)]">
            Design & Development
          </div>
          <div className="montserrat w-[80%] text-muted-foreground">
            I'll design and develop a stunning website with a focus on
            attracting new clients or bringing your messages across.
          </div>
        </div>
        <div className="space-y-4">
          <div className="poppins text-white [font-size:_clamp(2em,5.5vw,8em)]">
            Small Business?
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
