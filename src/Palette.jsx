import React from "react";
import { ColorBox } from "./ColorBox";
import "./Palette.css";

export const Palette = ({ colors }) => {
  return (
    <div className="Palette">
      <div className="Palette-colors">
        {colors.map((color) => (
          <ColorBox
            key={color.name}
            background={color.color}
            name={color.name}
          />
        ))}
      </div>
    </div>
  );
};
