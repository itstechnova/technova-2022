import React from "react";
import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Testimonials.scss";
import testimonials from "../../resources/strings/testimonials";
import vanessaImg from "../../resources/images/testimonials/vanessa-testimonial.png"
import vanessaSelectedImg from "../../resources/images/testimonials/vanessa-testimonial-selected.png"
import emmaImg from "../../resources/images/testimonials/emma-testimonial.png"
import emmaSelectedImg from "../../resources/images/testimonials/emma-testimonial-selected.png"
import aanchalImg from "../../resources/images/testimonials/aanchal-testimonial.png"
import aanchalSelectedImg from "../../resources/images/testimonials/aanchal-testimonial-selected.png"

const testimonialsList = [
  {
    name: "Vanessa",
    testimonial: testimonials.vanessaTestimonial,
    notSelected: vanessaImg,
    selected: vanessaSelectedImg
  },
  {
    name: "Emma",
    testimonial: testimonials.emmaTestimonial,
    notSelected: emmaImg,
    selected: emmaSelectedImg
  },
  {
    name: "Aanchal",
    testimonial: testimonials.aanchalTestimonial,
    notSelected: aanchalImg,
    selected: aanchalSelectedImg
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(1);

  return (
    <SectionWrapper id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-title">
            <h1>{testimonials.title}</h1>
            <p>{testimonials.description}</p>
          </div>
          <div className="testimonials-wrapper">
            <img src={index === 0 ? testimonialsList[0].selected : testimonialsList[0].notSelected} alt="" onClick={() => setIndex(0)} />
            <img src={index === 1 ? testimonialsList[1].selected : testimonialsList[1].notSelected} alt="" onClick={() => setIndex(1)} />
            <img src={index === 2 ? testimonialsList[2].selected : testimonialsList[2].notSelected} alt="" onClick={() => setIndex(2)} />
          </div>
          <div className="testimonials-text">
            <p>{testimonialsList[index].testimonial}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
