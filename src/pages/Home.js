import React from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import ParticleBackgroundMobile from "../components/ParticleBackgroundMobile";
import useWindowDimensions from "../components/hooks/getWindowDimensions";
import { Text } from "../components/Multilanguage/Text";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { CTAbutton } from "../components/CTAbutton";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  const { width } = useWindowDimensions();
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="w-full min-h-screen font-lato">
      {width >= 800 ? <ParticleBackground /> : <ParticleBackgroundMobile />}

      <div className="absolute w-full h-screen flex justify-center pointer-events-none">
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } px-8 md:px-0 mt-32 md:mt-40 mx-auto flex flex-col pointer-events-none`}
        >
          <div className="self-center">
            <p className="text-5xl leading-none">Hello friend, </p>
            <p className="text-6xl font-bold">
              <Text tid="homeName" />
            </p>
          </div>

          <div className="mt-2 self-center">
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-neutral-800"
              } text-xl font-semibold tracking-wider uppercase`}
            >
              Frontend Web Developer
            </p>
            <p className="text-neutral-600 text-lg font-semibold text-justify">
              <Text tid="homeFrom" />
            </p>
          </div>

          <div
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            } mt-8 px-4 text-lg font-semibold tracking-wider text-center`}
          >
            <Text tid="homeAbout1" />
            <br />
            <Text tid="homeAbout2" />
          </div>
          <CTAbutton />
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText={<Text tid="cookieAccept" />}
        cookieName="consentcookie"
        style={{ background: "#070707", borderTop: "2px solid gray" }}
        buttonStyle={{ color: "#000000", fontSize: "16px" }}
        expires={150}
      >
        <Text tid="cookieText1" />{" "}
        <Link className="ml-2 text-sm underline" to="/ImprintPrivacyPolicy">
          <Text tid="cookieText2" />
        </Link>
      </CookieConsent>
    </div>
  );
}
