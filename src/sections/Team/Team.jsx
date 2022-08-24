import React, { useState } from "react";
import Slider from "react-slick";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import "./Team.scss";
import alenka from "../../resources/images/team/alenka.jpg";
import alenka2 from "../../resources/images/team/alenka2.jpg";
import amandag from "../../resources/images/team/amandag.jpeg";
import amandag2 from "../../resources/images/team/amandag2.jpg";
import amandat from "../../resources/images/team/amandat.jpg";
import amandat2 from "../../resources/images/team/amandat2.jpg";
import angela from "../../resources/images/team/angela.jpg";
import angela2 from "../../resources/images/team/angela2.jpg";
import ayla from "../../resources/images/team/ayla.jpeg";
import ayla2 from "../../resources/images/team/ayla2.jpeg";
import bernie from "../../resources/images/team/bernie.png";
import bernie2 from "../../resources/images/team/bernie2.png";
import catherine from "../../resources/images/team/catherine.jpeg";
import catherine2 from "../../resources/images/team/catherine2.png";
import chatu from "../../resources/images/team/chatu.png";
import chidi from "../../resources/images/team/chidi.JPG";
import chidi2 from "../../resources/images/team/chidi2.JPG";
import cindy from "../../resources/images/team/cindy.png";
import darya from "../../resources/images/team/darya.jpeg";
import darya2 from "../../resources/images/team/darya2.jpeg";
import dea from "../../resources/images/team/dea.jpeg";
import dea2 from "../../resources/images/team/dea2.jpeg";
import elizabeth from "../../resources/images/team/elizabeth.jpg";
import elizabeth2 from "../../resources/images/team/elizabeth2.jpg";
import emily from "../../resources/images/team/emily.jpg";
import emily2 from "../../resources/images/team/emily2.jpg";
import fariha from "../../resources/images/team/fariha.jpeg";
import fariha2 from "../../resources/images/team/fariha2.jpg";
import grace from "../../resources/images/team/grace.png";
import jacquelyn from "../../resources/images/team/jacquelyn.png";
import joyce from "../../resources/images/team/joyce.jpeg";
import joyce2 from "../../resources/images/team/joyce2.jpeg";
import julianne from "../../resources/images/team/julianne.JPG";
import julianne2 from "../../resources/images/team/julianne2.JPG";
import kelly from "../../resources/images/team/kelly.png";
import kriti from "../../resources/images/team/kriti.jpg";
import kun from "../../resources/images/team/kun.jpg";
import kun2 from "../../resources/images/team/kun2.jpg";
import lucy from "../../resources/images/team/lucy.png";
import lucy2 from "../../resources/images/team/lucy2.png";
import rachel from "../../resources/images/team/rachel.png";
import rachel2 from "../../resources/images/team/rachel2.png";
import samantha from "../../resources/images/team/samantha.jpg";
import samantha2 from "../../resources/images/team/samantha2.jpg";
import serena from "../../resources/images/team/serena.png";
import shihan from "../../resources/images/team/shihan.jpg";
import shihan2 from "../../resources/images/team/shihan2.jpg";
import tianke from "../../resources/images/team/tianke.png";
import tianke2 from "../../resources/images/team/tianke2.jpg";
import goose from "../../resources/images/team/goose.png";


import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import linkedin from "../../resources/images/socials/linkedinTeam.svg";

