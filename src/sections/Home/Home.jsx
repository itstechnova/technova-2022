import React, { useState, useEffect } from "react";
import Typist from 'react-typist';
import "./Home.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import home from "../../resources/strings/home";
import bridgeTile from "../../resources/images/graphics/bridge-tile.svg";
import chevron from "../../resources/images/icons/learn_more.svg"
import Button from "../../components/Button/Button";

const TextLoop = () => {
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <div>
            {mounted ? (
                <Typist className="home-slogan" onTypingDone={() => setMounted(false)}>
                    <span><span className="home-slogan-bold">{home.prepare}</span>{home.sloganEnd}</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span><span className="home-slogan-bold">{home.hack}</span>{home.sloganEnd}</span>
                    <Typist.Backspace count={17} delay={800} />
                    <span><span className="home-slogan-bold">{home.connect}</span>{home.sloganEnd}</span>
                    <Typist.Backspace count={20} delay={800} />
                </Typist>
            ) : (
                <span className="home-slogan">
                    {"n"}
                </span>
            )}
        </div>
    );

}

const Home = () => {
    return (
        <SectionWrapper id="home" paddingTop="0">
            <div className="home-container">
                <div className="home-text">
                    <h4 className="home-logo-text">
                        <span className="home-title">{home.title1}</span>
                        {home.title2}
                    </h4>
                    <h4 className="home-logo-text-mobile" style={{alignItems: "flex-end", justifyContent: "center", gap: "5px"}} >
                        <img 
                            className="mlh-mobile"
                            style={{height: "18px", marginRight: "2px", marginBottom: "4px"}} 
                            alt="mlh logo"
                        />
                        • <span className="home-title" style={{marginBottom: "1px"}}>{home.title1}</span>
                        {home.title2}
                    </h4>
                    <TextLoop />
                    <h4 className="home-description-mobile">
                        {home.description}
                    </h4>
                    <h4 className="home-dates">{home.dates}</h4>
                    <h4 className="home-description">
                        {home.description}
                    </h4>

                    </div>
                <div className="home-button-container">
                    <Button link={home.devpostLink} label={home.viewDevpost} />
                </div>
                <div className="home-button-container-mobile">
                    <Button link={home.devpostLink} label={home.viewDevpost} />
                </div>

                <div className="home-graphic-container">
                    <img src={bridgeTile} alt="bridge tile" />
                </div>

                <div className="home-learn-more-container">
                    <a href="#about" className="learn-more-link">Learn more
                    <img src={chevron} className="learn-more-arrow" alt="learn more" />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Home;