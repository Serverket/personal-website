import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../components/hooks/getWindowDimensions";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { CTAbutton } from "../components/CTAbutton";
import CookieConsent from "react-cookie-consent";
import Bg from "../assets/pictures/nebula.webm";

export default function Home() {
  const { width } = useWindowDimensions();
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="w-full min-h-screen font-noto">
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        className="absolute bg-no-repeat bg-black bg-cover bg-center w-screen h-screen object-cover z-0"
      >
        <source src={Bg} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full h-screen flex justify-center pointer-events-none">
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-white"
          } px-8 md:px-0 mt-12 md:mt-40 mx-auto flex flex-col pointer-events-none`}
        >
          <div className="self-center">
            <p className="text-5xl leading-none">Hello friend, </p>
            <p className="text-6xl font-bold">
              <Text tid="homeName" />{" "}
              <span className="underline decoration-teal-400">Serverket</span>
            </p>
          </div>

          <div className="mt-2 self-center">
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-neutral-300"
              } text-xl font-semibold tracking-wider uppercase`}
            >
              Frontend Web Developer
            </p>
            <p className="text-neutral-500 text-lg font-semibold text-justify">
              <Text tid="homeFrom" />
            </p>
          </div>

          <div
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-400"
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
