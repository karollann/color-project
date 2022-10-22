import React from "react";
import { Route, Routes } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:id" element={<Palette />} />
    </Routes>
  );
}

export default App;
