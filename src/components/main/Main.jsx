import React from "react";
import Hompage from "../../homepages-sections/Banner/Banner";
import Specials from "../../homepages-sections/specials/Specials";
import Testimonials from "../../homepages-sections/testimonials/Testimonials";
import About from "../../homepages-sections/about/About";

const Main = () => {
  return (
    <main>
      <Hompage />
      <Specials />
      <Testimonials />
      <About/>
    </main>
  );
};

export default Main;
