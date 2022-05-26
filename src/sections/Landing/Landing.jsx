import "./Landing.scss";
import techNovaText from "../../resources/images/techNovaText.svg";

const Landing = () => {
  return (
    <div className="banner">
      <div className="container">
        <img src={techNovaText} alt="TechNova" />
        <h1>University of Waterloo’s Women+ in Tech Hackathon</h1>
        <h2>until we blast off with another amazing hackathon! </h2>
        <h4>To get TechNova’s latest update, please join our mailing list:</h4>
      </div>
    </div>
  );
};

export default Landing;