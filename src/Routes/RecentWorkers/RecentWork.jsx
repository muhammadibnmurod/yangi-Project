import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/RecentImage/image1.jpg";
import Image2 from "../../assets/RecentImage/image-2.jpg";
import Image3 from "../../assets/RecentImage/image-3.jpg";
import Image4 from "../../assets/RecentImage/image-4.jpg";
import Image5 from "../../assets/RecentImage/image-7.jpg";
import Image6 from "../../assets/RecentImage/image-6.jpg";
import Image7 from "../../assets/RecentImage/image-7.jpg";
import Image8 from "../../assets/RecentImage/image-8.jpg";

function RecentWork() {
  const [filter, setFilter] = useState("All");

  const images = [
    {
      id: 1,
      src: Image1,
      categories: ["Building", "Interier", "Office", "Workspace"],
    },
    { id: 2, src: Image2, categories: ["Building", "Workspace"] },
    { id: 3, src: Image3, categories: ["Architecture", "Garden", "Interier"] },
    {
      id: 4,
      src: Image4,
      categories: [
        "Office",
        "Architecture",
        "Interier",
        "Building",
        "Workspace",
      ],
    },
    {
      id: 5,
      src: Image5,
      categories: ["Architecture", "Garden", "Office", "Workspace"],
    },
    { id: 6, src: Image6, categories: ["Workspace", "Garden", "Office"] },
    { id: 7, src: Image7, categories: ["Architecture", "Office"] },
    { id: 8, src: Image8, categories: ["Garden", "Office"] },
  ];

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.categories.includes(filter));

  return (
    <div className="min-h-screen text-center">
      <h1 className="mt-24 text-[#252525] font-[Monserrat] text-3xl font-medium">
        Recent Works
      </h1>

      {/* Filter buttons */}
      <div className="flex mt-12 justify-center gap-5 flex-wrap">
        {[
          "All",
          "Architecture",
          "Building",
          "Garden",
          "Interier",
          "Office",
          "Workspace",
        ].map((cat) => (
          <p
            key={cat}
            className={`px-4 py-2 rounded-md cursor-pointer transition duration-200 ${
              filter === cat
                ? "bg-amber-400 text-white"
                : "hover:bg-amber-300 hover:text-white"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ duration: 0.4 }}
              className="shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default RecentWork;
