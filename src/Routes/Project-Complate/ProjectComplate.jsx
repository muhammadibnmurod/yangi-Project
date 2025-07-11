import React from "react";
import ProjectsBackground from "../../assets/ProjectsBackground.jpg";

function ProjectComplate() {
  return (
    <div
      className="py-16 px-4 bg-cover bg-center flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-20 lg:gap-40 text-center"
      style={{ backgroundImage: `url(${ProjectsBackground})` }}
    >
      {[
        { number: "1240", label: "Project Complete" },
        { number: "1750+", label: "Happy Clients" },
        { number: "984", label: "Workers Employed" },
        { number: "96", label: "Awards Won" },
      ].map((item, index) => (
        <div key={index} className="text-white space-y-1 min-w-[120px]">
          <h2 className="text-[#FFC925] font-[Montserrat] text-[36px] sm:text-[40px] font-[400]">
            {item.number}
          </h2>
          <p className="text-white font-[Montserrat] text-[16px] sm:text-[18px] md:text-[19px] font-[400] tracking-wide">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProjectComplate;
