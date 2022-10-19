import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import "./Palette.css";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (level) => setLevel(level);

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        setFormat={setFormat}
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
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};
