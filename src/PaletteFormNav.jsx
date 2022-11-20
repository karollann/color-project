import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { PaletteMetaForm } from "./PaletteMetaForm";
import { useState } from "react";
import "./Styles/PaletteFormNav.css";
import { AppBar } from "./Styles/PaletteFormeNavStyles";

export const PaletteFormNav = ({
  open,
  handleDrawerOpen,
  palettes,
  savePalette,
  colors,
}) => {
  const [openFormName, setOpenFormName] = useState("");

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create A Palette
          </Typography>
        </Toolbar>

        <div className="navButtons">
          <Link to="/">
            <Button className="button" variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>

          <Button
            className="button"
            variant="contained"
            onClick={() => setOpenFormName("form")}
          >
            Save Palette
          </Button>

          <PaletteMetaForm
            savePalette={savePalette}
            colors={colors}
            palettes={palettes}
            openFormName={openFormName}
            setOpenFormName={setOpenFormName}
          />
        </div>
      </AppBar>
    </div>
  );
};
