import React from "react";
import Richard from "../../assets/Worker/Richard.jpg";
import Sarah from "../../assets/Worker/Sarah.jpg";
import John from "../../assets/Worker/John.jpg";

const Worker = [
  {
    img: Richard,
    name: "Richard Wagner",
    type: "Civil Engineer",
  },
  {
    img: Sarah,
    name: "Sarah Spence",
    type: "Construction Assistant",
  },
  {
    img: John,
    name: "Jogn Helpern",
    type: "COnstruction Manager",
  },
];

function OurTeam() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 md:px-8">
      {/* Title */}
      <h1 className="pt-16 md:pt-20 text-2xl md:text-3xl font-bold text-[#252525] uppercase">
        our team
      </h1>
      <div className="mt-2 w-16 h-1 bg-[#FFC926] rounded"></div>

      {/* Subtext */}
      <h3 className="py-4 md:py-6 max-w-xl text-[#777] font-[Lato] text-[14px] md:text-[16px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
        amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh massa
        varius.
      </h3>

      {/* Worker Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 w-full max-w-6xl">
        {Worker.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-full mb-4 shadow-md"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
