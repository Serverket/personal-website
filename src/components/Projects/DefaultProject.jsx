import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Transition } from "@tailwindui/react";
import { Text } from "../Multilanguage/Text";
import { ThemeContext } from "../DarkMode/ThemeProvider";

const DefaultProject = (props) => {
  const { theme } = React.useContext(ThemeContext);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [hoveredFeaturesButton, setHoveredFeaturesButton] = useState(false);

  const {
    name,
    imageFront,
    imageBack,
    githubLink,
    lockIcon,
    liveVersionLink,
    showLiveVersion = true,
    sourceLabelTid = "viewSource",
    projectShortDescription,
    aboutProjectText,
    features,
    techStack,
  } = props;
  const shouldShowLiveButton = showLiveVersion && Boolean(liveVersionLink);

  return (
    <div className="mb-16 rounded-xl shadow-xl">
      {/* HEADING */}
      <div className="flex flex-row justify-center items-center mb-1">
        <i className="pb-1 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500 icon-code" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-4 text-2xl tracking-wide font-semibold`}
        >
          {name}
        </h3>
      </div>
      <div className="flex flex-col rounded-xl border border-gray-800">
        <div className="flex flex-row flex-wrap p-2 mt-2 min-w-full max-w-6xl h-auto md:flex-no-wrap">
          <div className="m-2 mx-auto my-auto w-full h-64 md:w-1/2">
            {/* IMAGE */}

            <div
              className="relative w-full max-w-3xl h-full rounded-lg"
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
            >
              <animated.div
                className="object-cover absolute w-full h-full rounded-lg"
                style={{
                  opacity: opacity.to((o) => 1 - o),
                  transform,
                }}
              >
                {/* IMAGE FRONT */}
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={imageFront}
                  alt="overview"
                />
              </animated.div>
              <animated.div
                className="absolute w-full h-full rounded-lg"
                style={{
                  opacity,
                  transform: transform.to((t) => `${t} rotateX(180deg)`),
                }}
              >
                {/* IMAGE BACK, WITH LINKS TO PROJECT */}
                <div>
                  <img
                    className="object-cover absolute w-full h-full rounded-lg opacity-50"
                    src={imageBack}
                    alt="login"
                  />
                  <div className="flex absolute flex-col justify-center w-full h-full">
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-evenly">
                        <div
                          className={`${
                            theme === "dark"
                              ? "text-white hover:text-blue-400"
                              : "text-gray-800 hover:text-blue-400"
                          } cursor-pointer`}
                        >
                          {/* GITHUB */}
                          <a
                            className="flex flex-col items-center"
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="object-center text-6xl icon-github-circled" />
                            <p className="mt-1 font-semibold">
                             <i className={lockIcon} /><Text tid={sourceLabelTid} />
                            </p>
                          </a>
                        </div>

                        {shouldShowLiveButton ? (
                          <div
                            className={`${
                              theme === "dark"
                                ? "text-white hover:text-blue-400"
                                : "text-gray-800 hover:text-blue-400"
                            } cursor-pointer`}
                          >
                            {/* LIVE VERSION INCL. POPOVER FOR CREDENTIALS */}
                            <a
                              className="flex flex-col items-center"
                              href={liveVersionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="object-center text-6xl icon-coverflow" />
                              <p className="mt-1 font-semibold">
                                <Text tid="viewLiveVersion" />
                              </p>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="m-2 mx-auto w-full md:w-1/3">
            <div
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } w-full h-full flex flex-col justify-center`}
            >
              {/* CONTAINER FOR MOBILE GITHUB / LIVE VERSION, HIDDEN >md breakpoint*/}
              <div className="flex flex-row justify-evenly mt-8 mb-4 md:hidden">
                <div className="cursor-pointer hover:text-gray-500">
                  {/* GITHUB */}
                  <a
                    className="flex flex-col items-center"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="object-center text-6xl icon-github-circled" />
                    <p className="my-1 font-semibold">
                    <i className={lockIcon} /><Text tid={sourceLabelTid} />
                    </p>
                  </a>
                </div>

                {shouldShowLiveButton ? (
                  <div className="hover:text-gray-500">
                    {/* LIVE VERSION */}
                    <a
                      className="flex flex-col items-center cursor-pointer"
                      href={liveVersionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="object-center text-6xl icon-coverflow" />
                      <p className="my-1 font-semibold">
                        <Text tid="viewLiveVersion" />
                      </p>
                    </a>
                  </div>
                ) : null}
              </div>

              <p className="mt-4 text-xl font-semibold tracking-wide text-center text-blue-500 uppercase">
                {projectShortDescription}
              </p>
              <p className="mt-8 mb-2 text-sm font-semibold tracking-wide text-center uppercase">
                <Text tid="technologiesUsed" />
              </p>
              <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                {techStack
                  ? techStack.map((item, index) => (
                      <div
                        key={item.name ? `${name}-tech-${item.name}` : `${name}-tech-${index}`}
                        className="flex flex-col items-center mx-4 my-4 text-center"
                      >
                        {item.logo}
                        <div className="flex flex-col text-center">
                          <p className="mt-1 text-xl">{item.name}</p>
                          {item.subtexts
                            ? item.subtexts.map((subtext, subIndex) => (
                                <p
                                  key={`${item.name || `tech-${index}`}-sub-${subIndex}`}
                                  className="mt-1 text-xs"
                                >
                                  {subtext}
                                </p>
                              ))
                            : null}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 my-4 border border-gray-900" />
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } mb-4 flex flex-row justify-center content-center`}
        >
          <div
            className="w-auto transition duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1"
            onMouseEnter={() => setHoveredFeaturesButton(true)}
            onMouseLeave={() => setHoveredFeaturesButton(false)}
            onClick={() => setMoreInfoVisible(!moreInfoVisible)}
          >
            {!moreInfoVisible ? (
              <div>
                <i className="mr-1 text-lg icon-down-open" />
                <span className="my-auto mr-1 text-lg font-semibold uppercase">
                  <Text tid="more" />
                </span>
              </div>
            ) : (
              <div>
                <i className="mr-1 text-lg icon-up-open" />
                <span className="my-auto mr-1 text-lg font-semibold uppercase">
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
              <div className="mx-auto w-11/12 h-px bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 transition duration-300 ease-in-out" />
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
                <i className="mr-1 text-lg icon-map-o" />
                <span className="my-auto text-lg font-semibold text-blue-500 uppercase">
                  <Text tid="aboutProject" />
                </span>
              </div>
              <div className="px-8 w-full font-semibold text-justify text-md md:px-16">
                {aboutProjectText}
              </div>
            </div>

            <div className="flex flex-row justify-center mt-12 w-full">
              <i className="mr-1 text-lg icon-sliders" />
              <span className="my-auto text-lg font-semibold text-blue-500 uppercase">
                <Text tid="features" />
              </span>
            </div>
            <ul className="grid grid-cols-1 pb-4 w-full text-sm font-semibold text-center lg:grid-cols-3">
              {features.map((item, index) => (
                <li className="m-4 mx-auto text-md" key={`${name}-feature-${index}`}>
                  <i className="mx-2 my-auto mr-1 icon-ok-circled text-md" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DefaultProject;
