import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from "../../resources/strings/testimonials";
import vanessaImg from "../../resources/images/testimonials/vanessa-testimonial.png";
import vanessaSelectedImg from "../../resources/images/testimonials/vanessa-testimonial-selected.png";
import emmaImg from "../../resources/images/testimonials/emma-testimonial.png";
import emmaSelectedImg from "../../resources/images/testimonials/emma-testimonial-selected.png";
import aanchalImg from "../../resources/images/testimonials/aanchal-testimonial.png";
import aanchalSelectedImg from "../../resources/images/testimonials/aanchal-testimonial-selected.png";

const testimonialsList = [
  {
    name: "Vanessa",
    testimonial: testimonials.vanessaTestimonial,
    notSelected: vanessaImg,
    selected: vanessaSelectedImg,
  },
  {
    name: "Emma",
    testimonial: testimonials.emmaTestimonial,
    notSelected: emmaImg,
    selected: emmaSelectedImg,
  },
  {
    name: "Aanchal",
    testimonial: testimonials.aanchalTestimonial,
    notSelected: aanchalImg,
    selected: aanchalSelectedImg,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <SectionWrapper id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-title">
            <h1>{testimonials.title}</h1>
            <p>{testimonials.description}</p>
          </div>
          <div className="testimonials-wrapper-desktop">
            <img
              src={
                index === 0
                  ? testimonialsList[0].selected
                  : testimonialsList[0].notSelected
              }
              alt=""
              onMouseOver={() => setIndex(0)}
            />
            <img
              src={
                index === 1
                  ? testimonialsList[1].selected
                  : testimonialsList[1].notSelected
              }
              alt=""
              onMouseOver={() => setIndex(1)}
            />
            <img
              src={
                index === 2
                  ? testimonialsList[2].selected
                  : testimonialsList[2].notSelected
              }
              alt=""
              onMouseOver={() => setIndex(2)}
            />
          </div>
          <div className="testimonials-text-desktop">
            <p>{testimonialsList[index].testimonial}</p>
          </div>

          <div className="testimonials-wrapper-tablet">
            <Slider className="testimonials-slider" {...settings}>
              <div>
                <img src={testimonialsList[0].selected} alt="" />
                <div className="testimonials-text-tablet">
                  <p>{testimonialsList[0].testimonial}</p>
                </div>
              </div>
              <div>
                <img src={testimonialsList[1].selected} alt="" />
                <div className="testimonials-text-tablet">
                  <p>{testimonialsList[1].testimonial}</p>
                </div>
              </div>
              <div>
                <img src={testimonialsList[2].selected} alt="" />
                <div className="testimonials-text-tablet">
                  <p>{testimonialsList[2].testimonial}</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
/* */
