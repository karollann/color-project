import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const changeLevel = (level) => setLevel(level);

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      <div className="Palette-colors">
        {palette.colors[level].map((color) => (
          <ColorBox key={color.name} background={color.hex} name={color.name} />
        ))}
      </div>
    </div>
  );
};
