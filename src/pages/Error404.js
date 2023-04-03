import React from "react";
import NotFound from "../assets/pictures/nsa-glitch.webp"

export default function Error404() {
  return (
    <div>
      <img
        className="min-h-screen object-cover"
        src={NotFound}
        alt="Not Found"
      />
    </div>
  );
}
