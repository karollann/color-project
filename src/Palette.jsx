import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import "./Palette.css";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (level) => setLevel(level);

  const changeFormat = (e) => {
    setFormat(e.target.value);
    alert(e.target.value);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        format={format}
      />
      <div className="Palette-colors">
        {palette.colors[level].map((color) => (
          <ColorBox
            key={color.name}
            background={color[format]}
            name={color.name}
          />
        ))}
      </div>
    </div>
  );
};
