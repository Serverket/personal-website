import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { ThemeContext } from "../DarkMode/ThemeProvider";
import { Text } from "../Multilanguage/Text";

const LANGUAGE_BADGES = {
  JavaScript:
    "https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white",
  TypeScript:
    "https://img.shields.io/badge/-TypeScript-311701?style=for-the-badge&color=1e1e2e&logo=typescript&logoColor=white",
  HTML:
    "https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white",
  CSS:
    "https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white",
  Python:
    "https://img.shields.io/badge/-Python-311701?style=for-the-badge&color=1e1e2e&logo=python&logoColor=white",
  Java:
    "https://img.shields.io/badge/-Java-311701?style=for-the-badge&color=1e1e2e&logo=coffeescript&logoColor=white",
  Go:
    "https://img.shields.io/badge/-Go-311701?style=for-the-badge&color=1e1e2e&logo=go&logoColor=white",
  Ruby:
    "https://img.shields.io/badge/-Ruby-311701?style=for-the-badge&color=1e1e2e&logo=ruby&logoColor=white",
  PHP:
    "https://img.shields.io/badge/-PHP-311701?style=for-the-badge&color=1e1e2e&logo=php&logoColor=white",
  Shell:
    "https://img.shields.io/badge/-Shell-311701?style=for-the-badge&color=1e1e2e&logo=powershell&logoColor=white",
};

const CACHE_KEY = "latestReposCache";
const CACHE_DURATION_MS = 1000 * 60 * 30; // 30 minutes
let inMemoryCache = { timestamp: 0, data: null };

const isCacheValid = (entry) =>
  entry && Array.isArray(entry.data) && Date.now() - entry.timestamp < CACHE_DURATION_MS;

const readCachedRepos = () => {
  if (isCacheValid(inMemoryCache)) {
    return inMemoryCache;
  }

  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (isCacheValid(parsed)) {
      inMemoryCache = parsed;
      return parsed;
    }
    window.localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.warn("Failed to parse cached repos", error);
    window.localStorage.removeItem(CACHE_KEY);
  }

  return null;
};

const writeCachedRepos = (data) => {
  const entry = { timestamp: Date.now(), data };
  inMemoryCache = entry;

  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch (error) {
    console.warn("Failed to cache latest repos", error);
  }
};

