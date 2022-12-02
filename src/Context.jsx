import { createContext, useContext, useState } from "react";

import { seedColors } from "./seedColors";

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

const initialPalettes = savedPalettes || seedColors;

const PalettesContext = createContext(initialPalettes);

export const PalettesContextProvider = ({ children }) => {
  const [palettes, setPalettes] = useState(initialPalettes);

  return (
    <PalettesContext.Provider value={{ palettes, setPalettes }}>
      {children}
    </PalettesContext.Provider>
  );
};

export const usePalettesContext = () => useContext(PalettesContext);
