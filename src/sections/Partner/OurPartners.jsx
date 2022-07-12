import React from "react";
import "./OurPartners.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import wics from "../../resources/images/logo/wics.png";
import Button from "../../resources/images/WiCSButton.svg";

const OurPartners = () => (
  <SectionWrapper id="partner">
    <div className="our-partners-container">
      <h2 className="our-partners-title">In Partnership With</h2>

      <div className="our-partners">
        <a href="https://cs.uwaterloo.ca/wics">
          <img src={wics} alt="WiCS" />
        </a>
        <p className="our-partners-text">
          We are working in partnership with the University of Waterloo’s David
          R. Cheriton School of Computer Science - Women in Computer Science
          (WiCS). WiCS is dedicated to promoting gender equity for students
          interested in studying computer science and looking to pursue careers
          in computing for the past 14 years, currently playing an active role
          in supporting over 2700 students.
        </p>
        <div className="button">
          <p>Find out more about WiCS</p>
         
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default OurPartners;
