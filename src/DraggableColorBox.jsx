import "./DraggableColorBox.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

export const DraggableColorBox = SortableElement(
  ({ color, name, handleClick }) => {
    return (
      <div style={{ backgroundColor: color }} className="DraggableColorBox">
        <div className="DraggableColorBox--content">
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
