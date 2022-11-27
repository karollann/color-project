import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Picker from "@emoji-mart/react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export const PaletteMetaForm = ({
  savePalette,
  colors,
  palettes,
  openFormName,
  setOpenFormName,
}) => {
  let navigate = useNavigate();
  const [newPaletteName, setNewPaletteName] = useState("");

  const handlePaletteChange = (event) => {
    setNewPaletteName(event.target.value);
  };

  const saveNewPalette = (emoji) => {
    const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
    handleSubmit(newPalette);
  };

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;

    savePalette(newPalette);
    navigate("/");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(({ paletteName }) => {
        return paletteName.toLowerCase() !== value.toLowerCase();
      });
    });
  }, [palettes.paletteName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Dialog
        open={openFormName === "emoji"}
        onClose={() => setOpenFormName("")}
      >
        <DialogTitle style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Pick A Palette Emoji
        </DialogTitle>
        <Picker
          onEmojiSelect={saveNewPalette}
          emojiButtonColors={["pink"]}
          theme="light"
        />
      </Dialog>
      <Dialog
        open={openFormName === "form"}
        onClose={() => setOpenFormName("")}
      >
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => setOpenFormName("emoji")}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new awsome palette. Make sure it's
              unique.
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              fullWidth
              margin="normal"
              value={newPaletteName}
              onChange={handlePaletteChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter palette name",
                "Palette name already used",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenFormName("")}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};
