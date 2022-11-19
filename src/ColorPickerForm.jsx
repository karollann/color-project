import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./ColorPickerForm.css";

export const ColorPickerForm = ({ colors, setColors, paletteIsFull }) => {
  const [currentColor, setCurrentColor] = useState("#fff");
  const [newColorName, setNewColorName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(({ name }) => {
        return name.toLowerCase() !== value.toLowerCase();
      });
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]); // eslint-disable-line react-hooks/exhaustive-deps

  const addNewColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    setColors([...colors, newColor]);
    setNewColorName("");
  };

  const handleColorChange = (event) => {
    setNewColorName(event.target.value);
  };

  return (
    <div className="pickerWraper">
      <ChromePicker
        className="picker"
        onChangeComplete={(newColor) => {
          console.log("newColor", newColor);
          setCurrentColor(newColor.hex);
        }}
        color={currentColor}
      />
      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          className="picker--colorNameInput"
          placeholder="Color Name"
          name="newColorName"
          variant="filled"
          margin="normal"
          value={newColorName}
          onChange={handleColorChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This field is required",
            "Color name must be unique",
            "Color must be unique",
          ]}
        />

        <Button
          className="picker--addColorButton"
          variant="contained"
          color="primary"
          style={{ backgroundColor: paletteIsFull ? "gray" : currentColor }}
          type="submit"
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette is full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};
