import React from "react";
import twitter from "../assets/twit1.gif";
import linkdin from "../assets/link1.gif";
import discord from "../assets/dis1.gif";
import { Link } from "react-router-dom";

const Contact = ({light}) => {
  const avtar = [
    {
      src:twitter,
      link:"https://twitter.com/Whenabhisheksay"
    },{
      src:linkdin,
      link:"https://www.linkedin.com/in/abhishek-rawat-b98532270"
    },{
      src:discord,
      link:"https://discord.com/channels/@me"
    },
  ]
  return (
    <div className={`${light ? 'bg-white text-black' : 'bg-black text-white'} sm:h-[70vh] h-[80vh] py-10`}>
      <div className="mb-8">
        <h1 className="text-5xl text-center font-semibold underline underline-offset-8">
          Soci<span className="text-[#14CF93] font-[Mazius]">a</span>ls
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="flex sm:flex-row flex-col w-full">
        <div   className="flex h-full flex-row justify-evenly flex-grow card place-items-center">
          {
            avtar.map((elem ,index)=>{
              return <Link target="_blank" key={index} to={elem.link}> <div className="avatar">
            
             <div className="w-24 mask mask-squircle cursor-pointer">
                <img src={elem.src} />
              </div>
             
            </div></Link> 
            })
          }
          
        </div>

        <div className="grid  flex-grow card place-items-center">
          <div>
            <h1 className="text-5xl sm:mb-6 my-10 font-semibold">LET'S TALK <br /> ABOUT THE <br /> NEXT BIG THING</h1>
          </div>

          <div className="flex gap-5">
          <Link target="_blank" to='mailto:abhishek4u343@gmail.com'><button className="btn bg-[#14CF93] border-none text-white font-bold text-lg">Write a Message</button></Link>
         <Link target="_blank" to='https://api.whatsapp.com/send?phone=8279469872'><button className="btn bg-[#14CF93] border-none text-white font-bold text-lg">Discuss Project</button> </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
