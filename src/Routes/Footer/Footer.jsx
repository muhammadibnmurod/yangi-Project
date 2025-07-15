import React from "react";
import Logo from "../../assets/logo-white.png";
import Home from "../../assets/Footer/Home.svg";
import Phone from "../../assets/Footer/Phone.svg";
import Mail from "../../assets/Footer/Mail.svg";
import Insta1 from "../../assets/Footer/insta1.jpg";
import Insta2 from "../../assets/Footer/insta2.jpg";
import Insta3 from "../../assets/Footer/insta3.jpg";
import Insta4 from "../../assets/Footer/insta4.jpg";
import Insta5 from "../../assets/Footer/insta5.jpg";
import Insta6 from "../../assets/Footer/insta6.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#ccc] px-6 py-12 md:px-20 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1. Logo va Contact Info */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <img src={Logo} alt="Logo" className=" h-8" />
          </div>
          <p className="mb-6 text-sm leading-relaxed">
            Nullam vel enim risus. Integer rhoncus hendrerit sem egestas
            porttitor.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-yellow-400"><img src={Home} alt="Home" /></span>
              <p>
                1 Beverly Hills, Los Angeles, California, 90210, United States
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400"><img src={Phone} alt="Phone" /></span>
              <p>+1 (390) 379 3368, +1 (390) 379 6868</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400"><img src={Mail} alt="Mail" /></span>
              <p>contact@construction.com</p>
            </div>
          </div>
        </div>

        {/* 2. Popular Tags */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Popular tags
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Architectural",
              "Builder",
              "Fire",
              "Building",
              "Garden design",
              "Interior",
              "Marketing events",
              "ThemeForest",
              "Construction",
              "Exterior",
              "Highway",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-[#222] px-3 py-1 rounded-sm cursor-pointer hover:bg-yellow-500 hover:text-black transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Useful Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Useful links
          </h3>
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            {[
              "Home",
              "Help Center",
              "Portfolio",
              "Term of Use",
              "Services",
              "About Us",
              "News",
              "Conditions",
              "Contact",
              "Conditions",
              "Our Shop",
              "Privacy Legal",
            ].map((link, i) => (
              <div
                key={i}
                className="flex items-center gap-2 cursor-pointer hover:text-yellow-500"
              >
                <span className="text-sm text-gray-600">›</span> {link}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Instagram Photos */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Instagram photos
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[Insta1, Insta2, Insta3, Insta4, Insta5, Insta6].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`insta-${i}`}
                className="w-full h-[75px] object-cover rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex justify-between items-center text-xs text-gray-500">
        <p>CONSTRUCTION • ULTIMATE CONSTRUCTION TEMPLATE.</p>
        <div className="flex gap-6 uppercase text-sm font-semibold text-[#444]">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black text-xs px-4 py-2 rounded"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        TOP
      </button>
    </footer>
  );
};

export default Footer;
