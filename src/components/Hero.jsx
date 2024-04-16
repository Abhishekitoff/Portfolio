import React from "react";
import resume from "../assets/resume.pdf";

const Hero = ({ light }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf'; // You can change the name of the downloaded file if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`sm:min-h-screen ${light ? 'bg-white text-black' : 'bg-black text-white'} h-[80vh] flex items-center relative `}>
      <div data-aos="zoom-out" data-aos-duration='1500'>
        <h1 className="sm:text-9xl text-[5rem] font-bold mb-4  px-6">
          Creative  <br /> <span   className="italic sm:px-[30%] px-[13%] text-[#14CF93] font-[MAZIUS]">  Frontend </span> <br />{" "}
          Developer
        </h1>
      </div>
      <div className="flex gap-10 absolute bottom-14 left-5 sm:top-52 sm:left-[65%]" data-aos="zoom-out" data-aos-duration='1500'>
        <p className="font-bold text-sm">
          CURRENTLY AVAILABLE FOR <br />
          FREELANCE WORLDWIDE
        </p>
        <button onClick={handleDownload} className="btn bg-[#14CF93] text-white border-none hover:none">Download CV</button>
      </div>
    </div>
  );
};

export default Hero;
