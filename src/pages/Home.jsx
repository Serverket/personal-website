import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { CTAbutton } from "../components/CTAbutton";
import Bg from "../assets/pictures/nebula.webm";

export default function Home() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Bg} type="video/webm" />
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="Video background of a colourful looping animation with no sound" />
        <track src="captions_es.vtt" kind="captions" srcLang="es" label="Fondo de video de una colorida animación en bucle sin sonido" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full flex-grow relative z-10 overflow-hidden font-noto">
        <div className="relative flex justify-center pointer-events-none h-full">
          <div
            className={`${theme === "dark" ? "text-white" : "text-white"
              } px-8 md:px-0 mt-12 md:mt-40 mx-auto flex flex-col pointer-events-none z-20`}
          >
            <div className="self-center">
              <p className="text-4xl sm:text-5xl leading-none">
                <Text tid="homeGreeting" />
              </p>
              <p className="text-6xl font-bold">
                <Text tid="homeName" />{" "}
                <span className="underline decoration-teal-400">Serverket</span>
              </p>
            </div>
            <div className="mt-2 self-center">
              <p
                className={`${theme === "dark" ? "text-neutral-300" : "text-neutral-300"
                  } text-xl font-semibold tracking-wider uppercase`}
              >
                Frontend Web Developer
              </p>
              <p className="text-neutral-500 text-lg font-semibold text-justify">
                <Text tid="homeFrom" />
              </p>
            </div>
            <div
              className={`${theme === "dark" ? "text-gray-400" : "text-gray-400"
                } mt-4 sm:mt-8 px-4 text-md sm:text-lg font-semibold tracking-wider text-center`}
            >
              <Text tid="homeAbout1" />
              <br />
              <Text tid="homeAbout2" />
            </div>
            <CTAbutton />
          </div>
        </div>
      </div>
    </>
  );
}
