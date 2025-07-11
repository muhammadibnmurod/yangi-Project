import React, { useState, useEffect } from "react";
import HeaderBackground from "../../assets/header-background.jpg";
import folio1 from "../../assets/Folio/folio=1.svg"; // Adjusted import path
import folio2 from "../../assets/Folio/folio=2.svg";

function Navbar() {
  const [currentFolio, setCurrentFolio] = useState(folio1);
    const [isHovered, setIsHovered] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const headings = [
    "We are construction",
    "Build Smart Buildings",
    "Builder & Repair",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${HeaderBackground})` }}
    >
      
      <div className="flex flex-col items-center justify-center h-full bg-opacity-50">
        <div className="relative h-20 w-full overflow-hidden">
          {headings.map((heading, index) => (
            <h1
              key={index}
              className={`uppercase h-full text-white text-center shadow-md font-sans text-[36px] sm:text-[52px] font-[500] absolute w-full transition-transform duration-1000 ease-in-out ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {heading}
            </h1>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="uppercase text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-lg">
            Learn more
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
      <a
        href="#"
        className={`uppercase transition-all duration-300 ${
          isHovered ? "text-amber-500" : "text-white"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Our Folio
      </a>

      <img
        src={currentFolio}
        alt="Folio"
        onMouseEnter={() => {
          setIsHovered(true);
          setCurrentFolio(folio2);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentFolio(folio1);
        }}
        className="transition-all duration-300"
      />
    </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
