import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import { isColorLight } from "./utils";

import "./Styles/DraggableColorBox.css";

export const DraggableColorBox = SortableElement(
  ({ color, name, handleClick }) => {
    const isLight = isColorLight(color);
    return (
      <div style={{ backgroundColor: color }} className="DraggableColorBox">
        <div className="DraggableColorBox__Content">
          <span
            className={
              isLight
                ? "DraggableColorBox--DarkText"
                : "DraggableColorBox--LightText"
            }
          >
            {name}
          </span>
          <DeleteIcon
            className="DraggableColorBox__DeleteIcon"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  }
);
