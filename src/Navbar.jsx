import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

export const Navbar = ({ changeLevel, level }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpickers</a>
      </div>
      <div className="slider-container">
        <div className="slider">
          <span>Level: {level}</span>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
    </header>
  );
};
