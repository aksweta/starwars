import React from "react";
import './button.css';

const Button = ({ children, handleClick }) => {
    return (
        <button className="button" onClick={handleClick}>{children}</button>
    )
}

export default Button;