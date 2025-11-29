import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { PostList } from "../assets/data/PostList";
import { SkillList } from "../assets/data/SkillList";
import michy from "../assets/pictures/michy.webp";

//Profile Pic
import { ProfilePicture } from "../assets/pictures/ProfilePicture";

const FALLBACK_REPO_COVER = "/z-cover.png";

const WritingPostCard = ({ post, theme, buttonVariant = "solid" }) => {
  const isDark = theme === "dark";
  const cardBase = isDark
    ? "bg-gray-900/40 border border-gray-800 text-white"
    : "bg-white border border-gray-200 text-gray-900";

  const buttonClasses =
    "mt-2 mb-4 flex items-center justify-center mx-auto bg-blue-500 hover:border-b-4 border-transparent hover:border-blue-700 transition-all duration-200 h-10 w-32 rounded-xl p-4 text-white";

  const shadowStyles = isDark ? "shadow-blue-900/40" : "shadow-blue-200";

  return (
    <article
      className={`${cardBase} ${shadowStyles} flex h-full w-full max-w-[320px] flex-col items-center rounded-2xl p-3 text-center transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-4 mx-auto`}
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-gray-900/30 aspect-[4/3]">
        <img
          className="h-full w-full object-cover"
          src={post.coverURL}
          alt={post.name}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_REPO_COVER;
          }}
        />
      </div>
      <p className="mt-4 text-lg font-semibold">{post.name}</p>
      <div className="mt-auto pt-2 pb-1 w-full">
        <a
          href={post.linkURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${post.name} article`}
          className="inline-flex w-full justify-center"
        >
          <div className={buttonClasses}>
            <p className="font-semibold text-base tracking-wide normal-case">
              <Text tid="readNow" />
            </p>
          </div>
        </a>
      </div>
    </article>
  );
};

const WritingPostList = ({ theme, buttonVariant = "solid", className = "" }) => (
  <div
    className={`w-full max-w-6xl mx-auto grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${className}`}
  >
    {PostList.map((post) => (
      <WritingPostCard
        key={post.name}
        post={post}
        theme={theme}
        buttonVariant={buttonVariant}
      />
    ))}
  </div>
);

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
            <div className="md:hidden mb-8 w-full">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <WritingPostList theme={theme} buttonVariant="solid" />
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
                <div className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
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
                  <span className="block italic text-center">
                    &quot;
                    <Text tid="petsText6" />
                    &quot;
                  </span>
                </div>
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
              <div className="w-full">
                <WritingPostList
                  theme={theme}
                  buttonVariant="ghost"
                  className="mb-4"
                />
              </div>
            ) : null}

            {visibleText === "pets" ? (
              <div className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
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
                <span className="block italic text-center">
                  &quot;
                  <Text tid="petsText6" />
                  &quot;
                </span>
              </div>
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
        {SkillList.map((skill, index) => (
          <div
            key={skill.name ? `skill-${skill.name}` : `skill-${index}`}
            className="m-4 h-12 w-32 border-transparent rounded-full flex flex-col justify-center items-center"
          >
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
                {trail.map(({ opacity }, i) => (
                  <animated.li style={{ opacity }} key={`about-section-${i}`}>
                    {trailItems[i]}
                  </animated.li>
                ))}
              </ul>
            </animated.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
