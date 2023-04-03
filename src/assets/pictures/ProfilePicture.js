import React from "react";
import avatar from "../pictures/avatar.webp";

export function ProfilePicture() {
  return (
    <img
      className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-xl"
      src={avatar}
      alt="profile"
    />
  );
}
