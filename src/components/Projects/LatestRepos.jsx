import React, { useEffect, useState } from "react";
import { ThemeContext } from "../DarkMode/ThemeProvider";
import { Text } from "../Multilanguage/Text";

const LatestRepos = () => {
  const { theme } = React.useContext(ThemeContext);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/serverket/repos?sort=created&direction=desc&page=1&per_page=3"
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <>
      <div className="mb-1 flex flex-row justify-center items-center">
        <i className="icon-code text-5xl pb-1 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-500 to-teal-500" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-2 text-2xl tracking-wide font-semibold`}
        >
          <Text tid="repoHeading" />
        </h3>
      </div>
      <div className="mb-16 shadow-xl rounded-xl">
        <div className="flex flex-col border border-gray-800 rounded-xl">
          <div className="p-8 md:p-4 flex flex-row justify-center flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl">
            <div className="flex justify-center">
              <ul className="divide-y divide-gray-900 w-full">
                {repos.map((repo) => (
                  <li key={repo.id} className="py-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } text-lg font-bold tracking-widest`}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`https://raw.githubusercontent.com/serverket/${repo.name}/master/public/cover.png`}
                            alt={repo.name}
                            className="w-20 h-20 sm:mt-1 rounded-md mr-4 hover:scale-110 transition-all ease-in-out duration-200"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/z-cover.png";
                            }}
                          />
                        </a>
                        <div className="flex flex-col">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {repo.name} <i className="icon-link-ext text-xs" />
                          </a>
                          <p
                            className={`${
                              theme === "dark" ? "text-white" : "text-black"
                            } text-sm font-normal tracking-tight`}
                          >
                            {repo.description}
                          </p>
                          <p className="text-sm font-normal">
                            {repo.fork && <i className="icon-fork text-sm" />}
                            <i className="icon-star text-sm" />{" "}
                            {repo.stargazers_count}
                          </p>
                          <p className="text-sm font-light">
                            <Text tid="repoUpdate" />{" "}
                            {new Date(repo.updated_at).toUTCString()}
                          </p>
                        </div>
                      </div>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRepos;
