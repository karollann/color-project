import { useState } from "react";
import { styled } from "@mui/material/styles";
import { PaletteFormNav } from "./PaletteFormNav";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DraggableColorList } from "./DraggableColorList";
import { arrayMoveImmutable } from "array-move";
import { ColorPickerForm } from "./ColorPickerForm";
import "./NewPaletteForm.css";

export const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const NewPaletteForm = ({ maxColors = 20, savePalette, palettes }) => {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  console.log("colors", colors);

  const addRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    console.log("allColors", allColors);

    const removedExistingColors = allColors.filter(
      (colorObject) =>
        !colors.find(
          (paletteColor) =>
            paletteColor.name === colorObject.name ||
            paletteColor.color === colorObject.color
        )
    );

    console.log("removed", removedExistingColors);

    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = removedExistingColors[rand];
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

    console.log("remove color", colors);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  const paletteIsFull = colors.length >= maxColors;

  return (
    <Box sx={{ display: "flex" }}>
      <PaletteFormNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
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
        <div className="drawer__container">
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className="drawer--buttons">
            <Stack direction="row" spacing={2}>
              <Button
                className="drawer--button"
                variant="contained"
                color="secondary"
                onClick={() => setColors([])}
              >
                Clear Palette
              </Button>
              <Button
                className="drawer--button"
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
  );
};
