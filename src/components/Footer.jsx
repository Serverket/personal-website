import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./DarkMode/ThemeProvider";
import { Text } from "./Multilanguage/Text";

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "text-white bg-black" : "text-black bg-white"
      } py-2 border-t border-gray-900 pl-4 pr-4 z-50`}
    >
      <div className="text-xs w-full h-full relative flex flex-row justify-evenly">
        <div className="flex flex-row justify-center items-center">
          <Link to="/imprintprivacypolicy">
            <Text tid="imprintPrivacyPolicy" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          {`© ${new Date().getFullYear()}`} Manuel "Serverket" Hernandez
        </div>
      </div>
    </div>
  );
}
