import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { drawerWidth } from "./NewPaletteForm";
import { PaletteMetaForm } from "./PaletteMetaForm";
import { useState } from "react";
import "./PaletteFormNav.css";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const PaletteFormNav = ({
  open,
  handleDrawerOpen,
  palettes,
  savePalette,
  colors,
}) => {
  const [formShowing, setFormShowing] = useState(false);
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
            onClick={() => setFormShowing(!formShowing)}
          >
            Save Palette
          </Button>
          {formShowing && (
            <PaletteMetaForm
              savePalette={savePalette}
              colors={colors}
              palettes={palettes}
              formShowing={formShowing}
              setFormShowing={setFormShowing}
            />
          )}
        </div>
      </AppBar>
    </div>
  );
};
