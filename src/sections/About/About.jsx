import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import HoverBox from "../../resources/images/hoverBox.svg"

const About = () => (
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
            <img src={HoverBox} />
          </div>
          <img
            className="prep-image"
            style={{ gridArea: "prep-image" }}
            src={hackTile}
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
            <img src={HoverBox} />
          </div>
          <img
            className="hack-image"
            style={{ gridArea: "hack-image" }}
            src={hackTile}
            alt="hack-tile"
          />
          <div style={{ gridArea: "hack-caption" }} className="about-caption">
            <p>{about.hackCaption}</p>
          </div>
        </div>
        <div className="animate">
          <div className="hover_box">
            <img src={HoverBox} />
          </div>
          <img
            className="connect-image"
            style={{ gridArea: "connect-image" }}
            src={hackTile}
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
  </SectionWrapper>
);

export default About;
