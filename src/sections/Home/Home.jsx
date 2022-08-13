import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "./Home.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
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
          <div className="heading">
            <h1>Hack with Us</h1>
          </div>
          <div className="textloop">
            <TextLoop />
          </div>
          <p>
            <span>University of Waterloo's&nbsp;</span>
            <span>Women+ in Tech Hackathon</span>
          </p>
          <p>
            <span>August 23-28, 2022</span>
            <span className="dot"> • </span>
            <span>Hybrid Event </span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
