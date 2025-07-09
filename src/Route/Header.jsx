import React, { useState } from "react";
// import React, { useState } from "react";
import { variant1, variant2, twitter1, twitter2, facebook1, facebook2, google1, google2, pinterest1, pinterest2, ball1, ball2 } from "../assets";

function Header() {
  const [currentTwitter, setCurrentTwitter] = useState(twitter1)
  const [currentFacebook, setCurrentFacebook] = useState(facebook1)
  const [currentGoogle, setCurrentGoogle] = useState(google1)
  const [currentPinterest, setCurrentPinterest] = useState(pinterest1)
  const [currentball, setCurrentBall] = useState(ball1)


  return (
    <div className="bg-[#252525] h-14">
      <div className=" flex flex-wrap text-center h-full  text-white px-30 justify-between">
        <div className="flex flex-wrap content-center h-full text-center space-x-5">
          <div className=" flex content-center justify-center text-center items-center space-x-3 text-[12px] font-sans">
            <img className="w-3 h-3.5" src={variant1} alt="" />
            <p>1 Beverly Hills, Los Angeles, CA, 90210, United States </p>
          </div>
          <div className=" flex content-center justify-center text-center items-center space-x-3 text-[12px] font-sans">
            <img className="w-3 h-3.5" src={variant2} alt="" />
            <p>+1 (718) 379 3368</p>
          </div>
        </div>
        <div className="flex flex-wrap space-x-5 content-center justify-center text-center items-center">
            <img 
            className="w-4 h-5 hover:cursor-pointer hover:translate-z-2"
            src={currentTwitter}
            alt="Twitter"
            onMouseEnter={() =>setCurrentTwitter(twitter2)}
            onMouseLeave={() =>setCurrentTwitter(twitter1)}
            />
            <img className="w-4 h-5 hover:cursor-pointer" 
            src={currentFacebook}
            alt="Facebook"
            onMouseEnter={() =>setCurrentFacebook(facebook2)}
            onMouseLeave={() =>setCurrentFacebook(facebook1)}    
            />
            <img className="w-4 h-5 hover:cursor-pointer"
             src={currentGoogle}
             alt="google"
             onMouseEnter={() => setCurrentGoogle(google2)}
             onMouseLeave={() => setCurrentGoogle(google1)}/>
            <img className="w-4 h-5 hover:cursor-pointer"
             src={currentPinterest}
             alt="Pinterest"
             onMouseEnter={() => setCurrentPinterest(pinterest2)}
             onMouseLeave={() => setCurrentPinterest(pinterest1)}/>
            <img className="w-4 h-5 hover:cursor-pointer"
             src={currentball}
             alt="Ball"
             onMouseEnter={() => setCurrentBall(ball2)}
             onMouseLeave={() => setCurrentBall(ball1)}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
