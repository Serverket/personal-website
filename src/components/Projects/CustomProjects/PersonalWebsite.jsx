import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import { useSpring, animated } from "react-spring";
import { Text } from "../../Multilanguage/Text";
import { ThemeContext } from "../../DarkMode/ThemeProvider";
import Logo from "../,,/../../../assets/pictures/MyWebsite/Serverket_Logo.webp";

const features = [
  <Text tid="mmaFeature1" />,
  <Text tid="mmaFeature2" />,
  <Text tid="mmaFeature3" />,
];

export default function PersonalWebsite() {
  const { theme } = React.useContext(ThemeContext);

  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [hoveredFeaturesButton, setHoveredFeaturesButton] = useState(false);
  const [fade, setfade] = useState(false);

  const { opacity } = useSpring({
    config: { duration: 500 },
    opacity: fade ? 1 : 0,
  });

  return (
    <div className="mb-16 shadow-xl">
      {/* HEADING */}
      <div className="mb-1 flex flex-row justify-center items-center">
        <i className="icon-code text-5xl pb-1 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-2 text-2xl tracking-wide font-semibold`}
        >
          <Text tid="mmaHeading" />
        </h3>
      </div>
      <div className="flex flex-col border border-gray-800 rounded-xl">
        <div className="p-2 mt-2 flex flex-row flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl">
          <div className="w-full md:w-1/2 h-64 m-2 my-auto mx-auto">
            <div
              className="relative h-full w-full max-w-3xl rounded-lg border border-gray-900"
              onMouseEnter={() => setfade(true)}
              onMouseLeave={() => setfade(false)}
            >
              <animated.div
                style={{
                  config: { duration: 500 },
                  opacity: fade ? 0 : 1,
                }}
              >
                <div className="absolute top-0 w-full h-full">
                  <div className="flex flex-row justify-center items-center">
                    <img className="w-64" alt="Logo" src={Logo} />
                  </div>
                </div>
              </animated.div>

              {fade ? (
                <animated.div style={{ opacity }}>
                  <div className="absolute top-0 w-full h-full flex flex-row justify-center items-center">
                    <a
                      href="https://github.com/Serverket/personal-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`${
                          theme === "dark"
                            ? "text-white hover:text-teal-500"
                            : "text-gray-800 hover:text-blue-400"
                        } flex flex-row items-center cursor-pointer`}
                      >
                        <i className="icon-github-circled text-6xl object-center" />
                        <p className="ml-2 font-semibold">
                          <Text tid="viewSource" />
                        </p>
                      </div>
                    </a>
                  </div>
                </animated.div>
              ) : null}
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-full md:w-1/3 mx-auto m-2">
            <div
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } w-full h-full flex flex-col justify-center`}
            >
              {/* CONTAINER FOR MOBILE GITHUB / LIVE VERSION, HIDDEN >md breakpoint*/}
              <div className="md:hidden mt-8 mb-4 flex flex-row justify-evenly">
                <div className="hover:text-gray-500 cursor-pointer">
                  {/* GITHUB */}
                  <a
                    className="flex flex-col items-center "
                    href="https://github.com/Serverket/personal-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github-circled text-6xl object-center" />
                    <p className="my-1 font-semibold">
                      <Text tid="viewSource" />
                    </p>
                  </a>
                </div>
              </div>

              <p className="my-2 text-sm text-center font-semibold uppercase tracking-wide">
                <Text tid="technologiesUsed" />
              </p>
              <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white"
                    alt="html"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white"
                    alt="css"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white"
                    alt="javascript"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white"
                    alt="react"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-Node-311701?style=for-the-badge&color=1e1e2e&logo=node.js&logoColor=white"
                    alt="node"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-Express-311701?style=for-the-badge&color=1e1e2e&logo=express&logoColor=white"
                    alt="express"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-TailwindCSS-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white"
                    alt="tailwindcss"
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    src="https://img.shields.io/badge/-Vercel-311701?style=for-the-badge&color=1e1e2e&logo=vercel&logoColor=white"
                    alt="vercel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 mx-16 border border-gray-900" />
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } mb-4 flex flex-row justify-center content-center`}
        >
          <div
            className="w-auto cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredFeaturesButton(true)}
            onMouseLeave={() => setHoveredFeaturesButton(false)}
            onClick={() => setMoreInfoVisible(!moreInfoVisible)}
          >
            {!moreInfoVisible ? (
              <div>
                <i className="icon-down-open text-lg mr-1" />
                <span className="text-lg mr-1 font-semibold uppercase my-auto">
                  <Text tid="more" />
                </span>
              </div>
            ) : (
              <div>
                <i className="icon-up-open text-lg mr-1" />
                <span className="text-lg mr-1 font-semibold uppercase my-auto">
                  <Text tid="less" />
                </span>
              </div>
            )}
            <Transition
              show={hoveredFeaturesButton}
              enter="transition-all duration-200"
              enterFrom="w-0 opacity-0"
              enterTo="w-11/12 mx-auto opacity-100"
              leave="transition-all duration-200"
              leaveFrom="w-11/12 opacity-100"
              leaveTo="w-0 mx-auto opacity-0"
            >
              <div className="w-11/12 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500" />
            </Transition>
          </div>
        </div>

        {moreInfoVisible ? (
          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } flex flex-col items-center`}
          >
            <div className="mt-2 w-full">
              <div className="flex flex-row justify-center mx-auto my-4">
                <i className="icon-map-o text-lg mr-1" />
                <span className="text-lg text-blue-500 font-semibold uppercase my-auto">
                  <Text tid="aboutProject" />
                </span>
              </div>
              <div className="w-full text-md font-semibold px-8 md:px-16 text-justify">
                <Text tid="aboutMma1" />
                <br />
                <Text tid="aboutMma2" />
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center w-full">
              <i className="icon-sliders text-lg mr-1" />
              <span className="text-lg text-blue-500 font-semibold uppercase my-auto">
                <Text tid="features" />
              </span>
            </div>
            <ul className="w-full pb-4 grid grid-cols-1 lg:grid-cols-3 text-center text-sm font-semibold">
              {features.map((item) => (
                <li className="m-4 mx-auto text-md">
                  <i className="icon-ok-circled text-md mr-1 mx-2 my-auto" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
