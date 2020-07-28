import React from "react";
import Hero from "../globals/Hero";
import homeimg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

const Header = () => {
  return (
    <>
      <Hero img={homeimg}>
        <Banner
          greeting="welcome to "
          title="beachwalk resort"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi repellat alias maiores! Explicabo, sequi."
        />
      </Hero>
    </>
  );
};

export default Header;
