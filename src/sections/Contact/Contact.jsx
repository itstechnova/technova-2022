import React from "react";
import { useState, useEffect } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";

import "./Contact.scss";
import arrow from "../../resources/images/icons/email.svg";
import contactImage from "../../resources/images/contact1.svg";
import mail from "../../resources/images/socials/mailDark.svg";
import ig from "../../resources/images/socials/igDark.svg";
import linkedin from "../../resources/images/socials/linkedinDark.svg";
import facebook from "../../resources/images/socials/facebookDark.svg";
import twitter from "../../resources/images/socials/twitterDark.svg";
import contact from "../../resources/strings/contact";
import socials from "../../resources/strings/socials";

function Contact() {
  const [state, setState] = useState({
    email: null,
    success: false,
    error: false,
    screenWidth: 0,
  });

  const updateWindowDimensions = () => {
    setState({ ...state, screenWidth: window.innerWidth });
  };

  useEffect(() => {
    function handleResize() {
      updateWindowDimensions();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(state.screenWidth)

  const validateEmailAddress = (email) => {
    const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
    const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
    const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
    return email.match(emailRegEx);
  };

  async function submitEmail() {
    //console.log("here");
    const isValidEmail = state.email && validateEmailAddress(state.email);

    if (!isValidEmail) {
      setState({ ...state, error: true, success: false });
      setTimeout(() => {
        setState({ ...state, email: "", error: false });
      }, 5000);
      return;
    }

    const url = `https://docs.google.com/forms/d/e/1FAIpQLScc_gM2db8zyRKfFqtJDjwHzH40vG6cY_99fFpQyX50DQ_hew/viewform`;

    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "access-control-allow-origin": "*",
      },
      body: `entry.1170762674=${state.email}`,
    });
    setState({ ...state, email: "", success: true, error: false });
    setTimeout(() => {
      setState({ ...state, email: "", success: false });
    }, 5000);
  }

  //console.log(state);

  const contactInfo = () => {
    return (
      <div className="contact">
        <h1 className="sub-title">{contact.title}</h1>
        <div className="email-card">
          <p className="email-text">
            Reach out to us at&nbsp;
            <a className="email-link" href="mailto:hello@itstechnova.org">
              hello@itstechnova.org
            </a>
          </p>
          <div className="email-wrapper">
            {state.screenWidth >= 400 ? (
              <input
                className="email-input"
                placeholder="name@example.com"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            ) : (
              <input
                className="email-input"
                placeholder="name@example.com"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            )}
            <div className="submit-wrapper" onClick={(e) => submitEmail()}>
              <div className="wrapper">
                <img src={arrow} className="submit-btn" alt="email submit" />
              </div>
            </div>
          </div>
        </div>

        {state.success && (
          <p> Thanks for signing up, we'll keep you updated!</p>
        )}
        {state.error && <p> Please enter a valid email.</p>}

        <div className="links-row">
          <a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Code of Conduct
          </a>
          <a
            href="https://cs.uwaterloo.ca/wics"
            target="_blank"
            rel="noreferrer"
          >
            WiCS
          </a>
        </div>

        <div className="socials-row">
          <SocialMediaLink src={mail} link={socials.email} />
          <SocialMediaLink src={ig} link={socials.instagram} />
          <SocialMediaLink src={linkedin} link={socials.linkedin} />
          <SocialMediaLink src={facebook} link={socials.facebook} />
          <SocialMediaLink src={twitter} link={socials.twitter} />
        </div>

        <div>
          <h3 className="inclusivity-title">Inclusivity Statement</h3>
          <p className="inclusivity-text">
            TechNova’s mission is to create safe, inclusive and empowering
            spaces for women and non-binary individuals to start, grow and
            thrive in the technology industry. We ensure that all members of the
            hackathon are respectful of our participants' gender expression. The
            TechNova team would also like to acknowledge that “female” or
            “women” is not an accurate description for many people and it may
            make some feel unwelcome. We use the term Women+ to specifically and
            intentionally include cis and trans women, as well as non-binary,
            agender, or intersex people, and other gender minorities.
          </p>
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper id="contact">
      <div className="contact-container">
        <div className="contact-row">
          {contactInfo()}
          <div className="contact-image-container">
            <img alt="" src={contactImage} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
export default Contact;
