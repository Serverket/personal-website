import React from "react";
import { ThemeContext } from "./ThemeProvider";

export function ThemeSelector() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      {theme === "dark" ? (
        <i
          className="icon-sun-inv text-lg text-white hover:text-teal-400 cursor-pointer transition-all duration-150"
          onClick={() => setTheme("light")}
        />
      ) : (
        <i
          className="icon-moon text-lg text-gray-800 hover:text-teal-400 cursor-pointer transition-all duration-150"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
