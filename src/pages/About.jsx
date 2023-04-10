import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { PostList } from "../assets/data/PostList";
import { SkillList } from "../assets/data/SkillList";
import SpringContainer from "../components/SpringContainer";
import michy from "../assets/pictures/michy.webp";

//Profile Pic
import { ProfilePicture } from "../assets/pictures/ProfilePicture";

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  const [visibleText, setvisibleText] = useState("coding");
  const [hidden, setHidden] = useState(true);
  const { opacity } = useSpring({
    config: { duration: 1000 },
    opacity: hidden ? 0 : 1,
  });

  const [showImage, setShowImage] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowImage(true);
  };

  useEffect(() => {
    setHidden(false);
  }, [setHidden]);

  const trailItems = [
    <div className="font-noto">
      {/* ----- ITEM 1 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">
          <Text tid="whoIamHeading" />
        </p>
      </div>
      <div className="p-2 mt-6 flex flex-col md:flex-row items-center mb-12">
        <div className="justify-self-start self-center h-40 w-full flex items-center justify-center">
          <ProfilePicture />
        </div>
        <p className="font-semibold tracking-tight leading-7 text-justify md:p-4 md:ml-10 inline-flex">
          <Text tid="whoIamText1" />
          <br />
          <Text tid="whoIamText2" />
          <br />
        </p>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 2 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">
          <Text tid="passions" />
        </p>
      </div>
      <div className="p-2 mt-6 mb-12 w-full flex flex-row border-2 border-gray-800 rounded-lg shadow-xl">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row flex-wrap w-full justify-around items-center font-bold tracking-wide text-2xl uppercase">
            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("coding")}
            >
              <i className="icon-code text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500" />
              <Text tid="codingHeading" />
            </div>

            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </p>
            </div>

            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("writing")}
            >
              <i className="icon-book text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500" />
              <Text tid="writingHeading" />
            </div>
            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              {PostList.map((post) => (
                <>
                  <div className="w-auto h-auto">
                    <div className="w-full h-full px-4 flex flex-row items-center justify-center">
                      <img
                        className="transition duration-200 ease-in-out"
                        src={post.coverURL}
                        alt={post.name}
                      />
                    </div>
                  </div>
                  <a
                    href={post.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mt-2 mb-10 flex flex-row items-center justify-center mx-auto bg-blue-400 h-10 w-32 rounded-xl p-4 text-white">
                      <p className="font-semibold text-base tracking-wide">
                        <Text tid="readNow" />
                      </p>
                    </div>
                  </a>
                </>
              ))}
            </div>
            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("pets")}
            >
              <i className="icon-linux text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500" />
              <Text tid="petsHeading" />
            </div>
            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="petsText1" />
                <br />
                <Text tid="petsText2" />{" "}
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-2 mx-1 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
                  onClick={handleClick}
                >
                  Michy.
                  <br />
                </button>
                {showImage && (
                  <div className="flex items-center justify-center md:items-start md:justify-start">
                    <img className="w-full md:w-56" src={michy} alt="michy" />
                  </div>
                )}
                <Text tid="petsText3" />
                <br />
                <Text tid="petsText4" />
                <br />
                <Text tid="petsText5" />
                <br />
                <br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="petsText6" />
                  &quot;
                </p>
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-row w-full justify-center px-12 py-4 font-semibold tracking-tight leading-7 text-justify">
            {visibleText === "coding" ? (
              <>
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </>
            ) : null}

            {visibleText === "writing" ? (
              <div className="w-full h-full">
                {/* DESKTOP VERSION */}
                <div className="mb-8 flex flex-row">
                  {PostList.map((post) => (
                    <>
                      <div className="w-auto h-auto flex items-center justify-center">
                        <div className="w-full h-full px-4 lg:px-24 flex flex-row items-end justify-center">
                          <div className="flex flex-col">
                            <img
                              className="transition duration-200 ease-in-out"
                              src={post.coverURL}
                              alt={post.name}
                            />
                            <a
                              href={post.linkURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="mt-2 mb-10 flex flex-row items-center justify-center mx-auto bg-blue-500 border-b-4 border-transparent hover:border-blue-700 transition-all duration-200 h-10 w-32 rounded-xl p-4 text-white">
                                <p className="font-semibold text-base tracking-wide">
                                  <Text tid="readNow" />
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ) : null}

            {visibleText === "pets" ? (
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="petsText1" />
                <br />
                <Text tid="petsText2" />{" "}
                <button
                  className="bg-blue-500 text-white font-bold px-2 mx-1 border-b-4 border-transparent border-blue-700 hover:border-blue-900 transition-all duration-200 rounded-full"
                  onClick={handleClick}
                >
                  Michy.
                  <br />
                </button>
                {showImage && (
                  <div className="flex items-center justify-center md:items-start md:justify-start">
                    <img className="w-full md:w-56" src={michy} alt="michy" />
                  </div>
                )}
                <Text tid="petsText3" />
                <br />
                <Text tid="petsText4" />
                <br />
                <Text tid="petsText5" />
                <br />
                <br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="petsText6" />
                  &quot;
                </p>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 3 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">
          <Text tid="skillsText" />
        </p>
      </div>
      <div className="text-white font-bold uppercase mt-6 w-full border-2 border-gray-800 rounded-lg flex flex-row flex-wrap justify-around items-center mb-12 shadow-xl">
        {SkillList.map((skill) => (
          <div className="m-4 h-12 w-32 border-transparent rounded-full flex flex-col justify-center items-center">
            {skill.logo}
          </div>
        ))}
      </div>
    </div>,
  ];

  const trail = useTrail(trailItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    w-full min-h-screen`}
    >
      <div className="w-full h-auto flex justify-center">
        <div className="p-4 lg:p-12 w-full flex flex-col">
          {!hidden ? (
            <animated.div style={{ opacity }}>
              <ul>
                {trail.map(({ opacity }, i) => {
                  return (
                    <animated.li style={{ opacity }} key={Math.random() * 1000}>
                      {trailItems[i]}
                    </animated.li>
                  );
                })}
              </ul>
            </animated.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
