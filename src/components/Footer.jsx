import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat font-protest"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/baroque-style-with-fruits-cloth-arrangement_23-2149629939.jpg?size=626&ext=jpg&ga=GA1.1.402271208.1705836771&semt=ais")',
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" py-8 lg:order-last  lg:py-16 lg:ps-16">
            <div className="space-y-4 lg:mt-0">
              <div>
                <h2 className="text-2xl font-medium  text-white">
                  Request a Demo
                </h2>

                <p className="mt-4 max-w-lg text-sm  text-white">
                  Lorem ipsum dolor sit a adipisicing elit. Veritaeius numquam
                  doloribus asperiores sunt.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="rounded-md border border-white flex items-center">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none px-4 py-2 focus:outline-none text-sm"
                  />
                  <button className=" bg-lime-400 px-6 py-2 text-sm font-bold uppercase text-white transition hover:bg-lime-600 ">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className=" grid grid-cols-1 gap-8 sm:grid-cols-3 ">
              <div>
                <p className="font-medium text-lg text-white">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-lime-400 transition hover:opacity-75 "
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lime-400 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lime-400 transition hover:opacity-75"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-lg text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-lg text-white">Helpful as</p>

                <ul className="mt-6 space-y-4 text-sm ">
                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75 "
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" text-lime-400 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pb-10">
          <p className="mt-8 text-base text-white mb-4 sm:mb-0">
            &copy; {currentYear}. Company
            <span className="text-lime-400"> GreenGroove </span> All rights
            reserved.
          </p>
          <div className="flex text-lime-400 gap-4">
            <a href="https://www.instagram.com/dusyant1506/">
              <PiInstagramLogoFill
                size={30}
                className="hover:text-lime-600 cursor-pointer"
              />
            </a>
            <a href="https://twitter.com/?lang=en">
              <FaXTwitter
                size={30}
                className="hover:text-lime-600 cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook
                size={30}
                className="hover:text-lime-600 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
