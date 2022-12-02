import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { PaletteFooter } from "./PaletteFooter";
import { Page } from "./Page";
import { generatePalette } from "./colorHelpers";
import "./Styles/Palette.css";
import "./Styles/App.css";
import { usePalettesContext } from "./Context";

export const Palette = () => {
  const { palettes } = usePalettesContext();

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
      <div className="Palette Page">
        <Navbar
          level={level}
          changeLevel={changeLevel}
          setFormat={setFormat}
          format={format}
          showSlider={true}
        />
        <div className="Palette__Colors">
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
