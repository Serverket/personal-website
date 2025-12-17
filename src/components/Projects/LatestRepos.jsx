import React, { useEffect, useState } from "react";
import { ThemeContext } from "../DarkMode/ThemeProvider";
import { Text } from "../Multilanguage/Text";

const CACHE_KEY = "latestReposCache";
const CACHE_DURATION_MS = 1000 * 60 * 30; // 30 minutes
let inMemoryCache = { timestamp: 0, data: null };
const BORDER_ANIMATION_STYLES = `
@property --border-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes border-glow-spin {
  0% { --border-angle: 0deg; }
  100% { --border-angle: 360deg; }
}
`;

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
  const [loading, setLoading] = useState(true);
  const isDark = theme === "dark";

  const LANGUAGE_BADGES = {
    JavaScript: "https://img.shields.io/badge/-JavaScript-311701?style=for-the-badge&color=1e1e2e&logo=javascript&logoColor=white",
    TypeScript: "https://img.shields.io/badge/-TypeScript-311701?style=for-the-badge&color=1e1e2e&logo=typescript&logoColor=white",
    React: "https://img.shields.io/badge/-React-311701?style=for-the-badge&color=1e1e2e&logo=react&logoColor=white",
    'Node.js': "https://img.shields.io/badge/-Node.js-311701?style=for-the-badge&color=1e1e2e&logo=node.js&logoColor=white",
    Python: "https://img.shields.io/badge/-Python-311701?style=for-the-badge&color=1e1e2e&logo=python&logoColor=white",
    HTML: "https://img.shields.io/badge/-HTML-311701?style=for-the-badge&color=1e1e2e&logo=html5&logoColor=white",
    CSS: "https://img.shields.io/badge/-CSS-311701?style=for-the-badge&color=1e1e2e&logo=css3&logoColor=white",
    Vue: "https://img.shields.io/badge/-Vue-311701?style=for-the-badge&color=1e1e2e&logo=vuedotjs&logoColor=white",
    Angular: "https://img.shields.io/badge/-Angular-311701?style=for-the-badge&color=1e1e2e&logo=angular&logoColor=white",
    Docker: "https://img.shields.io/badge/-Docker-311701?style=for-the-badge&color=1e1e2e&logo=docker&logoColor=white",
    Git: "https://img.shields.io/badge/-Git-311701?style=for-the-badge&color=1e1e2e&logo=git&logoColor=white",
    'C++': "https://img.shields.io/badge/-C++-311701?style=for-the-badge&color=1e1e2e&logo=cplusplus&logoColor=white",
    Java: "https://img.shields.io/badge/-Java-311701?style=for-the-badge&color=1e1e2e&logo=coffeescript&logoColor=white",
    Go: "https://img.shields.io/badge/-Go-311701?style=for-the-badge&color=1e1e2e&logo=go&logoColor=white",
    Rust: "https://img.shields.io/badge/-Rust-311701?style=for-the-badge&color=1e1e2e&logo=rust&logoColor=white",
    PHP: "https://img.shields.io/badge/-PHP-311701?style=for-the-badge&color=1e1e2e&logo=php&logoColor=white",
    Ruby: "https://img.shields.io/badge/-Ruby-311701?style=for-the-badge&color=1e1e2e&logo=ruby&logoColor=white",
    Swift: "https://img.shields.io/badge/-Swift-311701?style=for-the-badge&color=1e1e2e&logo=swift&logoColor=white",
    Kotlin: "https://img.shields.io/badge/-Kotlin-311701?style=for-the-badge&color=1e1e2e&logo=kotlin&logoColor=white",
    SQL: "https://img.shields.io/badge/-SQL-311701?style=for-the-badge&color=1e1e2e&logo=database&logoColor=white",
    MongoDB: "https://img.shields.io/badge/-MongoDB-311701?style=for-the-badge&color=1e1e2e&logo=mongodb&logoColor=white",
    PostgreSQL: "https://img.shields.io/badge/-PostgreSQL-311701?style=for-the-badge&color=1e1e2e&logo=postgresql&logoColor=white",
    AWS: "https://img.shields.io/badge/-AWS-311701?style=for-the-badge&color=1e1e2e&logo=amazonaws&logoColor=white",
    'Next.js': "https://img.shields.io/badge/-Next.js-311701?style=for-the-badge&color=1e1e2e&logo=nextdotjs&logoColor=white",
    Tailwind: "https://img.shields.io/badge/-Tailwind-311701?style=for-the-badge&color=1e1e2e&logo=tailwindcss&logoColor=white",
    Express: "https://img.shields.io/badge/-Express-311701?style=for-the-badge&color=1e1e2e&logo=express&logoColor=white",
    Shell: "https://img.shields.io/badge/-Shell-311701?style=for-the-badge&color=1e1e2e&logo=powershell&logoColor=white",
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
  const defaultUrl = "/z-cover.png";

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
      <style>{BORDER_ANIMATION_STYLES}</style>
      <div className="flex flex-row justify-center items-center mb-6">
        <i className="pb-1 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500 icon-code" />
        <h3
          className={`${isDark ? "text-white" : "text-black"} ml-3 text-2xl tracking-wide font-semibold`}
        >
          <Text tid="repoHeading" />
        </h3>
      </div>

      <div className="mb-12 space-y-8">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-tr rounded-full opacity-40 animate-ping ${isDark ? "from-blue-500 to-cyan-400" : "from-blue-400 to-cyan-300"}`} />
              <div className={`flex relative flex-col justify-center items-center px-10 py-10 rounded-full border backdrop-blur ${isDark ? "border-blue-400/60 bg-slate-900/60" : "border-blue-500 bg-white shadow-lg"}`}>
                <i className={`text-4xl icon-code ${isDark ? "text-blue-300" : "text-blue-600"}`} />
                <p className={`mt-2 text-xs font-semibold tracking-[0.4em] uppercase ${isDark ? "text-blue-200" : "text-blue-800"}`}>
                  <Text tid="loading" />
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {repos.length === 0 && !loading ? (
          <div
            className={`${isDark ? "text-slate-200" : "text-gray-800"
              } mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-900/10 p-8 text-center backdrop-blur`}
          >
            <p className="text-lg font-semibold tracking-wide">
              No repositories available at this time.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              GitHub API rate limits or privacy settings might be hiding them. Please retry later.
            </p>
          </div>
        ) : null}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => {
            const hasHomepage = Boolean(repo.homepage);

            return (
              <div key={repo.id} className="w-full">
                <div
                  className="relative h-full rounded-[30px] p-[2px]"
                  style={{
                    background:
                      "conic-gradient(from var(--border-angle), rgba(15,23,42,0) 0deg 300deg, rgba(56,189,248,0.95) 320deg 360deg)",
                    animation: "border-glow-spin 5s linear infinite",
                    filter: "drop-shadow(0 0 14px rgba(56,189,248,0.35))",
                  }}
                >
                  <div className={`flex h-full flex-col overflow-hidden rounded-[26px] border ${isDark ? "border-gray-800/70 bg-gray-950" : "bg-white border-gray-300"} shadow-[0_20px_60px_rgba(2,6,23,0.45)]`}>
                    <div className="rounded-t-[26px] overflow-hidden">
                      <img
                        src={getScreenshotUrl(repo)}
                        alt={repo.name}
                        className="object-cover object-top w-full h-48 sm:h-52 lg:h-56"
                        loading="lazy"
                        onError={(e) => {
                          const currentSrc = e.target.src;
                          if (currentSrc.includes("api.screenshotmachine.com")) {
                            e.target.src = coverUrl(repo);
                          } else if (currentSrc.includes("raw.githubusercontent.com")) {
                            e.target.src = defaultUrl;
                          }
                        }}
                      />
                    </div>

                    <div className="flex flex-col flex-1 gap-4 p-5">
                      <div>
                        <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                          <span className={`rounded-full px-3 py-[0.35rem] text-[0.65rem] font-semibold ${isDark ? "bg-gray-900/70 text-gray-300" : "bg-gray-100 text-gray-800 border border-gray-300"}`}>
                            {repo.private ? "PRIVATE" : "PUBLIC"}
                          </span>
                          {repo.fork ? (
                            <span className={`rounded-full px-3 py-[0.35rem] text-[0.65rem] font-semibold ${isDark ? "bg-gray-900/70 text-gray-200" : "bg-gray-100 text-gray-600 border border-gray-300"}`}>
                              Forked
                            </span>
                          ) : null}
                          <span className={`rounded-full px-3 py-[0.35rem] text-[0.65rem] font-semibold ${isDark ? "bg-gray-900/70 text-gray-400" : "bg-gray-100 text-gray-600 border border-gray-300"}`}>
                            Updated: {new Date(repo.updated_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className={`mt-3 text-xl font-semibold tracking-tight ${isDark ? "text-white" : "text-black"}`}>
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 ${isDark ? "text-white" : "text-black"}`}
                          >
                            {repo.name}
                            <i className="text-base icon-link-ext" />
                          </a>
                        </h3>
                      </div>

                      {repo.languages && repo.languages.length ? (
                        <div>
                          <p className={`text-[0.6rem] font-semibold uppercase tracking-[0.35em] ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            <Text tid="technologiesUsed" />
                          </p>
                          <div className="flex flex-row flex-wrap justify-evenly mt-2 font-semibold">
                            {repo.languages.slice(0, 6).map((language) => {
                              const badgeUrl = LANGUAGE_BADGES[language];
                              return (
                                <div
                                  key={language}
                                  className="flex flex-col items-center mx-4 my-4 text-center"
                                >
                                  {badgeUrl ? <img src={badgeUrl} alt={language} className="h-6" /> : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}

                      <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                        <a
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${isDark
                            ? "border-white/20 text-white hover:border-gray-400/60"
                            : "border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 hover:border-gray-500"
                            }`}
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="text-base icon-github-circled" />
                          <Text tid="viewSource" />
                        </a>
                        {hasHomepage ? (
                          <a
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${isDark
                              ? "border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/10"
                              : "border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100 hover:border-blue-400"
                              }`}
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="text-base icon-coverflow" />
                            <Text tid="viewLiveVersion" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className={`text-4xl icon-down-open animate-bounce transition-transform hover:scale-125 cursor-pointer ${isDark ? "text-blue-300 hover:text-blue-200" : "text-blue-600 hover:text-blue-700"
              }`}
          />
        </div>
      </div>
    </>
  );
};

export default LatestRepos;
