import React from "react";

export const PaletteFooter = ({ paletteName, emoji }) => {
  console.log("paletteName!", paletteName);
  console.log("emoji!", emoji);
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};
