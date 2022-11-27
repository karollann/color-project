import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

import "./Styles/DraggableColorBox.css";

export const DraggableColorBox = SortableElement(
  ({ color, name, handleClick }) => {
    return (
      <div style={{ backgroundColor: color }} className="DraggableColorBox">
        <div className="DraggableColorBox__content">
          <span>{name}</span>
          <DeleteIcon
            className="DraggableColorBox__deleteIcon"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  }
);
