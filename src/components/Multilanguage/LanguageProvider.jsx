import React, { useState, createContext } from "react";
import { languageOptions, dictionaryList } from "./Dictionary";

export const LanguageContext = createContext({
  userLanguage: "english",
  dictionary: dictionaryList.english,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState(() => {
    try {
      const storedLanguage = window.localStorage.getItem("userLanguage");
      if (storedLanguage && languageOptions[storedLanguage]) {
        return storedLanguage;
      }
      const browserLanguageRaw =
        typeof navigator !== "undefined" && navigator.language
          ? navigator.language
          : "";
      const browserLanguage = browserLanguageRaw.split("-")[0].toLowerCase();
      if (browserLanguage && languageOptions[browserLanguage]) {
        window.localStorage.setItem("userLanguage", browserLanguage);
        return browserLanguage;
      }
    } catch (error) {
      console.warn("Unable to resolve preferred language", error);
    }
    return "english";
  });

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "english";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("userLanguage", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
