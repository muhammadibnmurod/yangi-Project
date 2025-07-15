import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Routes/Header.jsx";
import Navbar from "./Routes/Navbar/Navbar.jsx";
import ReadMore from "./Routes/ReadMore/ReadMore.jsx";
import ReadMore1 from "../src/assets/ReadMore/ReadMore-1.jpg";
import ReadMore2 from "../src/assets/ReadMore/ReadMore-2.jpg";
import ReadMore3 from "../src/assets/ReadMore/ReadMore-3.jpg";
import ProjectComplate from "./Routes/Project-Complate/ProjectComplate.jsx";
import RecentWork from "./Routes/RecentWorkers/RecentWork.jsx";
import Offer from "./Routes/Offer/Offer.jsx";
import AboutUs from "./Routes/About-US/AboutUs.jsx";

import Logo from "./assets/Logo.png";
import Store1 from "./assets/store.svg";
import Store2 from "./assets/store-2.svg";
import storebacckground from "./assets/store-image.png";
import OurTeam from "./Routes/OurTeam/OurTeam.jsx";
import Freiends from "./Routes/Friends/Freiends.jsx";
import Footer from "./Routes/Footer/Footer.jsx";

const App = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [currentStore, setCurrentStore] = useState(Store1);

  const readMoreData = [
    {
      img: ReadMore1,
      title: "Construction Consultant",
      subtitle:
        "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget arcu.",
      buttonText: "READ MORE",
    },
    {
      img: ReadMore2,
      title: "Resconstruction Services",
      subtitle:
        "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget arcu.",
      buttonText: "READ MORE",
    },
    {
      img: ReadMore3,
      title: "Architectural Design",
      subtitle:
        "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.",
      buttonText: "READ MORE",
    },
  ];

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className="flex sticky top-0 z-50 items-center justify-between bg-white px-4 sm:px-10 md:px-20 lg:px-40 py-4 shadow-md">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 pr-2 sm:pr-4">
            {/* Dropdown 1 */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen1(true)}
              onMouseLeave={() => setIsDropdownOpen1(false)}
            >
              <button
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                type="button"
              >
                Home
                <svg className="w-2 h-2 ml-1" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-0 w-44 z-50 ${
                  isDropdownOpen1 ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 shadow`}
              >
                <ul className="py-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      slideshow fullscreen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      revolution fullscreen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      revolution simple
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      one-page slidshow
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dropdown 2 */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen2(true)}
              onMouseLeave={() => setIsDropdownOpen2(false)}
            >
              <button
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                type="button"
              >
                Pages
                <svg className="w-2 h-2 ml-1" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-0 w-44 z-50 ${
                  isDropdownOpen2 ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 shadow`}
              >
                <ul className="py-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      About us 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      about us 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      services 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      service detail
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      shop single
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      shop card
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      blog single
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dropdown 3 */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen3(true)}
              onMouseLeave={() => setIsDropdownOpen3(false)}
            >
              <button
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                type="button"
              >
                Elements
                <svg className="w-2 h-2 ml-1" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-0 w-44 z-50 ${
                  isDropdownOpen3 ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 shadow`}
              >
                <ul className="py-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      icons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      buttons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      toggles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      typography
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      galleries
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                    >
                      icon boxs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conditional Rendering for Portfolio, Blog, Contact, and Search */}
            {!isSearchOpen ? (
              <>
                {/* Dropdown 4 */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen4(true)}
                  onMouseLeave={() => setIsDropdownOpen4(false)}
                >
                  <button
                    className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                    type="button"
                  >
                    Portfolio
                    <svg
                      className="w-2 h-2 ml-1"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`absolute left-0 mt-0 w-44 z-50 ${
                      isDropdownOpen4 ? "block" : "hidden"
                    } bg-white divide-y divide-gray-100 shadow`}
                  >
                    <ul className="py-2 text-xs sm:text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                        >
                          slideshow fullscreen
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                        >
                          revolution fullscreen
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                        >
                          revolution simple
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 uppercase hover:text-amber-400"
                        >
                          one-page slidshow
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                  type="button"
                >
                  Blog
                </button>
                <button
                  className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                  type="button"
                >
                  Contact
                </button>
                <button
                  className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                >
                  Search
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M19 19L13.5 13.5M15 8.5C15 12.0899 12.0899 15 8.5 15C4.91015 15 2 12.0899 2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-lg text-xs sm:text-sm px-3 py-2 w-32 sm:w-48 border border-gray-300 focus:outline-none focus:border-amber-300"
                />
                <button
                  className="rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-2 text-gray-500 hover:text-amber-300 uppercase"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen5(true)}
              onMouseLeave={() => setIsDropdownOpen5(false)}
            >
              <button
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                type="button"
              >
                <img
                  src={currentStore}
                  alt="store"
                  onMouseEnter={() => setCurrentStore(Store2)}
                  onMouseLeave={() => setCurrentStore(Store1)}
                  className=""
                />
              </button>

              <div
                className={`absolute right-0 mt-0 w-44 z-50 bg-white ${
                  isDropdownOpen5 ? "block" : "hidden"
                }  divide-y divide-gray-100 shadow w-70 flex flex-wrap justify-between items-center`}
              >
                <ul className=" py-2 text-xs w-52 sm:text-sm text-gray-700">
                  <li className=" flex space-x-5 justify-center items-center">
                    <img
                      src={storebacckground}
                      className="w-15 h-15 ml-5"
                      alt=""
                    />
                    <div className="w-full">
                      <p className="text-gray-500 font-sans text-[16px] font-[500] cursor-pointer hover:text-amber-300">
                        Shop Item 01
                      </p>
                      <p>1 * $200</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Language Selector */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <button
                className="rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2.5 text-center inline-flex items-center text-gray-500 hover:text-amber-300 uppercase"
                type="button"
              >
                {currentLang}
                <svg className="w-2 h-2 ml-1" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`absolute right-0 mt-0 w-32 z-50 ${
                  isLangDropdownOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 shadow`}
              >
                <ul className="py-2 text-xs sm:text-sm text-gray-700">
                  {["EN", "UZ", "RU"].map((lang) => (
                    <li
                      key={lang}
                      onClick={() => setCurrentLang(lang)}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-amber-400"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Navbar className="w-full" />
        <div className="flex gap-5 justify-center p-12">
          {readMoreData.map((item, index) => (
            <ReadMore
              key={index}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              buttonText={item.buttonText}
            />
          ))}
        </div>
        <ProjectComplate />
        <RecentWork />
        <Offer />
        <AboutUs />
        <OurTeam />
        <Freiends />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
