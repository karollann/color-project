import "./Styles/PaletteList.css";
import { MiniPalette } from "./MiniPalette";
import { Link } from "react-router-dom";

export const PaletteList = ({ palettes }) => {
  return (
    <div className="PaletteList-main">
      <div className="PaletteList-nav-container">
        <nav className="PaletteList-nav">
          <h1>React colors</h1>
          <Link className="PaletteList-nav-link" to="/palette/new">
            Create Palette
          </Link>
        </nav>
        <div className="PaletteList-palettes">
          {palettes.map((palette) => (
            <Link to={`/palette/${palette.id}`} key={palette.id}>
              <MiniPalette {...palette} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
