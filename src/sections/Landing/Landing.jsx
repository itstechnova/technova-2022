import "./Landing.scss";
import techNovaText from "../../resources/images/techNovaText.svg";
import CountDown from "../../components/Countdown/Countdown";
import Button from "../../components/Button/Button";
import landing from "../../resources/strings/landing";

const Landing = () => {
  return (
    <div className="banner">
      <div className="container">
        <img src={techNovaText} alt="TechNova" />
        <h1>University of Waterloo’s Women+ in Tech Hackathon</h1>
        <CountDown />
        <h2>until we blast off with another <b>amazing</b> hackathon! </h2>
        <h4>To get TechNova’s latest update, please join our mailing list:</h4>
        <div className="mailingListButton">
          <Button link={landing.mailingListLink} label={landing.mailingListLabel} />
        </div>
      </div>
    </div>
  );
};

export default Landing;