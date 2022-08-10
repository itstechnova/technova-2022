import cockroach from "../../resources/images/sponsors_2021/cockroach.png";
import arrow from "../../resources/images/WiCSButton.svg";
import google from "../../resources/images/sponsors_2021/google.png";
import microsoft from "../../resources/images/sponsors/microsoft.png";
import sps from "../../resources/images/sponsors/sps.png";
import "./ShowCase.scss";

var showcase = [
  {
    image: cockroach,
    link: "https://www.cockroachlabs.com/careers/",
    alt: "cockroach",
    passenger: "Cockroach Labs",
    quote:
      "Cockroach Labs is the creator of CockroachDB, the most highly evolved cloud-native, distributed SQL database on the planet. Helping companies of all sizes—and the apps they develop— to scale fast, surviveanything, and thrive everywhere.",
  },
  {
    image: microsoft,
    link: "https://careers.microsoft.com/us/en",
    alt: "microsoft",
    passenger: "Microsoft",
    quote:
      "Microsoft provides opportunities to empower you to create things that help others and change the world. We offer a variety of scholarship programs, internships and full-time opportunities designed to empower you. Every year, thousands of university students from every corner of the world join Microsoft, with many working directly with the Microsoft Azure team. You bring your aspirations, talent, potential—and excitement for the journey. Our internship experience brings interns together worldwide to connect, collaborate and co-create virtually to make a difference and impact the world.",
  },
  {
    image: sps,
    link: "https://jobs.spscommerce.com/",
    alt: "sps",
    passenger: "SPS Commerce",
    quote:
      "SPS Commerce is the world's leading retail network, connecting trading partners around the globe to optimize supply chain operations for all retail partners. We support data-driven partnerships with innovative cloud technology, customer-obsessed service and accessible experts so our customers can focus on what they do best. To date, more than 105,000 companies in retail, distribution, grocery and e-commerce have chosen SPS as their retail network.",
  },
  {
    image: google,
    link: "https://careers.google.com/students/",
    alt: "google",
    passenger: "Google",
    quote:
      "Our mission is to organize the world's information and make it universally accessible and useful. At Google, we know that every employee has something important to say, and that every employee is integral to our success. Googlers thrive in small, focused teams and high-energy environments, believe in the ability of technology to change the world, and are as passionate about their lives as they are about their work. ",
  },
];

const ShowCase = () => {
  return (
    <div className="showcase-container">
      {showcase.map((sponsor, index) => {
        return (
          <div className="showcase-card">
            <div className={`showcase-passenger ${sponsor.alt}-passenger`}>
              <h3>{sponsor.passenger.toUpperCase()}</h3>
            </div>
            <div className="showcase-content">
              <img
                className={`showcase-img ${sponsor.alt}`}
                alt={sponsor.atl}
                src={sponsor.image}
              />
              <p className="showcase-quote">{sponsor.quote}</p>
              <a
                className="showcase-button"
                href={sponsor.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="showcase-button-content">
                  <p>Explore career page</p>
                  <img alt="arrow" src={arrow}></img>
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
