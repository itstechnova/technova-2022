import React, { useState } from "react";
import Slider from "react-slick";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./Judges.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kristina_moore from "../../resources/images/judges/kristina-moore.jpg";
import jen_macklin from "../../resources/images/judges/jen-macklin.jpeg";
import mila_banerjee from "../../resources/images/judges/mila-banerjee.png";
import pooja_joshi from "../../resources/images/judges/pooja-joshi.jpg";
import kendra_wiswell from "../../resources/images/judges/kendra-wiswell.PNG";
import cressa_price from "../../resources/images/judges/cressa-price.jpg";
import chayene_banta from "../../resources/images/judges/chayene-banta.png";
import anne_nagle from "../../resources/images/judges/anne-nagle.jpg";
import karan_huynh from "../../resources/images/judges/karan-huynh.png";
import judgeG from "../../resources/images/judges/judgeG.svg";

const judgeList = [
  {
    name: "Kristina Moore | ",
    org: "",
    pic: kristina_moore,
    role: "Principal Product Manager",
  },
  {
    name: "Jen Macklin | ",
    org: "",
    pic: jen_macklin,
    role: "Software Engineer",
  },
  {
    name: "Aydrian Howard | ",
    org: "Cockroach Labs",
    pic: judgeG,
    role: "Developer Advocate, "
  }, 
  {
    name: "Mila Banerjee | ",
    org: "",
    pic: mila_banerjee,
    role: "CEO & Tech Lead"
  },
  {
    name: "Pooja Joshi | ",
    org: "D2L",
    pic: pooja_joshi,
    role: "Software Test Developer, "
  },
  {
    name: "Kendra Wiswell | ",
    org: "SPS Commerce",
    pic: kendra_wiswell,
    role: "Senior Technical Account Manager, "
  },
  {
    name: "Cressa Price | ",
    org: "D2L",
    pic: cressa_price,
    role: "Senior Director, Software Engineering, "
  },
  {
    name: "Chayene Banta | ",
    org: "SPS Commerce",
    pic: chayene_banta,
    role: "Assoc. Application Engineer, "
  },
  {
    name: "Anne Nagle | ",
    org: "SPS Commerce",
    pic: anne_nagle,
    role: "Customer Success Executive, "
  },
  {
    name: "Karan Huynh | ",
    org: "Meta",
    pic: karan_huynh,
    role: "Software Engineer, "
  },
  {
    name: "",
    org: "Cloudflare",
    pic: judgeG,
    role: ""
  }
];

const Judges = () => {
  const [id, setId] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <SectionWrapper id="judges">
      <div className="judges-container">
        <div className="judges-title">
          <h1>Judges</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {judgeList.map((info, index) => (
            <div className="judge-wrapper">
              <div>
                <div className="judge-img-big-wrapper">
                  <div className="judge-img-small-wrapper">
                    <img alt="" src={info.pic} className="judge-img" onMouseOver={() => setId(index)} />
                  </div>
                </div>
              </div>
            </div>
            ))}
          </Slider>
        </div>
        <div className="judge-detail">
          <p>{judgeList[id].name}{judgeList[id].role}{judgeList[id].org}</p>
        </div>
      </div>
      
    </SectionWrapper>
  );
};

export default Judges;
