import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Routes/Header.jsx";
import Navbar from "./Routes/Navbar/Navbar.jsx";
import ReadMore from "./Routes/ReadMore/ReadMore.jsx";
import ReadMore1 from "../src/assets/ReadMore/ReadMore-1.jpg";
import ReadMore2 from "../src/assets/ReadMore/ReadMore-2.jpg";
import ReadMore3 from "../src/assets/ReadMore/ReadMore-3.jpg";
import ProjectComplate from "./Routes/Project-Complate/ProjectComplate.jsx";
import RecentWork from "./Routes/RecentWorkers/RecentWork.jsx";
import Offer from "./Routes/Offer/Offer.jsx";

const App = () => {
  const readMoreData = [
    {
      img: ReadMore1,
      title: "Construction Consultant",
      subtitle:
        "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget arcu.",
      buttonText: "READ MORE",
    },
    {
      img: ReadMore2,
      title: "Resconstruction Services",
      subtitle: "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget arcu.",
      buttonText: "READ MORE",
    },
    {
      img: ReadMore3,
      title: "Architectural Design",
      subtitle: "Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.",
      buttonText: "READ MORE",
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <div className="flex gap-5 justify-center p-12">
          {readMoreData.map((item, index) => (
            <ReadMore
              key={index}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              buttonText={item.buttonText}
            />
          ))}
        </div>
        <ProjectComplate/>
        <RecentWork/>
        <Offer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
