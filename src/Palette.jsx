import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { PaletteFooter } from "./PaletteFooter";
import "./Styles/Palette.css";
// import { seedColors } from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./Styles/App.css";
import { Page } from "./Page";

export const Palette = ({ palettes }) => {
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const params = useParams();

  const id = params.id;

  const palette = generatePalette(findPalette(id));

  const changeLevel = (level) => setLevel(level);

  return (
    <Page>
      <div className="Palette page">
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
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    </Page>
  );
};
