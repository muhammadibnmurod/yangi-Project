import React, { useState } from "react";
import Person from "../../assets/person.png";
import {
  svg1,
  svg11,
  svg2,
  svg21,
  svg3,
  svg31,
  svg4,
  svg41,
  svg5,
  svg51,
  svg6,
  svg61,
  svg7,
  svg71,
  svg8,
  svg81,
  svg9,
  svg91,
  svg10,
  svg101,
} from "../../assets";

function Offer() {
  const [isHovered, setIsHovered] = useState(null);
  const [isHoveredText, setIsHoveredText] = useState(null);

  const items = [
    { imgDefault: svg1, imgHover: svg11, title: "Construction" },
    { imgDefault: svg2, imgHover: svg21, title: "Renovation" },
    { imgDefault: svg3, imgHover: svg31, title: "Consulting" },
    { imgDefault: svg4, imgHover: svg41, title: "Construct" },
    { imgDefault: svg5, imgHover: svg51, title: "Architecture" },
    { imgDefault: svg6, imgHover: svg61, title: "Electrical" },
  ];

  const items1 = [
    {
      imgDefault: svg71,
      imgHover: svg7,
      title: "Prepairs Services",
      subtitle:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      imgDefault: svg81,
      imgHover: svg8,
      title: "Wall Painting",
      subtitle:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      imgDefault: svg91,
      imgHover: svg9,
      title: "Creative Plumbing",
      subtitle:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      imgDefault: svg101,
      imgHover: svg10,
      title: "Metal Roofing",
      subtitle:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
  ];

  return (
    <div className=" px-4 bg-cover bg-center flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#252525]">What we offer</h1>
      <div className="mt-2 w-16 h-1 bg-[#FFC926] rounded"></div>

      {/* Subtext */}
      <h3 className="py-6 max-w-xl text-[#777] font-[Lato] text-[16px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
        amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh massa
        varius.
      </h3>

      {/* Ikonkalar bloki */}
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-40 sm:w-48 h-auto p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="p-4 rounded-full">
              <img
                alt={item.title}
                src={isHovered === index ? item.imgHover : item.imgDefault}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="mt-4 text-[#252525] font-semibold hover:text-amber-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12 w-full max-w-6xl">
        {/* Text qismi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 self-center">
          {items1.map((item1, index1) => (
            <div key={index1} className="flex items-start gap-4 max-w-md">
              {/* Icon */}
              <div
                className={`w-20 h-16 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isHoveredText === index1
                    ? "border-2 border-[#FFC926]"
                    : "border-2 border-[#FFC926] bg-[#FFC926] "
                }`}
                onMouseEnter={() => setIsHoveredText(index1)}
                onMouseLeave={() => setIsHoveredText(null)}
              >
                <img
                  src={
                    isHoveredText === index1 ? item1.imgDefault : item1.imgHover
                  }
                  alt={item1.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Text */}
              <div className="text-left w-full">
                <h3 className=" hover:cursor-pointer text-lg font-semibold text-[#252525] hover:text-[#FFC926] transition duration-200">
                  {item1.title}
                </h3>
                <p className="text-[#777] text-sm mt-1">{item1.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/4 flex justify-center items-center">
          <img
            src={Person}
            alt="Person"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="w-full bg-amber-400 py-6 px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 max-w-7xl mx-auto">
          <h2 className="text-white font-[Montserrat] text-[18px] md:text-[20px] font-medium text-center md:text-left">
            Contractors & Construction Managers Since 1981
          </h2>
          <button className="uppercase px-8 py-3 bg-white text-black rounded-sm hover:bg-black hover:text-white transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
