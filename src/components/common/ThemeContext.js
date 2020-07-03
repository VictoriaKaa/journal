import React, { useState, useLayoutEffect } from "react";
import lightjpg from "../../img/76901.jpg";
import darkjpg from "../../img/4f39.jpg";
import pasteljpg from "../../img/3725771.jpg";
import { themes } from "../../constants";


const ThemeContext = React.createContext({
  theme: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.pastelTheme);

  useLayoutEffect(() => {
    switch (theme) {
      case "darkTheme":
        setTheme(themes.darkTheme);
        applyTheme(darkTheme);
        break;
      case "lightTheme":
        setTheme(themes.lightTheme);
        applyTheme(lightTheme);
        break;
      case "pastelTheme":
        setTheme(themes.pastelTheme);
        applyTheme(pastelTheme);
        break;
      default:
        break;
    }
  }, [theme]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = (name) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
    switch (name) {
      case "darkTheme":
        setTheme(themes.darkTheme);
        break;
      case "lightTheme":
        setTheme(themes.lightTheme);
        break;
      case "pastelTheme":
        setTheme(themes.pastelTheme);
        break;
      default:
        break;
    }
    window.localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

const pastelTheme = [
  "--main-color: #c86b85",
  "--main-block-color: 200, 107, 133",
  "--light-pink-color: #e6a4b4",
  "--light-pink-rgb-color: 230, 164, 180",
  "--navbar-color: #f3d7ca",
  "--navbar-block-color: 243, 215, 202",
  "--navbar-dark-color: #361e0b",
  "--light-text-color: #f5eee6",
  "--text-color: #ffdad1",
  "--border-color: #91495e",
  "--dark-border-color: #6e0a33",
  "--btn-color: #633240",
  "--month-btn-color: #7d3e50",
  "--red-hover-color: #de0430",
  "--week-color: #962f06",
  "--week-btn-color: #592e3f",
  "--week-bc-color: #e8dfc8",
  "--tracker-color: #bf5c78",
  `--bc-image: url(${pasteljpg})`,
];

const darkTheme = [
  "--main-color: #27496d",
  "--main-block-color: 39, 73, 109",
  "--light-pink-color: #00909e",
  "--light-pink-rgb-color: 0, 144, 158",
  "--navbar-color: #006485",
  "--navbar-block-color: 0, 128, 171",
  "--navbar-dark-color: #361e0b",
  "--light-text-color: #DAE1E7",
  "--text-color: #AEB4BA",
  "--border-color: #00254B",
  "--dark-border-color: #001E35",
  "--btn-color: #576980",
  "--month-btn-color: #BABFC3",
  "--red-hover-color: #ffe0ac",
  "--week-color: #95999D",
  "--week-btn-color: #015c8a",
  "--week-bc-color: #001E35",
  "--tracker-color: #182E35",
  `--bc-image: url(${darkjpg})`,
];

// const darkTheme = [
//   "--main-color: #27496d",
//   "--main-block-color: 39, 73, 109",
//   "--light-pink-color: #00909e",
//   "--light-pink-rgb-color: 0, 144, 158",
//   "--navbar-color: #006485",
//   "--navbar-block-color: 0, 100, 133",
//   "--navbar-dark-color: #361e0b",
//   "--light-text-color: #DAE1E7",
//   "--text-color: #AEB4BA",
//   "--border-color: #00254B",
//   "--dark-border-color: #001E35",
//   "--btn-color: #576980",
//   "--month-btn-color: #BABFC3",
//   "--red-hover-color: #ffe0ac",
//   "--week-color: #95999D",
//   "--week-btn-color: #015c8a",
//   "--week-bc-color: #001E35",
//   "--tracker-color: #182E35",
//   `--bc-image: url(${darkjpg})`,
// ];
// const lightTheme = [
//   "--main-color: #f8f8f8",
//   "--main-block-color: 248, 248, 248",
//   "--light-pink-color: #FFEC85",
//   "--light-pink-rgb-color: 255, 236, 133",
//   "--navbar-color: #FADFA6",
//   "--navbar-block-color: 253, 246, 216",
//   "--navbar-dark-color: #42281B",
//   "--light-text-color: #434343",
//   "--text-color: #2A2A2A",
//   "--border-color: #4F3624",
//   "--dark-border-color: #001E35",
//   "--btn-color: #F7C873",
//   "--month-btn-color: #4F4F4F",
//   "--red-hover-color: #b33000",
//   "--week-color: #AD8758",
//   "--week-btn-color: #986C3E",
//   "--week-bc-color: #FCE8AF",
//   "--tracker-color: #FEF3BA",
//   `--bc-image: url(${lightjpg})`,
// ];
const lightTheme = [
  "--main-color: #f8f8f8",
  "--main-block-color: 248, 248, 248",
  "--light-pink-color: #FFEC85",
  "--light-pink-rgb-color: 255, 236, 133",
  "--navbar-color: #FADFA6",
  "--navbar-block-color: 253, 246, 216",
  "--navbar-dark-color: #42281B",
  "--light-text-color: #434343",
  "--text-color: #2A2A2A",
  "--border-color: #4F3624",
  "--dark-border-color: #001E35",
  "--btn-color: #F7C873",
  "--month-btn-color: #4F4F4F",
  "--red-hover-color: #b33000",
  "--week-color: #AD8758",
  "--week-btn-color: #986C3E",
  "--week-bc-color: #FCE8AF",
  "--tracker-color: #FEF3BA",
  `--bc-image: url(${lightjpg})`,
];
