import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { PaletteFooter } from "./PaletteFooter";
import "./Styles/App.css";
import { Page } from "./Page";

export const SingleColorPalette = ({ palettes }) => {
  const { paletteId, colorId } = useParams();
  const [format, setFormat] = useState("hex");

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

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
    <Page>
      <div className="SingleColorPalette Palette page">
        <Navbar setFormat={setFormat} format={format} />
        <div className="Palette__Colors ">
          {gatherShades(palette, colorId).map((color) => (
            <ColorBox
              singleColorClassName="ColorBox--SingleColor"
              key={color.name}
              name={color.name}
              background={color[format]}
              showLink={false}
            />
          ))}
          <div className="SingleColorPalette__GoBack ColorBox">
            <Link
              to={`/palette/${paletteId}`}
              className="SingleColorPalette__BackButton"
            >
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    </Page>
  );
};
