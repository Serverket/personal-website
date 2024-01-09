// "Call To Action" Button on the main page.
// Text: "Take a look at my work ->"

import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./Multilanguage/Text";
import { ThemeContext } from "./DarkMode/ThemeProvider";

export function CTAbutton() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <Link to="/projects">
        <button
          className={`${
            theme === "dark"
              ? "hover:bg-teal-400 text-white border-white"
              : "hover:bg-white hover:text-black text-white border-white"
          } mt-8 md:mt-20 mx-auto p-4 h-16 w-48 rounded-full border-2 flex flex-row items-center justify-center pointer-events-auto cursor-pointer transition duration-300 ease-in-out`}
          role="button"
          aria-label="Go to 'My Work' page"
        >
          <p className="text-sm text-center font-semibold uppercase tracking-tight filter drop-shadow-md">
            <Text tid="homeButtonText" />
          </p>
          <i className="w-3 dark:text-white icon-right-open-3" />
        </button>
      </Link>
    </>
  );
}
