import React from "react";
import Bg from "../assets/pictures/nsa-glitch.webp"

export default function NotFound() {
  return (
    <div>
      <img
        className="min-h-screen object-cover"
        src={Bg}
        alt="Not Found"
      />
    </div>
  );
}
