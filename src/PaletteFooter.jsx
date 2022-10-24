import React from "react";

export const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};
