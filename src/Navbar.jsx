import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Styles/Navbar.css";

export const Navbar = ({
  changeLevel,
  level,
  setFormat,
  format,
  showSlider,
}) => {
  const [open, setOpen] = useState(false);

  const closeSnackbar = () => {
    setOpen(false);
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showSlider && (
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
      )}
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - RGB(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - RGBA(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={2000}
        message={
          <span id="message-id">
            Format Changed to: {format.toUpperCase()}!
          </span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};