const photos = [
    { hot: lucy, goof: lucy2, name: "Lucy Shen", role: "Director", linkedin: "https:/www.linkedin.com/in/lucy-shen/" },
    { hot: ayla, goof: ayla2, name: "Ayla Orucevic", role: "Advisor", linkedin: "https:/www.linkedin.com/in/ayla/" },
    
    { hot: samantha, goof: samantha2, name: "Samantha Kaiser", role: "Finance Lead", linkedin: "https:/www.linkedin.com/in/samanthakaiser03/" },
    { hot: amandag, goof: amandag2, name: "Amanda Gressmann", role: "Finance Coordinator", linkedin: "" },
    { hot: joyce, goof: joyce2, name: "Joyce Jorda", role: "Finance Coordinator", linkedin: "www.linkedin.com/in/joyce-jorda" },
    { hot: goose, goof: goose, name: "Derya Gulsoy", role: "Finance Coordinator & Sponsorship Coordinator", LinkedIn: "" },

    { hot: bernie, goof: bernie2, name: "Bernadette Cheng", role: "Sponsorship Coordinator", linkedin: "https:/www.linkedin.com/in/bernadettecheng/" },
    { hot: darya, goof: darya2, name: "Darya Zakharova", role: "Sponsorship Coordinator", LinkedIn: "" },
    { hot: kriti, goof: goose, name: "Kriti Sodhi", role: "Sponsorship Coordinator", LinkedIn: "www.linkedin.com/in/kriti-sodhi-629a981b5/" },
    { hot: rachel, goof: rachel2, name: "Rachel Scott", role: "Sponsorship Coordinator", LinkedIn: "www.linkedin.com/in/rachel-scott-link" },

    { hot: chidi, goof: chidi2, name: "Chidinma Umenwofor-Nweze", role: "Logistics Lead", LinkedIn: "www.linkedin.com/in/chidinma-umenwofor-nweze-b92990195/" },
    { hot: dea, goof: dea2, name: "Dea Gjini", role: "Logistics Coordinator", linkedin: "https:/www.linkedin.com/in/dea-gjini/" },
    { hot: julianne, goof: julianne2, name: "Julianne Jorda", role: "Logistics Coordinator", LinkedIn: "www.linkedin.com/in/julianne-jorda" },
    { hot: angela, goof: angela2, name: "Angela Law", role: "Logistics Coordinator", LinkedIn: "https://www.linkedin.com/in/angela-law/" },
    { hot: emily, goof: emily2, name: "Emily Zhu", role: "Logistics Coordinator", LinkedIn: "www.linkedin.com/in/emilyhy-zhu" },
    { hot: goose, goof: goose, name: "Maggie Lin", role: "Logistics Coordinator", LinkedIn: "" },
    { hot: shihan, goof: shihan2, name: "Shi Han Qin", role: "Logistics Coordinator", LinkedIn: "" },
    { hot: cindy, goof: goose, name: "Cindy Gu", role: "Logistics Coordinator", LinkedIn: "" },

    { hot: elizabeth, goof: elizabeth2, name: "Elizabeth Tatar", role: "Marketing Lead", LinkedIn: "" },
    { hot: alenka, goof: alenka2, name: "Alenka Rondon", role: "Marketing Coordinator", LinkedIn: "https://www.linkedin.com/in/alenka-rondon/" },
    { hot: jacquelyn, goof: goose, name: "Jacquelyn Yu", role: "Marketing Coordinator", LinkedIn: "" },
    { hot: serena, goof: goose, name: "Serena Li", role: "Marketing Coordinator", LinkedIn: "www.linkedin.com/in/serena-li-03/" },
    
    { hot: kun, goof: kun2, name: "Kun Zhu", role: "Design Lead", linkedin: "https:/www.linkedin.com/in/kun-zhu/" },
    { hot: tianke, goof: tianke2, name: "Tianke Li", role: "Design Coordinator", linkedin: "https:/www.linkedin.com/in/tianke-li-57b7b4193/" },
    { hot: grace, goof: goose, name: "Grace Yang", role: "Design Coordinator", LinkedIn: "" },
    { hot: chatu, goof: goose, name: "Chatumini Crystal Kodikara", role: "Design Coordinator", LinkedIn: "" },
    { hot: catherine, goof: catherine2, name: "Catherine Hoang", role: "Design Coordinator", LinkedIn: "www.linkedin.com/in/cat-hoang/" },

    { hot: amandat, goof: amandat2, name: "Amanda Tang", role: "Engineering Lead", LinkedIn: "www.linkedin.com/in/amanda-tang-509a7119b/" },
    { hot: fariha, goof: fariha2, name: "Mahzabin Fariha", role: "Engineering Coordinator", LinkedIn: "https://www.linkedin.com/in/mahzabin-rashid/" },
    { hot: kelly, goof: goose, name: "Kelly Wu", role: "Engineering Coordinator", LinkedIn: "" },
]

const PhotoCard = (props) => {
    const { photo, onHover, onUnhover } = props;
    const [imgSrc, setImgSrc] = useState(photo.hot);

    const handleHover = () => {
        setImgSrc(photo.goof);
        onHover && onHover();
    }

    const handleUnhover = () => {
        setImgSrc(photo.hot);
        onUnhover && onUnhover();
    }

    return (
        <img
            onMouseOver={() => handleHover()}
            onMouseOut={() => handleUnhover()}
            src={imgSrc}
            alt={photo.desc}
        />
    );
}

const Team = () => {
    const [id, setId] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 500,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
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
        <SectionWrapper id="team">
            <div className="team-container">
                <div className="team-title">
                    <h1>Meet the Team</h1>
                </div>
                <Slider {...settings}>
                    {photos.map((photo, index) => {
                        return (
                            <div className="team-photo">
                                <PhotoCard photo={photo} id={index} onHover={() => setId(index)} />
                            </div>
                        )
                    })}
                </Slider>
                <div className="team-text">
                    <p className="team-text-default">{photos[id].name} | {photos[id].role}</p>
                    <p className="team-text-mobile">{photos[id].name} <br /> {photos[id].role}</p>
                    <SocialMediaLink className="team-linkedin" src={linkedin} link={photos[id].linkedin} />
                </div>
            </div>
        </SectionWrapper>
        
    );
}

export default Team;
