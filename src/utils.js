import chroma from "chroma-js";

export const isColorLight = (color) => chroma(color).luminance() >= 0.07;
