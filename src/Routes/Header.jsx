import React, { useState } from "react";
import { variant1, variant2, twitter1, twitter2, facebook1, facebook2, google1, google2, pinterest1, pinterest2, ball1, ball2 } from "../assets";

function Header() {
  const [currentTwitter, setCurrentTwitter] = useState(twitter1);
  const [currentFacebook, setCurrentFacebook] = useState(facebook1);
  const [currentGoogle, setCurrentGoogle] = useState(google1);
  const [currentPinterest, setCurrentPinterest] = useState(pinterest1);
  const [currentBall, setCurrentBall] = useState(ball1);

  return (
    <div className="hidden sm:block bg-[#252525] h-10 sm:h-20 md:h-24 w-full ">
      <div className="flex flex-col sm:flex-row items-center space-x-5 justify-between h-full text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-10 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2 text-[10px] sm:text-[12px] md:text-[14px] font-sans">
            <img className="w-3 h-3.5 md:w-4 md:h-4.5" src={variant1} alt="Location" />
            <p>1 Beverly Hills, Los Angeles, CA, 90210, United States</p>
          </div>
          <div className="flex items-center space-x-2 text-[10px] sm:text-[12px] md:text-[14px] font-sans">
            <img className="w-3 h-3.5 md:w-4 md:h-4.5" src={variant2} alt="Phone" />
            <p>+1 (718) 379 3368</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            src={currentTwitter}
            alt="Twitter"
            onMouseEnter={() => setCurrentTwitter(twitter2)}
            onMouseLeave={() => setCurrentTwitter(twitter1)}
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            src={currentFacebook}
            alt="Facebook"
            onMouseEnter={() => setCurrentFacebook(facebook2)}
            onMouseLeave={() => setCurrentFacebook(facebook1)}
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            src={currentGoogle}
            alt="Google"
            onMouseEnter={() => setCurrentGoogle(google2)}
            onMouseLeave={() => setCurrentGoogle(google1)}
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            src={currentPinterest}
            alt="Pinterest"
            onMouseEnter={() => setCurrentPinterest(pinterest2)}
            onMouseLeave={() => setCurrentPinterest(pinterest1)}
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            src={currentBall}
            alt="Ball"
            onMouseEnter={() => setCurrentBall(ball2)}
            onMouseLeave={() => setCurrentBall(ball1)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;