import React from "react";
import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./FAQ.scss";

const FAQ = () => (
  <SectionWrapper id="faq">
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-questions">
        <div className="faq-left-col">
          <ExpandableCard question={"What is a hackathon?"}>
            A hackathon is an event where students work together to build a
            technology-based solution to a problem. You can create an app, a
            website, a browser extension, whatever you’d like. The sky’s the
            limit, and we’ll be here to help along the way!
          </ExpandableCard>
          <ExpandableCard
            question={"Is this event only for Waterloo Students?"}
          >
            
          </ExpandableCard>
          <ExpandableCard question={"How many people can form a team?"}>
            Teams can consist of up to 4 hackers. You can apply with or without
            a team, and there will be opportunities prior to our hackathon to
            meet others and form your team.
          </ExpandableCard>
          <ExpandableCard question={"What kind of workshops are there?"}>
            There will be a variety of workshops, including both technical and
            career-related topics. Additionally, there will be workshops for
            both beginner and advanced hackers. Some examples could be Resume
            Writing, Networking, Intro to X, Artificial Intelligence.
          </ExpandableCard>
        </div>
        <div className="faq-right-col">
          <ExpandableCard question={"What if I don’t know how to code?"}>
            That's ok! Hackers have many roles including project management and
            prototyping! Your team will need people to help ideate, design, and
            pitch your hack in order to bring it to life, so your unique skills
            will definitely be an asset!
          </ExpandableCard>

          <ExpandableCard question={"Why is this event women+ only?"}>
            Women+ are underrepresented in this field, and although there’s been
            progress, there is still a long way to go! Thus we want to create a
            safe and welcoming space for our hackers to grow and create unique
            projects.
          </ExpandableCard>

          <ExpandableCard question={"Is there a cost to attend?"}>
            TechNova is free to attend!
          </ExpandableCard>

          <ExpandableCard question={"I applied, what happens next?"}>
            We will be reviewing applications on a rolling basis, so keep an eye
            on your email - that's how you’ll hear back from us about decisions.
          </ExpandableCard>
        </div>
      </div>

      <div className="faq-contact">
        <p>
          If you have any other questions, feel free to reach out to us at{" "}
          <a href="mailto:hello@itstechnova.org">hello@itstechnova.org</a>
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQ;
