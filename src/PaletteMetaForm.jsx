import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState, useEffect } from "react";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";

export const PaletteMetaForm = ({
  savePalette,
  colors,
  palettes,
  formShowing,
  setFormShowing,
}) => {
  let navigate = useNavigate();
  const [newPaletteName, setNewPaletteName] = useState("");

  const handlePaletteChange = (event) => {
    setNewPaletteName(event.target.value);
  };

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
    };
    savePalette(newPalette);
    navigate("/");
    console.log("newpalette", newPalette);
  };

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(({ paletteName }) => {
        return paletteName.toLowerCase() !== value.toLowerCase();
      });
    });
  }, [palettes.paletteName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Dialog open={formShowing} onClose={() => setFormShowing(!formShowing)}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
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
            <Button onClick={() => setFormShowing(!formShowing)}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};
