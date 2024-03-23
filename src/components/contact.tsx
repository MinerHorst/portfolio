import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";

export default function ContactComponent() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRecommendation, setSelectedRecommendation] = useState("");

  function handleContactSubmit(e: any) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="relative z-[100] grid h-fit w-screen bg-black text-white">
      <div className="flex h-fit flex-col justify-between space-y-4 px-4">
        <p className="sixcaps w-full leading-none [font-size:_clamp(2em,8vw,8em)]">
          CONTACT
        </p>
        <form
          onSubmit={(e) => handleContactSubmit(e)}
          className="poppins flex h-fit flex-col gap-3 space-y-10"
        >
          <h2>Your contact details and some info about your project</h2>

          <div className="flex w-full gap-4">
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="name"
                placeholder="Full Name"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="tel"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="company"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between">
            <input
              className="border-b bg-transparent outline-none ring-transparent"
              id="projectinfo"
              placeholder="Tell us something about your project."
            />
          </div>

          <div className="flex flex-col gap-4">
            <p>My budget is around</p>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={(e) => setSelectedPrice("<1K")}
                className="h-[3rem] w-fit rounded-full border px-8 focus:bg-white focus:text-black"
              >
                {"<"}1K€
              </button>
              <button
                type="button"
                onClick={(e) => setSelectedPrice("1K-2K€")}
                className="h-[3rem] w-fit rounded-full border px-8 focus:bg-white focus:text-black"
              >
                1K-2K€
              </button>
              <button
                type="button"
                onClick={(e) => setSelectedPrice("2K-2K€")}
                className="h-[3rem] w-fit rounded-full border px-8 focus:bg-white focus:text-black"
              >
                2K-5K€
              </button>
              <button
                type="button"
                onClick={(e) => setSelectedPrice("5K-10K€")}
                className="h-[3rem] w-fit rounded-full border px-8 focus:bg-white focus:text-black"
              >
                5K-10K€
              </button>
              <button
                type="button"
                onClick={(e) => setSelectedPrice("Unsure")}
                className="h-[3rem] w-fit rounded-full border px-8 focus:bg-white focus:text-black"
              >
                Not sure
              </button>
            </div>
          </div>

          <div className="items-justify flex h-fit gap-4">
            <div className="flex flex-col gap-4">
              <p>
                Alternatively contact{" "}
                <a href="mailto:business@lullabydesign.com">
                  business@lullabydesign.com
                </a>
              </p>
              <div className="flex gap-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none underline peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <a href="/terms">Accept terms and conditions</a>
                </label>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="h-full w-[7rem] rounded-md border bg-white text-black"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
