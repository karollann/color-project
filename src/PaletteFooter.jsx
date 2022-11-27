import React from "react";

export const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette__Footer">
      {paletteName}
      <span className="Palette__FooterEmoji">{emoji}</span>
    </footer>
  );
};
