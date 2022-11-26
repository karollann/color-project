import React, { useEffect, useState } from "react";

import { seedColors } from "./seedColors";
import { Route, Routes, useLocation } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import "./Styles/App.css";
import { AnimatePresence } from "framer-motion";

// const getRoutes = ({ savePalette, palettes, deletePalette }) => {
//   return [
//     {
//       path: "/palette/new",
//       name: "New Palette",
//       element: <NewPaletteForm savePalette={savePalette} palettes={palettes} />,
//       nodeRef: createRef(),
//     },
//     {
//       path: "/",
//       name: "Main Page",
//       element: (
//         <PaletteList palettes={palettes} deletePalette={deletePalette} />
//       ),
//       nodeRef: createRef(),
//     },
//     {
//       path: "/palette/:id",
//       name: "Palette",
//       element: <Palette palettes={palettes} />,
//       nodeRef: createRef(),
//     },
//     {
//       path: "/palette/:paletteId/:colorId",
//       name: "Single Color Palette",
//       element: <SingleColorPalette palettes={palettes} />,
//       nodeRef: createRef(),
//     },
//   ];
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: routes.map((route) => ({
//       index: route.path === "/",
//       path: route.path === "/" ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ]);

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
  console.log("location", location);

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
