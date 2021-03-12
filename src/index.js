import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const themes = {
  light: {
    foreground: "lightpink",
    background: "lightslategrey",
  },
  dark: {
    foreground: "darkred",
    background: "darkolivegreen",
  },
};

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
    console.log("theme toggled to", nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
