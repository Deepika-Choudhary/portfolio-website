import React from "react";
import discord from "../assets/discord.png";
import netflix from "../assets/netflix.png";
import website from "../assets/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      url: "https://netflix-clone-ecru-phi.vercel.app/",
      codeLink: "https://github.com/Deepika-Choudhary/Netflix-Clone",
    },
    {
      id: 2,
      src: website,
      url: "https://vercel.com/deepika-choudhary/portfolio-website/9EsA6QUPhVGkJADyL9ZmMS4ceTBX",
      codeLink: "https://github.com/Deepika-Choudhary/portfolio-website",
    },
    {
      id: 3,
      src: discord,
      url: "https://chat-server-4q785sh50-deepika-choudhary.vercel.app/",
      codeLink: "https://github.com/Deepika-Choudhary/discord-clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pb-40 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="website"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(url)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Deployed
                </button>

                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
