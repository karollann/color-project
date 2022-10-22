import "./MiniPalette.css";

export const MiniPalette = ({ paletteName, emoji, colors }) => {
  return (
    <div>
      <div className="MiniPalette-main">
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
