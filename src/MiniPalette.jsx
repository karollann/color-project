import React from "react";
import "./Styles/MiniPalette.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const MiniPalette = ({ paletteName, emoji, colors, openDialog, id }) => {
  const removePalette = (e) => {
    e.preventDefault();
    openDialog(id);
  };
  console.log("colors", colors);
  console.log("paletteName", paletteName);

  return (
    <div>
      <div className="MiniPalette-main">
        <DeleteIcon
          className="MiniPalette__deleteIcon"
          style={{ transition: "opacity 0.3s ease-in-out" }}
          onClick={removePalette}
        />
        <div className="MiniPalette-colors">
          {colors.map((color) => (
            <div
              className="MiniPalette-miniColor"
              key={color.name}
              style={{ backgroundColor: color.color }}
            />
          ))}
        </div>
        <h2 className="MiniPalette-title">
          {paletteName}
          <span className="MiniPalette-emoji">{emoji}</span>
        </h2>
      </div>
    </div>
  );
};
