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
        <div className="MiniPalette__Main">
          <DeleteIcon
            className="MiniPalette__DeleteIcon"
            style={{ transition: "opacity 0.3s ease-in-out" }}
            onClick={removePalette}
          />
          <div className="MiniPalette__Colors">
            {colors.map((color) => (
              <div
                className="MiniPalette__MiniColor"
                key={color.name}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
          <h2 className="MiniPalette__Title">
            {paletteName}
            <span className="MiniPalette-emoji">{emoji}</span>
          </h2>
        </div>
      </div>
    );
  }
);
