import React, { useState, useContext } from "react";
import HexToRgb from "../functions/HexToRgb";
import RgbToHex from "../functions/RgbToHex";
import validateHex from "../functions/validateHex";
import validateRgb from "../functions/validateRgb";
import { ColorsContext } from "../store/ColorsContext";
import "./AddColors.scss";

const AddColors = () => {
  const ctx = useContext(ColorsContext);
  const [colorMode, setColorMode] = useState("HEX");
  const [hexColor, setHexColor] = useState<string>("");
  const [rgbColor, setRgbColor] = useState<{
    red: number;
    green: number;
    blue: number;
  }>({ red: 0, green: 0, blue: 0 });
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (colorMode === "HEX" && validateHex(hexColor)) {
      const color = HexToRgb(hexColor);
      ctx.addColor(color.red, color.green, color.blue);
    }
    if (colorMode === "RGB") {
      console.log(validateRgb(rgbColor));
      ctx.addColor(rgbColor.red, rgbColor.green, rgbColor.blue);
    }
  };
  const hexInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateHex(e.target.value)) {
      setHexColor(e.target.value.toUpperCase());
    }
  };

  return (
    <form onSubmit={submitHandler} className="addColor_container">
      <div className="colorModeButtons_container">
        <button
          type="button"
          onClick={() => {
            setColorMode("HEX");
          }}
          className={
            colorMode === "HEX"
              ? "radio_button radio_button_checked"
              : "radio_button"
          }
        >
          HEX
        </button>
        <button
          type="button"
          onClick={() => {
            setColorMode("RGB");
          }}
          className={
            colorMode === "RGB"
              ? "radio_button radio_button_checked"
              : "radio_button"
          }
        >
          RGB
        </button>
      </div>
      {colorMode === "HEX" && (
        <input
          className="color_input"
          maxLength={7}
          minLength={6}
          onChange={hexInputHandler}
          value={hexColor}
          placeholder="#FFFFFF"
        />
      )}
      {colorMode === "RGB" && (
        <div className="rgbInput_container">
          <input
            className="color_input"
            type="number"
            placeholder="red"
            maxLength={3}
            onChange={(e) => {
              setRgbColor({
                red: parseInt(e.target.value),
                green: rgbColor.green,
                blue: rgbColor.blue,
              });
            }}
          />
          <input
            className="color_input"
            type="number"
            placeholder="green"
            maxLength={3}
            onChange={(e) => {
              setRgbColor({
                red: rgbColor.red,
                green: parseInt(e.target.value),
                blue: rgbColor.blue,
              });
            }}
          />
          <input
            className="color_input"
            type="number"
            placeholder="blue"
            min={0}
            max={256}
            onChange={(e) => {
              setRgbColor({
                red: rgbColor.red,
                green: rgbColor.green,
                blue: parseInt(e.target.value),
              });
            }}
          />
        </div>
      )}
      <button type="submit" className="addColor_submitButton">
        Add color
      </button>
    </form>
  );
};

export default AddColors;
