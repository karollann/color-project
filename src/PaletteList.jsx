import "./PaletteList.css";
import { seedColors } from "./seedColors";
import { MiniPalette } from "./MiniPalette";

export const PaletteList = () => {
  return (
    <div className="PaletteList-main">
      <div className="PaletteList-nav-container">
        <nav className="PaletteList-nav">
          <h1>React colors</h1>
        </nav>
        <div className="PaletteList-palettes">
          {seedColors.map((palette) => (
            <MiniPalette {...palette} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
