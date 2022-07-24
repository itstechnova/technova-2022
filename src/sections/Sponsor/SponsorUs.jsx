import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";

import telescope from "../../resources/images/graphics/telescope.svg";

//import ShowCase from "./ShowCase"
import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";

const SponsorUs = () => (
  <div>
    <SectionWrapper id="sponsor">
      <div className="sponsor-us-container">
        <div className="sponsor-us-content">
          <div className="sponsor-us-text">
            <h1 className="sponsor-us-title">Sponsor us</h1>
            <div className="sponsor-us-description">
              <p>
                Support more than 200 young women in the next step of their
                journey by sponsoring the next generation of leaders.
              </p>
              <p>
                Interested in sponsoring? Email us at{" "}
                <a href="mailto:sponsors@itstechnova.org" target="_blank">
                  sponsors@itstechnova.org
                </a>
              </p>
            </div>
            <Button
              label="Join as a Sponsor"
              link="mailto:sponsors@itstechnova.org"
              type={"button-2"}
            />
          </div>
          <div className="sponsor-us-images">
            <img className="telescope" src={telescope} alt="telescope" />
          </div>
        </div>
      </div>
    </SectionWrapper>
    {/*<ShowCase />*/}
    <OurSponsors />
  </div>
);

export default SponsorUs;