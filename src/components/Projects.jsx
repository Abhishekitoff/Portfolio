import React from "react";
import { Link } from "react-router-dom";
import movie from '../assets/movie.png'
import obys from '../assets/obys.png'
import videovista from '../assets/videovista.png'
import food from '../assets/food.png'


const Projects = ({ light }) => {
  const projectWorks = [
    {
      id: 1,
      src: movie,
      title: "Movie-Mania",
      live: "https://movie-mania-indol.vercel.app/",
      github: "https://github.com/Abhishekitoff/movie_mania",
      ani:'fade-right'
    }, 
    {
      id: 2,
      src: obys,
      title: "Obys-Agency",
      live: "https://abhishekitoff.github.io/Obys-Agency/",
      github: "https://github.com/Abhishekitoff/Obys-Agency",
      ani:'fade-left'
    },
    {
      id: 3,
      src: videovista,
      title: "Video Vista",
      live: "https://video-vista-rho.vercel.app/",
      github: "https://github.com/Abhishekitoff/video_vista",
      ani:'fade-right'
    },
     {
      id: 4,
      src: food,
      title: "Food Juction",
      live: "https://abhishekitoff.github.io/foodJuction/",
      github: "https://github.com/Abhishekitoff/foodJuction",
      ani:'fade-left'
    },
    
  ];

  return (
    <div className={`${light ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className="mb-8">
        <h1 className="text-center text-6xl underline underline-offset-8 font-semibold ">
          Project Wo<span className="text-[#14CF93] font-[Mazius]">r</span>ks..
        </h1>
      </div>
      <div className="flex flex-wrap sm:flex-row gap-5 justify-center items-center shadow-lg">

        {
          projectWorks.map((work)=>{
            return <div key={work.id} data-aos-duration='800' data-aos={work.ani}
            className={`card card-compact w-80 ${
              light ? "bg-white text-black" : "bg-black text-white"
            } shadow-xl`}
          >
            <figure>
              <img
                src={work.src}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{work.title}</h2>
              <p>{work.desc}</p>
              <div className="card-actions justify-evenly">
              <Link to={work.live}><button className="btn bg-[#14CF93] text-white border-none">Live</button> </Link>  
              <Link to={work.github}> <button className="btn bg-[#14CF93] text-white border-none">GitHub</button> </Link>
               
              </div>
            </div>
          </div>
          })
        }


      </div>
    </div>
  );
};

export default Projects;
