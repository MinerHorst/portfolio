import React from "react";

export default function ServiceComponent() {
  return (
    <div
      style={{ boxShadow: "0 0 20px 30px rgba(0, 0, 0, 1)" }}
      className="relative z-[100] flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-black px-2 pt-[8vh] md:px-4"
    >
      <h2 className="sixcaps z-50 inline-flex w-full text-start leading-none text-muted-foreground [font-size:_clamp(5em,8vw,8em)]">
        SERVICES
      </h2>
      <div className="flex h-full w-full flex-col items-start justify-around">
        <div className="poppins text-white [font-size:_clamp(2em,3.5vw,8em)]">
          UI/UX Design
        </div>
        <div className="poppins text-white [font-size:_clamp(2em,3.5vw,8em)]">
          Motion Design
        </div>
        <div className="poppins text-white [font-size:_clamp(2em,3.5vw,8em)]">
          Web Development
        </div>
        <div className="poppins text-white [font-size:_clamp(2em,3.5vw,8em)]">
          Motion Design
        </div>
      </div>
    </div>
  );
}
