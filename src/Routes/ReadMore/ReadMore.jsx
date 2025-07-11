import React from "react";

function ReadMore({ img, title, subtitle, buttonText }) {
  return (
    <div className="flex justify-center p-4">
  <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-2xl w-full max-w-sm shadow-md">
    <img
      src={img}
      alt="Preview"
      className="w-full h-[180px] sm:h-[220px] object-cover rounded-md"
    />
    <h1 className="text-[#252525] text-[16px] sm:text-[18px] mt-4 font-[Montserrat] font-medium">
      {title}
    </h1>
    <h2 className="text-[#777] font-[Lato] text-[14px] sm:text-[15px] mt-2 font-normal leading-relaxed text-center">
      {subtitle}
    </h2>
    <button className="bg-[#FFC926] hover:bg-[#d7be74] text-white text-sm sm:text-base mt-4 font-semibold py-2 px-6 rounded transition duration-300">
      {buttonText}
    </button>
  </div>
</div>

  );
}

export default ReadMore;
