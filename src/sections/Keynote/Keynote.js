import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ufo from "../../resources/images/ufo.png";
import keynote from "../../resources/images/keynote.png";
import "./keynote.scss"

const Keynote = () => (
  <SectionWrapper id="keynote">
    <h1 className="keynote-title">Keynote Speaker</h1>
    <div className="keynote-wrapper">
      <div className="images">
        <img src={ufo} alt="" className="ufo" />
        <img src={keynote} alt="" className="keynote-image" />
      </div>

      <p className="keynote-text">
        <div className="keynote-name-title">
          <h3 className="keynote-name">Ayla Orucevic</h3>
          <h8 className="keynote-name">CEO of Tesla</h8>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo, ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo hello.
      </p>
    </div>
  </SectionWrapper>
);

export default Keynote;