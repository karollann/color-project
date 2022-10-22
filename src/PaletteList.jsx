import { seedColors } from "./seedColors";
import { Link } from "react-router-dom";

export const PaletteList = () => {
  return (
    <div>
      <h1>React colors</h1>
      {seedColors.map((palette) => (
        <Link to={`/palette/${palette.id}`} key={palette.id}>
          {palette.paletteName}
        </Link>
      ))}
    </div>
  );
};
