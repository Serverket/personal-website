import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../components/DarkMode/ThemeProvider";
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
        <i className="icon-code text-5xl pb-1 text-blue-400" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-2 text-2xl tracking-wide font-semibold`}
        >
          <Text tid="repoHeading" />
        </h3>
      </div>
      <div className="mb-16 shadow-xl">
        <div className="flex flex-col border border-gray-800 rounded-xl">
          <div className="p-8 md:p-4 flex flex-row justify-center flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl mx-auto">
            <div className="flex justify-center">
              <ul className="divide-y divide-gray-900 w-96">
                {repos.map((repo) => (
                  <li key={repo.id} className="py-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } text-lg font-bold tracking-widest`}
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                        <i className="icon-link-ext text-xs" />
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
