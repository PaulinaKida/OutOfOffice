import React from "react";
import AboutMe from "./homepage/AboutMe";
import Offer from "./homepage/Offer";
import Collaboration from "./homepage/Collaboration";
import Contact from "./homepage/Contact";

function Homepage() {
    return (
      <>
          <AboutMe />
          <Offer />
          <Collaboration />
          <Contact />
      </>
    );
}

export default Homepage;