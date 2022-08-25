import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import keynote_ufo from "../../resources/images/keynote-ufo.png";
import "./keynote.scss"

const Keynote = () => (
  <SectionWrapper id="keynote">
    <h1 className="keynote-title">Keynote Speaker</h1>
    <div className="keynote-wrapper">
      <div className="images">
        <img src={keynote_ufo} alt="" className="ufo" />
      </div>

      <p className="keynote-text">
        <div className="keynote-name-title">
          <h3 className="keynote-name">Stephanie Mills</h3>
          <h8 className="keynote-name">CEO and Founder of CodeGem</h8>
        </div>
        Stephanie Mills is a 2020 Thiel fellow, and the CEO and founder of CodeGem; a people-first 
        management platform built for software teams. CodeGem was inspired by her combined experience 
        studying management engineering at UWaterloo and working as a software engineer at top companies 
        like Apple, Uber, Dapper, and Deloitte.
      </p>
    </div>
  </SectionWrapper>
);

export default Keynote;