import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { PrivacyContext } from "../components/PrivacyContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { privacyAccepted, resetPrivacy } = useContext(PrivacyContext);

  return (
    <div
      className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } w-full flex-grow flex flex-col justify-center items-center font-noto`}
    >
      {privacyAccepted ? (
        <ContactForm />
      ) : (
        <div className="text-xl text-center px-8 md:px-40 py-20">
          <p className="pt-12">
            <Text tid="contactFormCookieText1" />
          </p>

          <p className="pt-12">
            <Text tid="contactFormCookieText3" />
            <span
              className="cursor-pointer underline text-blue-400"
              onClick={() => resetPrivacy()}
            >
              <Text tid="contactFormCookieText4" />
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
