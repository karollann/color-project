import React, { useEffect, useState } from "react";
import { seedColors } from "./seedColors";
import { Route, Routes } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./Styles/App.css";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

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
