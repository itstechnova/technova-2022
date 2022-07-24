import "./Landing.scss";
import Button from "../../components/Button/Button";

import techNovaText from "../../resources/images/techNovaText2.svg";
import calendar from "../../resources/images/icons/calendar.svg";
import location from "../../resources/images/icons/location.svg";
import landing from "../../resources/strings/landing";
import mail from "../../resources/images/socials/mailFill.svg";
import ig from "../../resources/images/socials/igFill.svg";
import linkedin from "../../resources/images/socials/linkedinFill.svg";
import facebook from "../../resources/images/socials/facebookFill.svg";
import twitter from "../../resources/images/socials/twitterFill.svg";
import socials from "../../resources/strings/socials";

const Landing = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="technova-container">
          <img className="technova-text" src={techNovaText} alt="TechNova" />
          <h4 className="presents-text">presents</h4>
        </div>
        <h1 className="hack-text">Hack with Us</h1>
        <h4 className="description">University of Waterloo's Women+ in Tech Hackathon</h4>
        <div className="location-container">
          <img className="icon" src={calendar} alt="icon" />
          <h4 className="time-text">August 23-28th</h4>
          <img className="icon" src={location} alt="icon" />
          <h4>Hybrid @ Waterloo ON</h4>
        </div>
        <div className="apply-and-socials-container">
          <Button link={landing.applyLink} label={landing.applyLabel} type={"button-2"}/>
          <Button link={landing.mentorLink} label={landing.mentorLabel} type={"button-2"}/>
        </div>
        <div className="links-container">
            <div className="socials-row">
                <a href={socials.email} target="_blank">
                  <img className="socials-icon" src={mail} alt="icon" />
                </a>
                <a href={socials.instagram} target="_blank">
                  <img className="socials-icon" src={ig} alt="icon" />
                </a>
                <a href={socials.linkedin} target="_blank">
                  <img className="socials-icon" src={linkedin} alt="icon" />
                </a>
                <a href={socials.facebook} target="_blank">
                  <img className="socials-icon" src={facebook} alt="icon" />
                </a>
                <a href={socials.twitter} target="_blank">
                  <img className="socials-icon" src={twitter} alt="icon" />
                </a>
                <a className="link-2021" href={landing.websiteLink2021} target="_blank">{landing.websiteLabel2021}</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Landing;