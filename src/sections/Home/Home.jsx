import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "./Home.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import landing from "../../resources/strings/landing";
import goose from "../../resources/images/goose.png";

const TextLoop = () => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  let sloganEnd = " with Us";

  return (
    <div>
      {mounted ? (
        <Typist
          className="landing-slogan"
          onTypingDone={() => setMounted(false)}
        >
          <span>
            <span className="landing-slogan-bold">Prepare</span>
            {sloganEnd}
          </span>
          <Typist.Backspace count={20} delay={800} />
          <span>
            <span className="landing-slogan-bold">Hack</span>
            {sloganEnd}
          </span>
          <Typist.Backspace count={17} delay={800} />
          <span>
            <span className="landing-slogan-bold">Connect</span>
            {sloganEnd}
          </span>
          <Typist.Backspace count={20} delay={800} />
        </Typist>
      ) : (
        <span className="landing-slogan">{"n"}</span>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <SectionWrapper id="home" paddingTop="0">
      <div className="content">
        <div className="home-img">
          <img src={goose} alt="goose" />
        </div>
        <div className="text">
          <div className="h-block">
            <h2>TechNova</h2>
            <p>presents</p>
          </div>
          <div className="textloop">
            <TextLoop/>
          </div>
          <h1>Hack with Us</h1>
          <p>
            <span>University of Waterloo's&nbsp;</span>
            <span>Women+ in Tech Hackathon</span>
          </p>
          <p>
            <span>August 23-28, 2022</span>
            <span className="dot"> • </span>
            <span>Virtual Event </span>
          </p>
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
      </div>
    </SectionWrapper>
  );
};

export default Home;
