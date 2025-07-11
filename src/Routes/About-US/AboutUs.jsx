import React from "react";
import Worker from "../../assets/worker.jpg"; 
import WorkerWoman from '../../assets/workerwoman.jpg';
import WorkerMan from '../../assets/workerman.jpg';

const testimonials = [
  {
    name: "Georgia Slows",
    role: "Builder Manager",
    image: Worker,
    quote:
      "Vestibulum eu libero volutpat, portas quamacc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.",
  },
  {
    name: "John Smith",
    role: "Project Supervisor",
    image: WorkerWoman,
    quote:
      "Vestibulum eu libero volutpat, portas quamacc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.",
  },
  {
    name: "John Smith",
    role: "Project Supervisor",
    image: WorkerMan,
    quote:
      "Vestibulum eu libero volutpat, portas quamacc, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas. Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.",
  },
];

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h1 className="pt-20 text-3xl font-bold text-[#252525]">
        What others say about us
      </h1>
      <div className="mt-2 w-16 h-1 bg-[#FFC926] rounded"></div>

      {/* Subtext */}
      <h3 className="py-6 max-w-xl text-[#777] font-[Lato] text-[16px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
        amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh massa
        varius.
      </h3>

      {/* ✅ To‘g‘ri joylashtirilgan testimonials qismi */}
      <div className="flex flex-wrap justify-center items-start gap-6 py-10 w-full px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 w-full sm:w-[45%] lg:w-[30%] rounded-lg shadow-md pt-20 pb-10 px-6 relative"
          >
            {/* Worker image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2"
            />

            {/* Quote text */}
            <p className="text-gray-700 text-[15px] leading-relaxed">
              "{item.quote}"
            </p>

            {/* Author info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#252525]">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
