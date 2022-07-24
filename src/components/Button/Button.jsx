import React from "react";
import "./Button.scss";

const Button = ({ label, link, type }) => (
        <a className={type ?? "button"} href={link} target="_blank" rel="noreferrer">
            {label}
        </a>
);

export default Button;