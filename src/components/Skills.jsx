import React from "react";
import cssLogo from "../assets/css.png";
import Jslogo from "../assets/Js-Logo.png";
import htmlLogo from "../assets/html.png";
import tail from "../assets/tail.png";
import boot from "../assets/Bootstrap.svg";
import reactLogo from "../assets/React-Logo.png";
const Skills = ({ light }) => {
  const logoImages = [
    {
      src: htmlLogo,
    },
    {
      src: cssLogo,
    },
    {
      src: Jslogo,
    },
    {
      src: reactLogo,
    },
    {
      src: tail,
    },
    {
      src: boot,
    }, {
      src: htmlLogo,
    },
    {
      src: cssLogo,
    },
    {
      src: Jslogo,
    },
    {
      src: reactLogo,
    },
    {
      src: tail,
    },
    {
      src: boot,
    },
  ];

  return (
    <div className={`${light ? "bg-white text-black" : "bg-black text-white"}`}>
      <div>
        <h1 className="text-center text-6xl underline underline-offset-8 font-semibold mb-10">
          Sk<span className="text-[#14CF93] font-[Mazius]">i</span>lls..
        </h1>
      </div>
      <div className=''>
         <marquee behavior=""  direction="left">
        <div className="flex flex-nowrap justify-around gap-7">
          {logoImages.map((logo, index) => {
            return (
              <div key={index} className="avatar hover:scale-110  duration-200">
                <div className="w-24 rounded">
                  <img src={logo.src} />
                </div>
              </div>
            );
          })}
        </div>
      </marquee>
      </div>
     
    </div>
  );
};

export default Skills;
