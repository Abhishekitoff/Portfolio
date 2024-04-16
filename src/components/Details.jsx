import React from "react";
import pic from "../assets/2.jpg";

const Details = ({ light }) => {
  return (
    <div className={`hero min-h-screen ${light ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" src={pic} className="w-[300px] rounded-lg shadow-2xl h-[400px] object-cover -rotate-6 grayscale hover:grayscale-0" />
        <div>
          <p data-aos="fade-right" className="py-6 text-3xl font-bold ">
            I AM ABHISHEK RAWAT, I <br /> CREATE <span className="text-[#14CF93] italic">Unconventional</span> YET <br /> FUNCTIONAL &
            VISUALLY <br />PLEASING INTERFACES <br />FOR THE MOBILE AND WEB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
