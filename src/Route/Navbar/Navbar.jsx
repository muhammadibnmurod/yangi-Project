import React, { useState } from "react";
import HeaderBackground from "../../assets/header-background.jpg";
import Logo from "../../assets/Logo.png";

function Navbar() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${HeaderBackground})` }}
    >
      <div className="flex items-center justify-between bg-white px-30 py-4 shadow-md content-center">
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" className="" />
          </a>
        </div>

        <div className="flex space-x-4 pr-4">
          {/* Dropdown 1 */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen1(true)}
            onMouseLeave={() => setIsDropdownOpen1(false)}
          >
            <button
              className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center pb-3 text-gray-500 hover:text-amber-300 uppercase"
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
              className={`absolute left-0 mt-0 w-55 z-50  ${
                isDropdownOpen1 ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 shadow w-44`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    slideshow fullscreen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    revolution fullscreen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    revolution simple
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
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
              className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center pb-3 text-gray-500 hover:text-amber-300 uppercase"
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
              className={`absolute left-0 mt-0 w-55 z-50  ${
                isDropdownOpen2 ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 shadow w-44`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    About us 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    about us 3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    services 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    service detail
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    shop single
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    shop card
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
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
              className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center pb-3 text-gray-500 hover:text-amber-300 uppercase` `"
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
              className={`absolute left-0 mt-0 w-55 z-50  ${
                isDropdownOpen3 ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 shadow w-44`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    icons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    buttons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    toggles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    typography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    galleries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    icon boxs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dropdown 4 */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen4(true)}
            onMouseLeave={() => setIsDropdownOpen4(false)}
          >
            <button
              className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center pb-3 text-gray-500 hover:text-amber-300 uppercase"
              type="button"
            >
              Portfolio
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
              className={`absolute left-0 mt-0 w-55 z-50  ${
                isDropdownOpen4 ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 shadow w-44`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    slideshow fullscreen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    revolution fullscreen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    revolution simple
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 flex flex-wrap hover:bg-gray-100 uppercase hover:text-amber-400"
                  >
                    one-page slidshow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
