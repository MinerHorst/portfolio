import React, { useState, FormEvent } from "react";
import { Checkbox } from "./ui/checkbox";
import { sendEmail } from "~/utils/sendEmail";

export default function ContactComponent() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRecommendation, setSelectedRecommendation] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectInfo: "",
    pricing: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(
      formData.name,
      formData.email,
      formData.company,
      formData.phone,
      formData.projectInfo,
      selectedPrice,
    );
    e.preventDefault();
    try {
      await sendEmail({
        to: "lupe_one@icloud.com", // Replace with recipient email address
        subject: "Contact Form Submission",
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProject Info: ${formData.projectInfo}\nPricing: ${selectedPrice}`,
      });
      console.log("Email sent successfully");
      // Add any additional logic after email is successfully sent
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error
    }
  };
  return (
    <div className="relative z-[100] grid h-fit w-screen bg-black text-white">
      <div className="flex h-fit flex-col justify-between space-y-4 px-4">
        <p className="sixcaps w-full leading-none [font-size:_clamp(2em,8vw,8em)]">
          CONTACT
        </p>
        <form
          onSubmit={handleContactSubmit}
          className="poppins flex h-fit flex-col gap-3 space-y-10"
        >
          <h2>Your contact details and some info about your project</h2>

          <div className="flex w-full gap-4">
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="flex w-full flex-col justify-between">
              <input
                className="border-b bg-transparent outline-none ring-transparent"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between">
            <input
              className="border-b bg-transparent outline-none ring-transparent"
              id="projectinfo"
              name="projectInfo"
              value={formData.projectInfo}
              onChange={handleChange}
              placeholder="Tell us something about your project."
            />
          </div>

          <div className="flex w-full flex-col justify-between space-y-4">
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

          {/* Remainder of your form */}

          <button
            type="submit"
            className="h-[3rem] w-fit rounded-full border bg-white px-8 text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
