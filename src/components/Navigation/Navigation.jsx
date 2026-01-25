import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { Text } from "../Multilanguage/Text";
import { LanguageSelector } from "../Multilanguage/LanguageSelector";
import { ThemeSelector } from "../DarkMode/ThemeSelector";
import { useSpring, useTrail, animated } from "react-spring";
import { ThemeContext } from "../DarkMode/ThemeProvider";

export default function Navigation() {
  const [hidden, setHidden] = useState(true);
  const [settingsVisible, setsettingsVisible] = useState(false);
  const [hoveredGithub, setHoveredGithub] = useState(false);
  const [hoveredProjects, setHoveredProjects] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(false);
  const { theme } = React.useContext(ThemeContext);

  const { opacity } = useSpring({
    config: { duration: 600 },
    opacity: hidden ? 0 : 1,
  });

  const { xyz } = useSpring({
    xyz: settingsVisible ? [0, 0, 0] : [0, 0, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setHidden(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setHidden((prev) => !prev);

  const handleMenuKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileMenu();
    }
  };

  //items for react-spring to map over (for trailing), mobile version
  const mobileNavItems = [
    <div className="flex z-50 flex-row justify-center items-center px-8 mx-auto mt-4 w-full h-12">
      <ThemeSelector />
      <LanguageSelector />
    </div>,

    <a
      href="https://github.com/Serverket"
      target="_blank"
      rel="noopener noreferrer"
      className="z-50 justify-center items-center px-3 py-2 w-full rounded text-neutral-300"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        Github
      </span>
    </a>,

    <Link
      to="/projects"
      className="z-50 justify-center items-center px-3 py-2 w-full text-gray-300 rounded"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navProjects" />
      </span>
    </Link>,

    <Link
      to="/about"
      className="z-50 justify-center items-center px-3 py-2 w-full text-gray-300 rounded"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navAbout" />
      </span>
    </Link>,

    <Link
      to="/contact"
      className="z-50 justify-center items-center px-3 py-2 w-full text-gray-300 rounded"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navContact" />
      </span>
    </Link>,
  ];
  const trail = useTrail(mobileNavItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div className="z-50 border-b border-gray-800 shadow-xl">
      <nav
        className={`${
          theme === "dark" ? "bg-black" : "bg-white"
        } flex items-center p-3 flex-wrap transition duration-300 ease-in-out z-50`}
      >
        <Link to="/" className="inline-flex z-50 items-center ml-2">
          <div className="flex justify-center items-center w-16 h-16">
            <img
              className="w-8 hover:animate-pulse"
              src="/android-chrome-192x192.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex z-50 flex-col justify-center items-start ml-1">
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-xl uppercase font-bold tracking-tighter leading-none z-50`}
          >
            Manuel
            <div className="inline-flex mx-1 w-1 h-1 bg-teal-400" />
            Hernandez
          </h1>
          <h1
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } text-md tracking-wider leading-none`}
          >
            <Text tid="navRole" />
          </h1>
        </div>

        <button
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } inline-flex p-3 rounded lg:hidden ml-auto outline-none nav-toggler z-50`}
          type="button"
          onClick={toggleMobileMenu}
          onKeyDown={handleMenuKeyDown}
          tabIndex="0"
          role="button"
          aria-expanded={!hidden}
          aria-label={hidden ? "Open menu" : "Close menu"}
        >
          <i className="text-xl icon-menu" />
        </button>

        {/* DESKTOP VERSION */}
        <div className="hidden z-50 lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <a
              onMouseEnter={() => setHoveredGithub(true)}
              onMouseLeave={() => setHoveredGithub(false)}
              href="https://github.com/Serverket"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
            >
              <span className="font-semibold uppercase text-md">Github</span>

              <Transition
                show={hoveredGithub}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="mx-auto w-11/12 h-px bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 transition duration-300 ease-in-out" />
              </Transition>
            </a>

            <Link
              onMouseEnter={() => setHoveredProjects(true)}
              onMouseLeave={() => setHoveredProjects(false)}
              to="/projects"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
            >
              <span className="font-semibold uppercase text-md">
                <Text tid="navProjects" />
              </span>

              <Transition
                show={hoveredProjects}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="mx-auto w-11/12 h-px bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 transition duration-300 ease-in-out" />
              </Transition>
            </Link>

            <Link
              onMouseEnter={() => setHoveredAbout(true)}
              onMouseLeave={() => setHoveredAbout(false)}
              to="/about"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
            >
              <span className="pl-2 font-semibold uppercase text-md">
                <Text tid="navAbout" />
              </span>

              <Transition
                show={hoveredAbout}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="mx-auto w-2/3 h-px bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 transition duration-300 ease-in-out" />
              </Transition>
            </Link>

            <Link
              onMouseEnter={() => setHoveredContact(true)}
              onMouseLeave={() => setHoveredContact(false)}
              to="/contact"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
            >
              <span className="font-semibold uppercase text-md">
                <Text tid="navContact" />
              </span>

              <Transition
                show={hoveredContact}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="mx-auto w-11/12 h-px bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 transition duration-300 ease-in-out" />
              </Transition>
            </Link>

            <ThemeSelector />

            <div className="z-50 mx-2 w-2 h-4 border-l border-gray-700" />
            <div className="z-50 mx-2">
              {!settingsVisible ? (
                <i
                  onClick={() => setsettingsVisible(!settingsVisible)}
                  className={`${
                    theme === "dark"
                      ? "text-white hover:text-teal-400"
                      : "text-gray-800 hover:text-teal-400"
                  } icon-language text-lg cursor-pointer transition-all duration-150`}
                  role="button"
                  aria-expanded="false"
                  aria-label="Open language selector"
                />
              ) : (
                <i
                  onClick={() => setsettingsVisible(!settingsVisible)}
                  className={`${
                    theme === "dark"
                      ? "text-white hover:text-gray-600"
                      : "text-gray-800 hover:text-gray-500"
                  } icon-cancel-circle text-md cursor-pointer transition-all duration-150`}
                  role="button"
                  aria-expanded="false"
                  aria-label="Close language selector"
                />
              )}
            </div>
            {settingsVisible ? (
              <animated.div
                className="flex z-50 flex-row items-center"
                style={{
                  transform: xyz.to(
                    (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
                  ),
                }}
              >
                <LanguageSelector />
              </animated.div>
            ) : null}
          </div>
        </div>

        {/* MOBILE VERSION */}
        {!hidden ? (
          <animated.div
            style={{ opacity }}
            className={`${
              theme === "dark" ? "text-white bg-black" : "text-black bg-white"
            } w-full flex justify-center bg-black bg-opacity-75 pb-4 z-50`}
            id="mobile-navigation"
          >
            <ul>
              {trail.map(({ opacity }, i) => {
                const item = mobileNavItems[i];
                return (
                  <animated.li style={{ opacity }} key={Math.random() * 1000}>
                    <div className="flex z-50 flex-col w-full font-semibold text-center uppercase">
                      {item}
                    </div>
                  </animated.li>
                );
              })}
            </ul>
          </animated.div>
        ) : null}
      </nav>
    </div>
  );
}
