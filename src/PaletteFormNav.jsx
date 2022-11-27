import { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PaletteMetaForm } from "./PaletteMetaForm";
import "./Styles/PaletteFormNav.css";
import { AppBar } from "./Styles/PaletteFormNavStyles";

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
            <ChevronRightIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="PaletteFormNav__Title"
          >
            Create A Palette
          </Typography>
        </Toolbar>

        <div className="PaletteFormNav__NavButtons">
          <Link to="/">
            <Button
              className="PaletteFormNav__Button"
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link>

          <Button
            className="PaletteFormNav__Button"
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
