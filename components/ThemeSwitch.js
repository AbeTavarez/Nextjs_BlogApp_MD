import { useState, useEffect } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  // (ssr) -> check if localStorage is available
  if (typeof localStorage === "undefined") return false;
  // read value from localStorage client side
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  // state for the dark mode switch
  const [darkMode, setDarkMode] = useState(false);
  // loadDarkMode is called in the useEffect during hydration phase
  useEffect(() => setDarkMode(loadDarkMode), []);
  // button text for dark mode switch
  const text = darkMode ? "Light Mode" : "Dark Mode";
  // event handler for switching dark mode
  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <>
      <button onClick={handleClick} suppressContentEditableWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
