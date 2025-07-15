import React from "react";
import WordPress from "../../assets/Friends/WrodPress.png";
import Shopify from "../../assets/Friends/Shopify.png";
import Joomla from "../../assets/Friends/Joomla.png";
import Envato from "../../assets/Friends/Envato.png";
import Commerce from "../../assets/Friends/Commerce.png";

const platforms = [
  {
    name: "WordPress",
    img: WordPress,
    url: "https://wordpress.com/ru/",
  },
  {
    name: "Shopify",
    img: Shopify,
    url: "https://www.shopify.com/store-login",
  },
  {
    name: "Joomla",
    img: Joomla,
    url: "https://www.joomla.org/",
  },
  {
    name: "Envato",
    img: Envato,
    url: "https://elements.envato.com/ru/?gad_campaignid=18874427954&gad_source=1&gbraid=0AAAAADe3Bs-Maq77A8C4V22fuKm_Op9Tc&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQUm-EU0kyUDeJ5cBJwIVgNte6-uJn6hpiV5TRkswnwADG4CFt68gHRoCnQgQAvD_BwE",
  },
  {
    name: "Envato",
    img: Envato,
    url: "https://www.investopedia.com/terms/c/commerce.asp",
  },
  {
    name: "Commerce",
    img: Commerce,
    url: "https://www.investopedia.com/terms/c/commerce.asp",
  },
];

function Freiends() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 md:px-8">
      <div className="flex flex-wrap justify-center w-screen items-center gap-8 md:gap-16 py-10 bg-gray-200  rounded-lg">
        {platforms.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            rel="noopener noreffer"
            className="transition transform hover:scale-110"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 sm:w-28 md:w-32 object-contain grayscale hover:grayscale-0 duration-300"
            />
          </a>
        ))}
        ,
      </div>
    </div>
  );
}

export default Freiends;
