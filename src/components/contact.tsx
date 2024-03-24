import React, { useState, FormEvent, useRef, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export const Form = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Getting all input elements within the form
    const inputs = form.current?.querySelectorAll<HTMLInputElement>("input");

    // Checking if any input field is empty
    if (inputs) {
      let isEmpty = false;
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isEmpty = true;
        }
      });

      // If any input field is empty, display an error toast and return
      if (isEmpty) {
        toast({
          title: "Error",
          description: "Please fill out all fields.",
        });
        return;
      }
    }

    if (form.current) {
      emailjs
        .sendForm("service_4yyd8rc", "template_1g2mtae", form.current, {
          publicKey: "JyPL6wojPntUbcVj6",
        })

        .then(
          () => {
            if (inputs) {
              inputs.forEach((input) => {
                input.value = "";
              });
            }

            toast({
              title: "Message sent!",
              description: "The message has been successfully sent. Thank you!",
            });
          },
          (error) => {
            console.log("FAILED...");
          },
        );
    } else {
      console.error("Form ref is null");
    }
  };

  return (
    <div
      className="relative z-[100] grid h-fit w-screen bg-black py-[8vh] text-white"
      id="contact"
    >
      <div className="max-w-screen flex h-fit flex-col justify-between space-y-4">
        <p className="sixcaps w-full px-2 leading-none [font-size:_clamp(5em,8vw,8em)] md:px-4">
          CONTACT
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="poppins flex h-fit flex-col gap-3 space-y-10"
        >
          <h2 className="px-2 md:px-4">
            Your contact details and some info about your project
          </h2>

          <div className="hidden w-screen gap-4 px-2 md:px-4 lg:flex">
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="name"
                name="name"
                content="name"
                placeholder="Full Name"
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
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="company"
                name="company"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 px-2 md:px-4 lg:hidden">
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="name"
                name="name"
                content="name"
                placeholder="Full Name"
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
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="company"
                name="company"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="hidden w-full flex-col justify-between px-2 md:flex md:px-4">
            <input
              className="border-b bg-transparent outline-none ring-transparent"
              id="projectinfo"
              name="projectinfo"
              placeholder="Tell us something about your project."
            />
          </div>
          <div className="flex w-full flex-col justify-between px-2 md:hidden md:px-4">
            <input
              className="border-b bg-transparent outline-none ring-transparent"
              id="projectinfo"
              name="projectinfo"
              placeholder="What do you need?"
            />
          </div>
          <div className="hidden flex-col justify-between space-y-4 px-2 md:flex md:px-4">
            <p>My budget is around</p>
            <div className="flex justify-between gap-3">
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border text-white md:px-6">
                <input type="radio" name="budget" value="<1K" />
                {"<"}1K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-6 text-white">
                <input type="radio" name="budget" value="1K-2K€" />
                1K-2K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-6 text-white">
                <input type="radio" name="budget" value="2K-5K€" />
                2K-5K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-6 text-white">
                <input type="radio" name="budget" value="5K-10K€" />
                5K-10K€
              </label>
              <label className="flex h-[3rem] w-fit items-center justify-center gap-2 rounded-full border px-6 text-white">
                <input type="radio" name="budget" value="Unsure" />
                Not sure
              </label>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <button
              type="submit"
              className="h-[3rem] w-fit rounded-full border bg-white px-8 text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function ContactComponent() {
  return <Form />;
}
