import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Styles/MiniPalette.css";

export const MiniPalette = React.memo(
  ({ paletteName, emoji, colors, openDialog, id }) => {
    const removePalette = (e) => {
      e.preventDefault();
      openDialog(id);
    };

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
  }
);
