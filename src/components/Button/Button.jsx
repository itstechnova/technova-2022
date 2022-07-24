import React from "react";
import "./Button.scss";

const Button = ({ label, link, type }) => (
        <a className={type ?? "button"} href={link} target="_blank">
            {label}
        </a>
);

export default Button;