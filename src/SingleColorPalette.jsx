import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { seedColors } from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { PaletteFooter } from "./PaletteFooter";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
};

export const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();
  const [format, setFormat] = useState("hex");

  const palette = generatePalette(findPalette(paletteId));

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      const filteredColorsPalette = allColors[key].filter(
        (color) => color.id === colorToFilterBy
      );
      shades = shades.concat(filteredColorsPalette);
    }
    return shades.slice(1);
  };

  return (
    <div className="SingleColorPalette Palette">
      <Navbar setFormat={setFormat} format={format} />
      <div className="Palette-colors">
        {gatherShades(palette, colorId).map((color) => (
          <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showLink={false}
          />
        ))}
        <div className="GoBack ColorBox">
          <Link to={`/palette/${paletteId}`} className="back-button">
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
