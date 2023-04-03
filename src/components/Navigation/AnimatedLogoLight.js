import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export function AnimatedLogoLight() {
  const [hovered, setHovered] = useState(false);
  const transitions = useTransition(hovered, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div
      className="flex items-center justify-center h-16 w-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <i className="icon-home-2 text-3xl md:text-3xl text-black" />
          </animated.div>
        ) : (
          <animated.div style={props}>
            <img className="w-8" src="/android-chrome-192x192.png" alt="logo" />
          </animated.div>
        )
      )}
    </div>
  );
}
