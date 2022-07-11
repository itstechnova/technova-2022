import Button from "../../components/Button/Button";

import amazon from "../../resources/images/sponsors/amazon.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";
import sps from "../../resources/images/sponsors/sps.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";

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
      "Cockroach Labs is a company building CockroachDB, a distributed SQL database that helps you build cloud-native apps that survive everything and thrive everywhere -- just like a cockroach!",
    link: "https://www.cockroachlabs.com/careers/",
    image: cockroach,
  },
  {
    quote: (
      <p>
        SPS Commerce is the world’s leading retail network, connecting trading
        partners around the globe to optimize supply chain operations for all
        retail partners. We support data-driven partnerships with innovative
        cloud technology, customer-obsessed service and accessible experts so
        our customers can focus on what they do best. To date, more than 95,000
        companies in retail, distribution, grocery and e-commerce have chosen
        SPS as their retail network. SPS has achieved 82 consecutive quarters of
        revenue growth and is headquartered in Minneapolis. For additional
        information, contact SPS at 866-245-8100 or visit{" "}
        <a style={{ fontWeight: "normal" }} href="https://www.spscommerce.com/">
          www.spscommerce.com
        </a>
        .
      </p>
    ),
    link: "https://jobs.spscommerce.com/",
    image: sps,
  },
  {
    quote:
      "PagerDuty is the digital operations management platform that empowers the right action, when seconds matter. For teams who build and run the digital systems that power business, PagerDuty is the best way to manage urgent, mission-critical work to keep operations running smoothly, without disruption of customer experiences. Over 40% of the Fortune 500 place PagerDuty at the center of their digital infrastructure to manage unplanned tasks, events, or opportunities. With more than 1,000 employees across offices in San Francisco, Atlanta, Toronto, Sydney, and London, PagerDuty is helping modern enterprises redefine their approach to operations in a digital-first world.",
    link: "https://www.pagerduty.com/careers/",
    image: pagerduty,
  },
];

const ShowCase = () => {
  return (
    <div className="showcase-container">
      {showcase.map((sponsor, index) => {
        return (
          <div className="showcase-card">
            <img className="sponsor-img" src={sponsor.image} />
            <p>{sponsor.quote}</p>
            <Button label="Explore career page" link={sponsor.link} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowCase;