const LatestRepos = () => {
  const { theme } = React.useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [loading, setLoading] = useState(true);

  const handleCardTap = (repoId, e) => {
    if (e.target.closest('a')) return;
    setFlipped((prev) => ({ ...prev, [repoId]: !prev[repoId] }));
  };

  const apiKey = import.meta.env.VITE_SCREENSHOT_API_KEY;
  const getScreenshotUrl = (repo) => {
    if (!repo.homepage) {
      return coverUrl(repo);
    }
    const url = repo.homepage;
    const screenshotUrl = `https://api.screenshotmachine.com/?key=${apiKey}&url=${encodeURIComponent(url)}&dimension=640x480&delay=3000&quality=100`;
    return screenshotUrl;
  };
  const coverUrl = (repo) => `https://raw.githubusercontent.com/serverket/${repo.name}/master/public/cover.png`;
  const defaultUrl = '/z-cover.png';

  useEffect(() => {
    let isMounted = true;

    const cachedEntry = readCachedRepos();
    if (cachedEntry && cachedEntry.data) {
      setRepos(cachedEntry.data);
      setLoading(false);
    }

    const fetchReposWithLanguages = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/serverket/repos?sort=created&direction=desc&page=1&per_page=3"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("Unexpected GitHub response", data);
          if (isMounted) {
            setRepos([]);
            setLoading(false);
          }
          return;
        }

        const enriched = await Promise.all(
          data.map(async (repo) => {
            try {
              const languagesResponse = await fetch(repo.languages_url);
              const languagesData = await languagesResponse.json();
              const languages = Object.keys(languagesData || {});
              return { ...repo, languages };
            } catch (error) {
              console.warn("Failed to fetch languages", error);
              return {
                ...repo,
                languages: repo.language ? [repo.language] : [],
              };
            }
          })
        );

        if (!isMounted) return;
        setRepos(enriched);
        setLoading(false);
        writeCachedRepos(enriched);
      } catch (error) {
        console.error("Failed to fetch repos", error);
        if (isMounted) {
          setRepos([]);
          setLoading(false);
        }
      }
    };

    if (!cachedEntry) {
      fetchReposWithLanguages();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center mb-1">
        <i className="pb-1 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500 icon-code" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-2 text-2xl tracking-wide font-semibold`}
        >
          <Text tid="repoHeading" />
        </h3>
      </div>
      <div className="mb-16 rounded-xl shadow-xl">
        <div className="flex flex-col rounded-xl">
        <div className="flex flex-col space-y-4">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="flex flex-col items-center text-blue-500 animate-pulse">
                  <i className="text-4xl icon-code" />
                  <p className="mt-2 text-sm font-semibold tracking-wide uppercase">
                    <Text tid="loading" />
                  </p>
                </div>
              </div>
            ) : null}
            {repos.map((repo) => (
              <div key={repo.id} className="rounded-xl border border-gray-800 shadow-xl">
                <div className="flex flex-row flex-wrap p-2 mt-2 min-w-full max-w-6xl h-auto md:flex-no-wrap">
                  <div
                    className="relative m-2 mx-auto my-auto w-full h-64 md:w-1/2"
                    onMouseEnter={() => setFlipped((prev) => ({ ...prev, [repo.id]: true }))}
                    onMouseLeave={() => setFlipped((prev) => ({ ...prev, [repo.id]: false }))}
                    onClick={(e) => handleCardTap(repo.id, e)}
                  >
                    <img
                      src={getScreenshotUrl(repo)}
                      alt={repo.name}
                      className="object-cover object-top w-full max-w-3xl h-full rounded-lg"
                      onError={(e) => {
                        const currentSrc = e.target.src;
                        if (currentSrc.includes('api.screenshotmachine.com')) {
                          e.target.src = coverUrl(repo);
                        } else if (currentSrc.includes('raw.githubusercontent.com')) {
                          e.target.src = defaultUrl;
                        }
                      }}
                    />
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center w-full h-full rounded-lg bg-black bg-opacity-50 transition-opacity duration-300 ${flipped[repo.id] ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    >
                      <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-12 md:justify-center">
                        <div
                          className={`${
                            theme === "dark"
                              ? "text-white hover:text-blue-400"
                              : "text-gray-800 hover:text-blue-400"
                          } cursor-pointer`}
                        >
                          <a
                            className="flex flex-col items-center"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="object-center text-6xl icon-github-circled" />
                            <p className="mt-1 text-sm font-semibold whitespace-nowrap md:text-base">
                              <i className="icon-lock-open" /> <Text tid="viewSource" />
                            </p>
                          </a>
                        </div>

                        {repo.homepage ? (
                          <div
                            className={`${
                              theme === "dark"
                                ? "text-white hover:text-blue-400"
                                : "text-gray-800 hover:text-blue-400"
                            } cursor-pointer`}
                          >
                            <a
                              className="flex flex-col items-center"
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="object-center text-6xl icon-coverflow" />
                              <p className="mt-1 text-sm font-semibold whitespace-nowrap md:text-base">
                                <Text tid="viewLiveVersion" />
                              </p>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="m-2 mx-auto my-auto w-full md:w-1/3">
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } w-full h-full flex flex-col justify-center text-center`}
                    >
                      <h3 className="text-lg font-bold tracking-widest text-blue-500 uppercase">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.name} <i className="text-xs icon-link-ext" />
                        </a>
                      </h3>
                      {repo.fork ? (
                        <p className="mt-4 text-sm font-normal">
                          <i className="text-sm icon-fork" />
                        </p>
                      ) : null}
                      <div className="mx-auto my-3 w-12 h-px bg-gray-700 opacity-60" />
                      <p className="mt-4 text-sm font-light">
                        <Text tid="repoUpdate" /> {new Date(repo.updated_at).toUTCString()}
                      </p>
                      {repo.languages && repo.languages.length ? (
                        <>
                          <p className="mt-4 text-sm font-semibold tracking-wide text-center uppercase">
                            <Text tid="technologiesUsed" />
                          </p>
                          <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                            {repo.languages.map((language) => {
                              const badge = LANGUAGE_BADGES[language] || LANGUAGE_BADGES.JavaScript;
                              return (
                                <div key={language} className="flex flex-col items-center mx-2 my-2 text-center">
                                  <img
                                    src={badge}
                                    alt={language}
                                    className="object-contain max-w-full h-8"
                                    loading="lazy"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRepos;
