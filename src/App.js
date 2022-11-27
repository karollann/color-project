import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { seedColors } from "./seedColors";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./Styles/App.css";

function App() {
  const location = useLocation();

  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = (id) => {
    const newPalettes = palettes.filter((palette) => {
      return palette.id !== id;
    });
    setPalettes(newPalettes);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes key={location.pathname}>
        <Route
          path="/palette/new"
          element={
            <NewPaletteForm savePalette={savePalette} palettes={palettes} />
          }
        />
        <Route
          path="/"
          element={
            <PaletteList palettes={palettes} deletePalette={deletePalette} />
          }
        />
        <Route path="/palette/:id" element={<Palette palettes={palettes} />} />
        <Route
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPalette palettes={palettes} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
