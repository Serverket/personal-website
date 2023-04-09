import React, { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageProvider";

export function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  useEffect(() => {
    let userLanguage = window.localStorage.getItem("userLanguage");
    if (!userLanguage) {
      userLanguage = "english";
    }
    userLanguageChange(userLanguage);
  }, [userLanguageChange]);

  return (
    <div className="ml-2 flex flex-row text-sm font-semibold">
      <span
        className={`mr-px text-xl text-teal-400 ${
          userLanguage === "english" ? null : "cursor-pointer opacity-50"
        }`}
        onClick={() => userLanguageChange("english")}
        role="img"
        aria-label="american-flag"
      >
        🇺🇸
      </span>

      <div className="mx-1 h-4 my-auto w-px border-l border-neutral-700" />

      <span
        className={`ml-px text-xl text-teal-400 ${
          userLanguage === "spanish" ? null : "cursor-pointer opacity-50"
        }`}
        onClick={() => userLanguageChange("spanish")}
        role="img"
        aria-label="spanish-flag"
      >
        🇪🇸
      </span>
    </div>
  );
}
