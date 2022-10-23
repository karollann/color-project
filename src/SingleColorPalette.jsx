import { useParams } from "react-router-dom";
import { seedColors } from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { ColorBox } from "./ColorBox";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
};

export const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();

  const palette = generatePalette(findPalette(paletteId));

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      const filteredColorsPalette = allColors[key].filter(
        (color) => color.id === colorToFilterBy
      );
      shades = shades.concat(filteredColorsPalette);
    }
    return shades.slice(1);
  };

  return (
    <div className="Palette">
      <h1>single color palette</h1>
      <div className="Palette-colors">
        {gatherShades(palette, colorId).map((color) => (
          <ColorBox
            key={color.hex}
            name={color.name}
            background={color.hex}
            showLink={false}
          />
        ))}
      </div>
    </div>
  );
};
