import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { arrayMoveImmutable } from "array-move";

import { ColorPickerForm } from "./ColorPickerForm";
import { DraggableColorList } from "./DraggableColorList";
import { PaletteFormNav } from "./PaletteFormNav";
import { Page } from "./Page";
import { Main } from "./Styles/NewPaletteFormStyles";
import { seedColors } from "./seedColors";
import { drawerWidth } from "./Styles/constants";
import { DrawerHeader } from "./Styles/NewPaletteFormStyles";
import "./Styles/NewPaletteForm.css";
import "./Styles/App.css";

export const NewPaletteForm = ({ maxColors = 20, savePalette }) => {
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);

  const addRandomColor = () => {
    const allColors = seedColors.map((palette) => palette.colors).flat();

    const remainedColors = allColors.filter(
      (colorObject) =>
        !colors.find(
          (paletteColor) =>
            paletteColor.name === colorObject.name ||
            paletteColor.color === colorObject.color
        )
    );
    let rand = Math.floor(Math.random() * remainedColors.length - 1);
    const randomColor = remainedColors[rand];
    setColors([...colors, randomColor]);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  const paletteIsFull = colors.length >= maxColors;

  return (
    <Page>
      <Box sx={{ display: "flex" }} className="Page">
        <PaletteFormNav
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          savePalette={savePalette}
          colors={colors}
        />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className="NewPaletteForm__DrawerContainer">
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className="NewPaletteForm__DrawerButtons">
              <Stack direction="row" spacing={2}>
                <Button
                  className="NewPaletteForm__DrawerButton"
                  variant="contained"
                  color="secondary"
                  onClick={() => setColors([])}
                >
                  Clear Palette
                </Button>
                <Button
                  className="NewPaletteForm__DrawerButton"
                  variant="contained"
                  color="primary"
                  onClick={addRandomColor}
                  disabled={paletteIsFull}
                >
                  Random Color
                </Button>
              </Stack>
            </div>
            <ColorPickerForm
              colors={colors}
              setColors={setColors}
              paletteIsFull={paletteIsFull}
            />
          </div>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <DraggableColorList
            colors={colors}
            removeColor={removeColor}
            axis="xy"
            onSortEnd={onSortEnd}
          />
        </Main>
      </Box>
    </Page>
  );
};
