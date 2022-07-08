import React from "react";
import "./OurSponsors.scss";
/*
import google from "../../resources/images/sponsors/silver/google.png";
import wish from "../../resources/images/sponsors/silver/wish.png";
*/
import meta from "../../resources/images/sponsors/meta.png";
import scotiabank from "../../resources/images/sponsors/scotiabank.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";
import amazon from "../../resources/images/sponsors/amazon.png";
import hrt from "../../resources/images/sponsors/hrt.png";
import zynga from "../../resources/images/sponsors/zynga.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";
import expo from "../../resources/images/sponsors/expo.png";
import sps from "../../resources/images/sponsors/sps.png";
import rogers from "../../resources/images/sponsors/rogers.png";
import d2l from "../../resources/images/sponsors/d2l.png";
import microsoft from "../../resources/images/sponsors/microsoft.png";
import ratio_city from "../../resources/images/sponsors/ratio_city.png";

/*
import splunk from "../../resources/images/sponsors/bronze/splunk.png";
*/
import wie_white from "../../resources/images/logo/wie_white.png";
import wics_white from "../../resources/images/logo/wics_white.png";

const OurSponsors = () => (
  <div>
    <div className="our-sponsors-container">
      <h2 className="our-sponsors-title" style={{ marginTop: "50px", padding: "20px"}}>
        Thank You to Our Sponsors
      </h2>
      <p>TechNova is made possible because of our sponsors. Lorem Ipsum {"\n"}</p>
      <p>aiya blah blah dfkjabjkgbdajkfbdkjb bns — they fnksbjg dj.</p>
      <div className="our-sponsors-logos">
        <div className="our-sponsors-gold">
          <a href="https://www.aboutamazon.com/">
            <img src={amazon} alt="Amazon" />
          </a>
          <a href="https://careers.microsoft.com/us/en">
            <img src={microsoft} alt="Microsoft" />
          </a>
          <a href="https://jobs.spscommerce.com/">
            <img src={sps} alt="SPS Commerce" />
          </a>
          <a href="https://www.cockroachlabs.com/careers/">
            <img src={cockroach} alt="Cockroach Labs" />
          </a>
        </div>
        <div className="our-sponsors-silver">
          <a href="https://about.facebook.com/">
            <img src={meta} alt="meta" />
          </a>
          <a href="https://www.scotiabank.com/ca/en/about.html">
            <img src={scotiabank} alt="Scotiabank" />
          </a>
          <a className="pagerduty" href="https://www.pagerduty.com/careers/">
            <img src={pagerduty} alt="PagerDuty" />
          </a>
        </div>
        <div className="our-sponsors-bronze">
          <a href="https://www.hudsonrivertrading.com/campus-recruiting/">
            <img src={hrt} alt="HRT" />
          </a>
          <a href="https://campus.rogers.com/">
            <img src={rogers} alt="Rogers" />
          </a>
          <a href="https://www.zynga.com/jobs/careers/">
            <img src={zynga} alt="Zynga" />
          </a>
          <a className="d2l" href="https://www.d2l.com/careers/">
            <img src={d2l} alt="D2L" />
          </a>
        </div>
        <div className="our-sponsors-startup">
          <a href="https://expo.io/">
            <img src={expo} alt="Expo" />
          </a>
          <a href="https://www.ratio.city/">
            <img src={ratio_city} alt="Ratio City" />
          </a>
        </div>
      </div>
    </div>
    <div className="our-sponsors-partners">
      <a href="https://cs.uwaterloo.ca/wics">
        <img src={wics_white} alt="WiCS" />
      </a>
      <a href="https://uwaterloo.ca/women-in-engineering/">
        <img src={wie_white} alt="WiE" />
      </a>
    </div>
  </div>
);

export default OurSponsors;