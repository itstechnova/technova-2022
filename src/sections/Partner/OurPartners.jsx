import React from "react";
import "./OurPartners.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import wics from "../../resources/images/logo/wics.png";
//import Button from "../../resources/images/WiCSButton.svg";
import wicsmobile from "../../resources/images/WiCSBgMobile.png";
const OurPartners = () => (
  <SectionWrapper id="partner">
    <div className="our-partners-container">
      <h2 className="our-partners-title">In Partnership With</h2>

      <div className="our-partners">
        <img src={wicsmobile} alt="WiCS" className="mobile_img" />
        <img src={wics} alt="WiCS" className="wics_logo" />
        <div className="our-partners-text">
          <p>
            We are working in partnership with the University of Waterloo’s
            David R. Cheriton School of Computer Science - Women in Computer
            Science (WiCS). WiCS is dedicated to promoting gender equity for
            students interested in studying computer science and looking to
            pursue careers in computing for the past 14 years, currently playing
            an active role in supporting over 2700 students.
          </p>
          <div className="wics_button">
            <a className="button" href="https://cs.uwaterloo.ca/wics">
              <p>Find out more about WiCS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default OurPartners;
