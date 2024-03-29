// React-Spring animation for the "Writing" Section on /about

import React, { useState, useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
import { Text } from "./Multilanguage/Text";
import styled from "styled-components";
import { PostList } from "../assets/data/PostList";
import { ThemeContext } from "./DarkMode/ThemeProvider";

const Container = styled(animated.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  margin: 0 50px;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const data = PostList.map((post) => {
  return {
    name: post.name,
    linkURL: post.linkURL,
    height: 400,
    coverURL: `${post.coverURL}`,
  };
});

export default function SpringContainer() {
  const { theme } = React.useContext(ThemeContext);
  const [open, set] = useState(true);
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "1%" },
    to: { size: open ? "100%" : "1%" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 600 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <Container
        style={{ ...rest, width: size, height: size, cursor: "default" }}
        onClick={() => set((open) => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props }}>
            <div className="group w-auto h-auto">
              <div
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } flex flex-col text-center`}
              >
                {item.name}
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  className="group-hover:opacity-50 transition duration-200 ease-in-out"
                  src={item.coverURL}
                  alt={item.name}
                />
              </div>
              <a href={item.linkURL} target="_blank" rel="noopener noreferrer">
                <div className="hidden group-hover:flex flex-row items-center justify-center absolute right-0 top-2 bottom-0 my-auto mx-auto bg-blue-400 hover:bg-blue-600 h-8 w-24 rounded-xl p-2 text-white transition duration-200 ease-in-out">
                  <p className="font-semibold tracking-wide">
                    <Text tid="readNow" />
                  </p>
                </div>
              </a>
            </div>
          </Item>
        ))}
      </Container>
    </>
  );
}
