import React from "react";
import DestinationSlider from "../Components/DestinationSlider";
import Destinations from "./Destinations";
import Packages from "./Packages";
import Contact from "./Contact";

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="hero">
        <DestinationSlider />
      </section>

      {/* Destinations Section */}
      <section id="destinations">
        <Destinations />
      </section>

      {/* Packages Section */}
      <section id="packages">
        <Packages />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
