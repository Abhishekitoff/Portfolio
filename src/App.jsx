import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./components/Details";
import Loder from "./components/Loder";

const App = () => {
  const light = useSelector((store) => store.toggle.value);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={"overflow-hidden"}>
      {isLoading ? (
        <div className={"loading-animation"}>
          <Loder />
        </div>
      ) : (
        <>
          <Navbar light={light} />
          <Hero light={light} />
          <Details light={light} />
          <Projects light={light} />
          <Skills light={light} />
          <Contact light={light} />
        </>
      )}
    </div>
  );
};

export default App;
