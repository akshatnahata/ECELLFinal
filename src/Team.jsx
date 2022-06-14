import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Ourteam } from "./components/ourteam";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Member = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Ourteam data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Member;
