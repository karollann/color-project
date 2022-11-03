import "./DraggableColorBox.css";

export const DraggableColorBox = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className="DraggableColorBox">
      {color}
    </div>
  );
};
