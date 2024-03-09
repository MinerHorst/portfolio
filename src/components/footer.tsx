import React from "react";

export default function FooterComponent() {
  return (
    <div className="relative z-[100] flex h-screen w-screen flex-col justify-end bg-black">
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
              <a href="mailto:business@luiskessler.com">
                business@luiskessler.com
              </a>
            </li>
            <li className="flex flex-col">
              <span>For general inquiries:</span>
              <a href="mailto:hi@luiskessler.com">hi@luiskessler.com</a>
            </li>
            <li>
              <a href="https://linktr.ee/luiskessler">Linktree</a>
            </li>
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
  );
}
