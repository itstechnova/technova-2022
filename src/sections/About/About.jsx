import React from "react";
import Slider from "react-slick";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import about from "../../resources/strings/about";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import HoverBox from "../../resources/images/hoverBox.svg";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import MobileBox from "../../resources/images/mobile-box.svg"

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <SectionWrapper id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>{about.title}</h1>
            <p>{about.description}</p>
          </div>
        </div>
        <div className="about-events">
          <div className="animate">
            <div className="hover_box">
              <img src={HoverBox} alt="" />
            </div>
            <img
              className="prep-image"
              style={{ gridArea: "prep-image" }}
              src={prepareTile}
              alt="prepare-tile"
            />
            <div
              style={{ gridArea: "prep-caption" }}
              className="about-caption date"
            >
              <p>{about.prepareDates}</p>
            </div>
            <div
              style={{ gridArea: "prep-caption" }}
              className="about-caption caption"
            >
              <p>{about.prepareCaption}</p>
            </div>
          </div>
          <div className="animate">
            <div className="hover_box">
              <img src={HoverBox} alt="" />
            </div>
            <img
              className="hack-image"
              style={{ gridArea: "hack-image" }}
              src={hackTile}
              alt="hack-tile"
            />
            <div
              style={{ gridArea: "prep-caption" }}
              className="about-caption date"
            >
              <p>{about.hackDates}</p>
            </div>
            <div
              style={{ gridArea: "hack-caption" }}
              className="about-caption caption"
            >
              <p>{about.hackCaption}</p>
            </div>
          </div>
          <div className="animate">
            <div className="hover_box">
              <img src={HoverBox} alt="" />
            </div>
            <img
              className="connect-image"
              style={{ gridArea: "connect-image" }}
              src={connectTile}
              alt="connect-tile"
            />
            <div
              style={{ gridArea: "prep-caption" }}
              className="about-caption date"
            >
              <p>{about.connectDates}</p>
            </div>
            <div
              style={{ gridArea: "connect-caption" }}
              className="about-caption caption"
            >
              <p>{about.connectCaption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-mobile">
        <Slider {...settings}>
          <div>
            <div className="mobile-box">
              <img src={MobileBox} alt="" />
            </div>
            <img className="mobile-image" src={prepareTile} alt="prepare-tile" />
            <div className="about-caption date">
              <p>{about.prepareDates}</p>
            </div>
            <div className="about-caption caption">
              <p>{about.prepareCaption}</p>
            </div>
          </div>
          <div>
            <div className="mobile-box">
              <img src={MobileBox} alt="" />
            </div>
            <img className="mobile-image" src={hackTile} alt="hack-tile" />
            <div className="about-caption date">
              <p>{about.hackDates}</p>
            </div>
            <div className="about-caption caption">
              <p>{about.hackCaption}</p>
            </div>
          </div>
          <div>
            <div className="mobile-box">
              <img src={MobileBox} alt="" />
            </div>
            <img className="mobile-image" src={connectTile} alt="connect-tile" />
            <div className="about-caption date">
              <p>{about.connectDates}</p>
            </div>
            <div className="about-caption caption">
              <p>{about.connectCaption}</p>
            </div>
          </div>
        </Slider>
      </div>
    </SectionWrapper>
  )
};


export default About;
