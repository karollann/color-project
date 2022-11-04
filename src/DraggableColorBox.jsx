import "./DraggableColorBox.css";

export const DraggableColorBox = ({ color, name }) => {
  return (
    <div style={{ backgroundColor: color }} className="DraggableColorBox">
      {color}
    </div>
  );
};
