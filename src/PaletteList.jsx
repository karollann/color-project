import "./Styles/PaletteList.css";
import { MiniPalette } from "./MiniPalette";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PaletteList = ({ palettes, deletePalette }) => {
  console.log("palettes", palettes);

  return (
    <div className="PaletteList-main">
      <div className="PaletteList-nav-container">
        <nav className="PaletteList-nav">
          <h1>React colors</h1>
          <Link className="PaletteList-nav-link" to="/palette/new">
            Create Palette
          </Link>
        </nav>
        <TransitionGroup className="PaletteList-palettes">
          {palettes.map((palette) => (
            <CSSTransition
              key={palette.id}
              classNames="PaletteList__Palettes--fade"
              timeout={500}
            >
              <Link to={`/palette/${palette.id}`} key={palette.id}>
                <MiniPalette {...palette} deletePalette={deletePalette} />
              </Link>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
