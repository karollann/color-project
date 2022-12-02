import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./Styles/App.css";
import { usePalettesContext } from "./Context";

function App() {
  const location = useLocation();

  const { palettes, setPalettes } = usePalettesContext();

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
          element={<NewPaletteForm savePalette={savePalette} />}
        />
        <Route
          path="/"
          element={<PaletteList deletePalette={deletePalette} />}
        />
        <Route path="/palette/:id" element={<Palette />} />
        <Route
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPalette />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
