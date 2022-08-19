import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Partners from "./sections/Partner/OurPartners";
import SponsorUs from "./sections/Sponsor/SponsorUs";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
//import Team from "./sections/Team/Team";
import Keynote from "./sections/Keynote/Keynote";
import Judges from "./sections/Judges/Judges";
import Footer from "./sections/Footer/Footer";
import logo from "./resources/images/logo/logo.png";

import nav from "./resources/strings/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const logoRoute = { logoSrc: logo, sectionId: "landing" };
const routes = [
  { label: nav.about, sectionId: "about" },
  { label: nav.sponsor, sectionId: "sponsor" },
  { label: nav.keynote, sectionId: "keynote" },
  { label: nav.judges, sectionId: "judges" },
  { label: nav.faq, sectionId: "faq" },
  { label: nav.contact, sectionId: "contact" },
];

// landing page only flag
const onlyLanding = false;

// PDF locations in public folder
const SponsorPackage = `${process.env.PUBLIC_URL}/pdfs/sponsorship_package.pdf`;
const PrepWithUs = `${process.env.PUBLIC_URL}/pdfs/prep_with_us_schedule.pdf`;
const HackWithUs = `${process.env.PUBLIC_URL}/pdfs/hack_with_us_schedule.pdf`;

const App = () => {
    if (onlyLanding) {
        return (
            <div className="App">
                <Landing />
            </div>
        )
    } 
    return (
        <BrowserRouter>
        <Switch>
            <Route
            // Redirect itstechnova.org/sponsorship-package to pdf location
            path="/sponsorship-package"
            component={() => {
                window.location.href = SponsorPackage;
                return null;
            }}
            />
            <Route
            // Redirect itstechnova.org/sponsorship-package to pdf location
            path="/prepare-with-us-schedule"
            component={() => {
                window.location.href = PrepWithUs;
                return null;
            }}
            />
            <Route
            // Redirect itstechnova.org/sponsorship-package to pdf location
            path="/hack-with-us-schedule"
            component={() => {
                window.location.href = HackWithUs;
                return null;
            }}
            />
            <Route exact path="/">
            <div className="App">
                <NavBar routes={routes} logoRoute={logoRoute} />
                <Home />
                <About />
                <Testimonials />
                <Partners />
                <SponsorUs />
                <Keynote />
                <Judges />
                <FAQ />
                {/*<Team />*/}
                <Contact />
                <Footer />
            </div>
            </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default App;
