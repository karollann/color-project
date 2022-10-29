import React from "react";
import { Route, Routes } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/palette/new" element={<NewPaletteForm />} />
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:id" element={<Palette />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
    </Routes>
  );
}

export default App;
