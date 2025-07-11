import React, { useState } from "react";
import {
  svg1, svg11,
  svg2, svg21,
  svg3, svg31,
  svg4, svg41,
  svg5, svg51,
  svg6, svg61,
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
      imgDefault: svg1,
      imgHover: svg11,
      title: "Prepairs Services",
    },
    {
      imgDefault: svg2,
      imgHover: svg21,
      title: "Wall Painting",
    },
    {
      imgDefault: svg3,
      imgHover: svg31,
      title: "Creative Plumbing",
    },
    {
      imgDefault: svg4,
      imgHover: svg41,
      title: "Metal Roofing",
    },
  ];

  return (
    <div className="py-10 px-4 bg-cover bg-center flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#252525]">What we offer</h1>
      <div className="mt-2 w-16 h-1 bg-[#FFC926] rounded"></div>

      {/* Subtext */}
      <h3 className="py-6 max-w-xl text-[#777] font-[Lato] text-[16px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
        amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh
        massa varius.
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

      {/* Text + Icon Row Like Image */}
      <div className="flex flex-wrap justify-start items-start gap-8 mt-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {items1.map((item1, index1) => (
            <div
              key={index1}
              className="flex items-start gap-4 max-w-md"
              onMouseEnter={() => setIsHoveredText(index1)}
              onMouseLeave={() => setIsHoveredText(false)}
            >
              {/* Icon */}
              <div
                className={`w-30 h-16 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isHoveredText === index1
                    ? "bg-[#FFC926]"
                    : "border-2 border-[#FFC926]"
                }`}
              >
                <img
                  src={
                    isHoveredText === index1
                      ? item1.imgHover
                      : item1.imgDefault
                  }
                  alt={item1.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#252525] hover:text-[#FFC926] transition duration-200">
                  {item1.title}
                </h3>
                <p className="text-[#777] text-sm mt-1">
                  Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
                  sodales quam id lorem lobortis, vitae interdum nisl.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offer;
