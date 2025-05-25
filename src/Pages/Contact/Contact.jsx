import React, { useEffect, useState } from "react";
import Cover from "../Shared/Cover/Cover";
import contact from "../../assets/contact/banner.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation()
  const [captcha, setCaptcha] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleCaptcha = (value) => {
    setCaptcha(value);
    setDisabled(!value);
  };

  const handleContactFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log({ name, phone, email, message });
  };

  useEffect(() => {
    document.title = "Bistro Boss | Contact";
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <Cover
        img={contact}
        title={"Contact Us"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"Our Location"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-0">
          <div className="border">
            <div className="w-full bg-[#D1A054]">
              <h1 className="p-4 text-white flex justify-center">
                <BiSolidPhoneCall className="w-8 h-8" />
              </h1>
            </div>
            <div className="px-4 pb-4 ">
              <div className="flex flex-col items-center p-10 min-h-44 bg-[#E8E8E8]">
                <p className="uppercase text-xl font-semibold mb-3">Phone</p>
                <p>+74939503176</p>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="w-full bg-[#D1A054]">
              <h1 className="p-4 text-white flex justify-center">
                <IoLocationSharp className="w-8 h-8" />
              </h1>
            </div>
            <div className="px-4 pb-4">
              <div className="w-full flex flex-col items-center min-h-44 p-10 bg-[#E8E8E8]">
                <p className="uppercase text-xl font-semibold mb-3">Address</p>
                <p>New Yourk, 4 street</p>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="w-full bg-[#D1A054]">
              <h1 className="p-4 text-white flex justify-center">
                <HiClock className="w-8 h-8" />
              </h1>
            </div>
            <div className="px-4 pb-4">
              <div className="w-full flex flex-col items-center min-h-44 p-10 bg-[#E8E8E8]">
                <p className="uppercase text-xl font-semibold mb-3">
                  Working Hour
                </p>
                <p>Mon - Fri: 9.00 - 22.00</p>
                <p>Sat - Sun: 10.00 - 23.00</p>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle
          subHeading={"Send Us Message"}
          heading={"Contact From"}
        ></SectionTitle>
      </div>
      {/* contact from */}
      <section className="p-6 my-10 dark:text-gray-800">
        <form
          onSubmit={handleContactFrom}
          className="container w-full max-w-4xl p-4 md:p-20 mx-auto bg-[#F3F3F3] space-y-6 shadow dark:bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required=""
                className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 ml-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Your phone number"
                required=""
                className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Message..."
              className="block w-full h-40 border-2 p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
            <div className="mt-6">
              <ReCAPTCHA
                sitekey="6Lc0-0UrAAAAACYhXNtR4F8desM2K7ayEdCZSqRq"
                onChange={handleCaptcha}
              ></ReCAPTCHA>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`flex items-center px-6 py-2 text-center rounded-sm text-white ${
                disabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#835D23] to-[#B58130] dark:text-gray-50 dark:bg-violet-600"
              }`}
            >
              Send Message
              <span>
                <BiLogoTelegram className="w-5 h-5 ml-2" />
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
