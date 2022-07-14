import Button from "../../components/Button/Button";

import amazon from "../../resources/images/sponsors_2021/amazon.png";
import cockroach from "../../resources/images/sponsors_2021/cockroach.png";
import sps from "../../resources/images/sponsors_2021/sps.png";
import pagerduty from "../../resources/images/sponsors_2021/pagerduty.png";
import arrow from "../../resources/images/WiCSButton.svg";

import "./ShowCase.scss";

var showcase = [
  {
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.amazon.jobs/student-programs",
    image: amazon,
  },
  {
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.pagerduty.com/careers/",
    image: pagerduty,
  },
  {
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.cockroachlabs.com/careers/",
    image: cockroach,
  },
];

const ShowCase = () => {
  return (
    <div className="showcase-container">
      {showcase.map((sponsor, index) => {
        return (
          <div className="showcase-card">
            <div className="showcase-content">
              <img className="showcase-img" src={sponsor.image} />
              <p className="showcase-quote">{sponsor.quote}</p>
              <a className="showcase-button" href={sponsor.link}>
                <div className="showcase-button-content">
                  <p>Explore career page</p>
                  <img src={arrow}></img>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCase;
