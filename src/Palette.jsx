import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { PaletteFooter } from "./PaletteFooter";
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
  console.log("paletteName", palette.paletteName);
  console.log("emoji", palette.emoji);
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        setFormat={setFormat}
        format={format}
        showSlider={true}
      />
      <div className="Palette-colors">
        {palette.colors[level].map((color) => (
          <ColorBox
            key={color.name}
            background={color[format]}
            name={color.name}
            id={color.id}
            paletteId={palette.id}
            showLink={true}
          />
        ))}
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
