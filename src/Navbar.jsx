import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

export const Navbar = ({ changeLevel, level, handleChange, format }) => {
  // const [format, setFormat]=useState("hex")

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
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - RGB(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - RGBA(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};
