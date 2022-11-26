import "./Styles/PaletteList.css";
import { MiniPalette } from "./MiniPalette";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Check } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import "./Styles/App.css";
import { Page } from "./Page";

export const PaletteList = ({ palettes, deletePalette }) => {
  console.log("palettes", palettes);

  const [deletingId, setDeletingId] = useState(null);

  return (
    <Page>
      <div className="PaletteList-main page">
        <div className="PaletteList-nav-container">
          <nav className="PaletteList-nav">
            <h1>React colors</h1>
            <Link className="PaletteList-nav-link" to="/palette/new">
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className="PaletteList-palettes">
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <Link to={`/palette/${palette.id}`} key={palette.id}>
                  <MiniPalette {...palette} openDialog={setDeletingId} />
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={!!deletingId}
          aria-labelledby="delete-dialog-title"
          onClose={() => setDeletingId(null)}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette
          </DialogTitle>
          <List>
            <ListItem
              button
              onClick={() => {
                deletePalette(deletingId);
                setDeletingId(null);
              }}
            >
              <ListItemAvatar>
                <Avatar className="paletteList__deleteColor">
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={() => setDeletingId(null)}>
              <ListItemAvatar>
                <Avatar className="paletteList__cancelColor">
                  <Close />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    </Page>
  );
};
