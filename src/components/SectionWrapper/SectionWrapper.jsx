import React from "react";
import "./SectionWrapper.scss";

const SectionWrapper = ({ children, id, paddingTop, backgroundImg }) => {
  console.log("background:", backgroundImg);
  return (
    <div className="section-wrapper" id={id}>
      <div
        className="section-container"
        style={{
          paddingTop: paddingTop || "80px",
          backgroundImage: `url('${backgroundImg}')` || "none",
        }}
      >
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
