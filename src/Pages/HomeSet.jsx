import React, { useState } from "react";
import About from "../Components/About";
import Home from "./Home";
import CardList from "../Components/CardList";
import Youtube from "../Components/Youtube";
import Testinomials from "../Components/Testinomials";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

const HomeSet = () => {
  return (
    <div>
      <Home />
      <About />
      <CardList />
      <Youtube />
      <Testinomials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeSet;
