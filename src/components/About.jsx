import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl mt-20">
          I am a computer science engineering student who has interest in web
          technologies and so, is learning and experimenting with such skills. I
          want to explore more in my field of interest and so, I am looking for
          opportunities where I can showcase my skills and gain experience as a
          frontend developer.
        </p>
        <br />
        <p className="text-2xl mt-10">
          Apart from my technical skills, I am fond of pencil art and I love to
          read in my idle time
        </p>
      </div>
    </div>
  );
};

export default About;
