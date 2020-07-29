import React from "react";
import Hero from "../globals/Hero";
import homeimg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <>
      <Hero img={homeimg}>
        <Banner
          greeting="welcome to "
          title="beachwalk resort"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi repellat alias maiores! Explicabo, sequi."
        >
          <PrimaryBtn style={{ marginTop: "1rem" }}> View Details </PrimaryBtn>
          {/* <PrimaryBtn
            as="a"
            href="https://www.google.com"
            style={{ marginTop: "1rem", textDecoration: "none" }}
          >
            {" "}
            View Details{" "}
          </PrimaryBtn> */}
        </Banner>
      </Hero>
    </>
  );
};

export default Header;
