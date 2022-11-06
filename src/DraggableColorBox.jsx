import "./DraggableColorBox.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const DraggableColorBox = ({ color, name }) => {
  return (
    <div style={{ backgroundColor: color }} className="DraggableColorBox">
      <div className="DraggableColorBox--content">
        <span>{name}</span>
        <DeleteIcon className="DraggableColorBox__deleteIcon" />
      </div>
    </div>
  );
};
