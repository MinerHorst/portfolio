import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit, reset] = useForm("{mzbnaqvp}");
  return (
    <div className="relative z-[100] grid h-fit w-screen bg-black text-white">
      <div className="flex h-fit flex-col justify-between space-y-4 px-4">
        <p className="sixcaps w-full leading-none [font-size:_clamp(2em,8vw,8em)]">
          CONTACT
        </p>
        <form
          action={"https://formspree.io/f/mzbnaqvp"}
          method="POST"
          className="poppins flex h-fit flex-col gap-3 space-y-10"
        >
          <h2>Your contact details and some info about your project</h2>

          <div className="flex w-full gap-4">
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="name"
                name="name"
                placeholder="Full Name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="company"
                name="company"
                placeholder="Company Name"
              />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between">
            <input
              className="border-b bg-transparent outline-none ring-transparent"
              id="projectinfo"
              name="projectInfo"
              placeholder="Tell us something about your project."
            />
            <ValidationError
              prefix="Projectinfo"
              field="projectinfo"
              errors={state.errors}
            />
          </div>
          <div className="flex w-full flex-col justify-between space-y-4">
            <p>My budget is around</p>
            <div className="flex justify-between">
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-8 text-white">
                <input type="radio" name="budget" value="<1K" />
                {"<"}1K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-8 text-white">
                <input type="radio" name="budget" value="1K-2K€" />
                1K-2K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-8 text-white">
                <input type="radio" name="budget" value="2K-5K€" />
                2K-5K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-8 text-white">
                <input type="radio" name="budget" value="5K-10K€" />
                5K-10K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-8 text-white">
                <input type="radio" name="budget" value="Unsure" />
                Not sure
              </label>
              <ValidationError
                prefix="Budget"
                field="budget"
                errors={state.errors}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="h-[3rem] w-fit rounded-full border bg-white px-8 text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ContactComponent() {
  return <Form />;
}
