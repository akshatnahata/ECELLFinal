import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Events } from "./components/events";
import { About } from "./components/about";
import { WhatWeDo } from "./components/whatWeDo";
import { Partners } from "./components/partners";
// import { Testimonials } from "./components/testimonials";
import { Mentors } from "./components/mentors";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Events data={landingPageData.Events} />
      <WhatWeDo data={landingPageData.WhatWeDo} />
      <Partners data={landingPageData.Partners}/>
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Mentors data={landingPageData.Mentors} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
