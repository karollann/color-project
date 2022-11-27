import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import { isColorLight } from "./utils";

import "./Styles/DraggableColorBox.css";

export const DraggableColorBox = SortableElement(
  ({ color, name, handleClick }) => {
    const isLight = isColorLight(color);
    return (
      <div style={{ backgroundColor: color }} className="DraggableColorBox">
        <div className="DraggableColorBox__content">
          <span className={isLight ? "dark-text" : "light-text"}>{name}</span>
          <DeleteIcon
            className="DraggableColorBox__deleteIcon"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  }
);
