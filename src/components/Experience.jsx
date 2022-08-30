import React from "react";
import html from "../assets/html.webp";
import css from "../assets/css.jpg";
import js from "../assets/js.png";
import react from "../assets/react.webp";
import bootstrap from "../assets/bootstrap.jpg";
import tailwind from "../assets/tailwind.webp";
import c from "../assets/c++.png";
import java from "../assets/java.png";
import ds from "../assets/ds.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,

      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,

      title: "tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: c,
      title: "C++",
      style: "shadow-gray-700",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: ds,
      title: "Data Structures",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-700-w-full h-screen mb-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-18 w-20 mx-auto rounded" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
