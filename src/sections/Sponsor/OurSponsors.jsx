import React from "react";
import "./OurSponsors.scss";

import toyota from "../../resources/images/sponsors/toyota.png";
import scotiabank from "../../resources/images/sponsors/scotiabank.jpeg";
import cockroach from "../../resources/images/sponsors/cockroach-labs.png";
import uplift from "../../resources/images/sponsors/uplift.png";
import google from "../../resources/images/sponsors/google.png";

const gold = [
  { logo: cockroach, alt: "Cockroach Labs", link: "https://www.cockroachlabs.com/careers/" }
]

const silver = [
  { logo: scotiabank, alt: "Scotiabank", link: "https://www.scotiabank.com/ca/en/about.html" },
  { logo: google, alt: "Google", link: "https://careers.google.com/students/" }
]

const bronze = [
  { logo: toyota, alt: "Toyota", link: "https://tmmc.ca/en/toyota-canada-careers/" }
]

const startup = [
  { logo: uplift, alt: "Uplift", link: "https://uplift.com/careers" }
]

const OurSponsors = () => (
  <div>
    <div className="our-sponsors-container">
      <h2 className="our-sponsors-title" style={{ marginTop: "50px", padding: "20px"}}>
        Thank You to Our Sponsors
      </h2>
      <p>TechNova is made possible because of our sponsors.</p>
      <div className="our-sponsors-logos">
        <div className="our-sponsors-gold">
          {gold.map(sponsor => {
            return (
              <a href={sponsor.link} target="_blank" rel="noreferrer">
                <img src={sponsor.logo} alt={sponsor.alt} />
              </a>
            )
          })}
        </div>
        <div className="our-sponsors-silver">
          {silver.map(sponsor => {
            return (
              <a href={sponsor.link} target="_blank" rel="noreferrer">
                <img src={sponsor.logo} alt={sponsor.alt} />
              </a>
            )
          })}
        </div>
        <div className="our-sponsors-bronze">
          {bronze.map(sponsor => {
            return (
              <a href={sponsor.link} target="_blank" rel="noreferrer">
                <img src={sponsor.logo} alt={sponsor.alt} />
              </a>
            )
          })}
        </div>
        <div className="our-sponsors-startup">
          {startup.map(sponsor => {
            return (
              <a href={sponsor.link} target="_blank" rel="noreferrer">
                <img src={sponsor.logo} alt={sponsor.alt} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  </div>
);

export default OurSponsors;