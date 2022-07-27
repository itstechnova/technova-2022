import React from "react";
import "./OurSponsors.scss";

import toyota from "../../resources/images/sponsors/toyota.png";
import scotiabank from "../../resources/images/sponsors/scotiabank.jpeg";
import cockroach from "../../resources/images/sponsors/cockroach-labs.png";
import uplift from "../../resources/images/sponsors/uplift.png";
import google from "../../resources/images/sponsors/google.png";
import microsoft from "../../resources/images/sponsors/microsoft.png";
import meta from "../../resources/images/sponsors/meta.png";
import sps from "../../resources/images/sponsors/sps.png";
import wie from "../../resources/images/logo/wie.png";
import wics from "../../resources/images/logo/wics.png";
import velocity from "../../resources/images/logo/velocity.png"

const gold = [
  {
    logo: cockroach,
    alt: "Cockroach Labs",
    link: "https://www.cockroachlabs.com/careers/",
  },
  {
    logo: microsoft,
    alt: "Microsoft",
    link: "https://careers.microsoft.com/us/en",
  },
  {
    logo: sps,
    alt: "sps",
    link: "https://jobs.spscommerce.com/",
  },
];

const silver = [
  {
    logo: scotiabank,
    alt: "Scotiabank",
    link: "https://www.scotiabank.com/ca/en/about.html",
  },
  { logo: google, alt: "Google", link: "https://careers.google.com/students/" },
];

const bronze = [
  {
    logo: toyota,
    alt: "Toyota",
    link: "https://tmmc.ca/en/toyota-canada-careers/",
  },
  { logo: meta, alt: "Meta", link: "https://www.metacareers.com/" },
];

const startup = [
  { logo: uplift, alt: "Uplift", link: "https://uplift.com/careers" },
];

const partners = [
  { logo: wics, alt: "wics", link: "https://cs.uwaterloo.ca/wics" },
  { logo: wie, alt: "wie", link: "https://uwaterloo.ca/women-in-engineering/" },
  { logo: velocity, alt: "velocity", link: "https://velocityincubator.com/" },
];

const OurSponsors = () => (
  <div className="our-sponsors-container">
    <h2 className="our-sponsors-title">Our Sponsors</h2>
    <div className="our-sponsors-logos">
      <div className="our-sponsors-gold">
        {gold.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-silver">
        {silver.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-bronze">
        {bronze.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-startup">
        {startup.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
    </div>
    <h2 className="our-sponsors-title">Our Partners</h2>
    <div className="our-sponsors-partners">
      {partners.map((partner) => {
        return (
          <a href={partner.link}>
            <img src={partner.logo} alt={partner.alt} />
          </a>
        );
      })}
    </div>
  </div>
);

export default OurSponsors;