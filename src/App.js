import React, { useState } from "react";
import { seedColors } from "./seedColors";
import { Route, Routes } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./Styles/App.css";

function App() {
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const [palettes, setPalettes] = useState(seedColors);
  console.log("palettes", palettes);

  return (
    <Routes>
      <Route
        path="/palette/new"
        element={
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        }
      />
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route path="/palette/:id" element={<Palette palettes={palettes} />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palettes={palettes} />}
      />
    </Routes>
  );
}

export default App;
