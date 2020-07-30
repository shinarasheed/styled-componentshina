import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";
// import GlobalStyles from "../components/globals/GlobalStyles";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Rooms />
    </div>
  );
};

export default Home;
