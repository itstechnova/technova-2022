import React from "react";
import "./Home.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import landing from "../../resources/strings/landing";

const Home = () => {
  return (
    <SectionWrapper id="home" paddingTop="0">
      <div className="text">
        <div className="h-block">
          <h2>TechNova</h2>
          <p>presents</p>
        </div>
        <h1>Hack with Us</h1>
        <p>University of Waterloo's Women+ in Tech Hackathon</p>
        <p>August 23-28, 2022 • Virtual Event </p>
        <div className="links">
          <Button
            link={landing.applyLink}
            label={landing.applyLabel}
            type={"button-2"}
          />
          <Button
            link={landing.mentorLink}
            label={landing.mentorLabel}
            type={"button-2"}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
