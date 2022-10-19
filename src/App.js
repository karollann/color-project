import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Palette } from "./Palette";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Palette goes here</h1>} />
      <Route path="/palette/:id" element={<Palette />} />
    </Routes>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
