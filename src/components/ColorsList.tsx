import React, { useContext, useState, useEffect } from "react";
import RgbToHex from "../functions/RgbToHex";
import { ColorsContext } from "../store/ColorsContext";
import "./ColorsList.scss";
const ColorsList = () => {
  const ctx = useContext(ColorsContext);

  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [saturation, setSaturation] = useState(false);

  const [filteredColors, setFilteredColors] = useState(ctx.colors);

  useEffect(() => {
    setFilteredColors([...ctx.defaultColors, ...ctx.colors]);
    //filter in every case
    setFilteredColors(
      [...ctx.defaultColors, ...ctx.colors].filter((color) => {
        if (red && green && blue && saturation) {
          console.log(
            color.red > 127 &&
              color.green > 127 &&
              color.blue > 127 &&
              color.saturation > 50
          );
          return (
            color.red > 127 &&
            color.green > 127 &&
            color.blue > 127 &&
            color.saturation > 50
          );
        }
        if (!red && !green && !blue && !saturation) {
          return color;
        }
        //one
        if (red && !green && !blue && !saturation) {
          return color.red > 127;
        }
        if (!red && green && !blue && !saturation) {
          return color.green > 127;
        }
        if (!red && !green && blue && !saturation) {
          return color.blue > 127;
        }
        if (!red && !green && !blue && saturation) {
          return color.saturation > 50;
        }
        //red

        if (red && green && !blue && !saturation) {
          return color.red > 127 && color.green > 127;
        }
        if (red && !green && blue && !saturation) {
          return color.red > 127 && color.blue > 127;
        }
        if (red && !green && !blue && saturation) {
          return color.red > 127 && color.saturation > 50;
        }
        //green

        if (!red && green && blue && !saturation) {
          return color.green > 127 && color.blue > 127;
        }
        if (!red && green && !blue && saturation) {
          return color.green > 127 && color.saturation > 50;
        }
        //blue

        if (!red && !green && blue && saturation) {
          return color.blue > 127 && color.saturation > 50;
        }
        //three
        if (red && green && blue && !saturation) {
          return color.red > 127 && color.green > 127 && color.blue > 127;
        }
        if (red && !green && blue && saturation) {
          return color.red > 127 && color.blue > 127 && color.saturation > 50;
        }
        if (red && green && !blue && saturation) {
          return color.red > 127 && color.green > 127 && color.saturation > 50;
        }

        //
        if (!red && green && blue && saturation) {
          return color.green > 127 && color.blue > 127 && color.saturation > 50;
        }
      })
    );
  }, [ctx.colors, red, green, blue, saturation]);

  const filterRed = () => {
    setRed(!red);
  };
  const filterGreen = () => {
    setGreen(!green);
  };
  const filterBlue = () => {
    setBlue(!blue);
  };
  const filterSaturation = () => {
    setSaturation(!saturation);
  };
  return (
    <div className="colorsList_container">
      <h3 className="filterOptions_title">FilterOptions</h3>
      <div className="filterOption_container">
        <button
          type="button"
          onClick={filterRed}
          className={red ? "radio_button radio_button_checked" : "radio_button"}
        >
          {`Red > 50%`}
        </button>

        <button
          type="button"
          onClick={filterGreen}
          className={
            green ? "radio_button radio_button_checked" : "radio_button"
          }
        >
          {`Green > 50%`}
        </button>

        <button
          type="button"
          onClick={filterBlue}
          className={
            blue ? "radio_button radio_button_checked" : "radio_button"
          }
        >
          {`Blue > 50%`}
        </button>

        <button
          type="button"
          onClick={filterSaturation}
          className={
            saturation ? "radio_button radio_button_checked" : "radio_button"
          }
        >
          {`Saturation > 50%`}
        </button>
      </div>

      {filteredColors.map((color) => (
        <div
          className="colorCard_container"
          key={color.red + color.green + color.blue}
        >
          {!ctx.defaultColors.includes(color) && (
            <svg
              onClick={() => {
                ctx.removeColor(color.red, color.green, color.blue);
              }}
              className="delete_color"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          <div
            className="colorPreview"
            style={{
              backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
            }}
          />
          <div className="colorNames_container">
            <div className="color_box">
              <h5 className="colorsFormatType">RGB</h5>
              <p className="colorValue">
                rgb({color.red},{color.green},{color.blue})
              </p>
            </div>
            <div className="color_box">
              <h5 className="colorsFormatType">HEX</h5>
              <p className="colorValue">
                {RgbToHex(color.red, color.green, color.blue)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorsList;
