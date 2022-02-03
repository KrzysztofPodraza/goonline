import React from "react";
import CalculateSaturation from "../functions/CalculateSaturation";

interface ColorRgbInterface {
  red: number;
  green: number;
  blue: number;
  saturation: number;
}
interface ColorsContextInterface {
  addColor: (red: number, green: number, blue: number) => void;
  removeColor: (red: number, green: number, blue: number) => void;
  colors: ColorRgbInterface[];
  defaultColors: ColorRgbInterface[];
}

export const ColorsContext = React.createContext<ColorsContextInterface>({
  addColor: () => {},
  removeColor: () => {},
  colors: [],
  defaultColors: [],
});

const ColorsContextProvider = (props: { children: React.ReactNode }) => {
  const defaultColors = [
    { red: 100, green: 100, blue: 100, saturation: 50 },
    { red: 200, green: 50, blue: 100, saturation: 50 },
    { red: 100, green: 100, blue: 70, saturation: 50 },
    { red: 90, green: 10, blue: 20, saturation: 50 },
    { red: 120, green: 255, blue: 10, saturation: 50 },
    { red: 120, green: 40, blue: 50, saturation: 50 },
    { red: 120, green: 200, blue: 255, saturation: 50 },
  ];
  const [colors, setColors] = React.useState<ColorRgbInterface[]>([]);
  const addColor = (red: number, green: number, blue: number) => {
    let isValid = true;
    for (let x in defaultColors) {
      if (
        defaultColors[x].red === red &&
        defaultColors[x].green === green &&
        defaultColors[x].blue === blue
      ) {
        isValid = false;
      }
    }
    for (let x in colors) {
      if (
        colors &&
        colors[x].red === red &&
        colors[x].green === green &&
        colors[x].blue === blue
      ) {
        isValid = false;
      }
    }

    if (isValid) {
      const saturation = CalculateSaturation(red, green, blue);
      setColors([...colors, { red, green, blue, saturation }]);
    }
  };
  const removeColor = (red: number, green: number, blue: number) => {
    let isValid = true;

    if (isValid) {
      setColors(
        colors.filter((color) => {
          return (
            color.red !== red && color.green !== green && color.blue !== blue
          );
        })
      );
    }
  };
  const objValue = {
    addColor: addColor,
    removeColor: removeColor,
    colors: colors,
    defaultColors: defaultColors,
  };
  return (
    <ColorsContext.Provider value={objValue}>
      {props.children}
    </ColorsContext.Provider>
  );
};
export default ColorsContextProvider;
