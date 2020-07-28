import React from "react";
import Hero from "../globals/Hero";
import homeimg from "../../images/homeBcg.jpeg";

const Header = () => {
  return (
    <>
      <Hero img={homeimg}>
        <h1>hello</h1>
      </Hero>
    </>
  );
};

export default Header;
