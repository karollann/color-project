import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import "./Palette.css";
import { seedColors } from "./seedColors";
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
};

export const Palette = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const params = useParams();

  const id = params.id;

  const palette = generatePalette(findPalette(id));

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
