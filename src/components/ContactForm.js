import React from "react";
import { Text } from "./Multilanguage/Text";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";

const ContactForm = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <form
      target="_blank"
      rel="noopener noreferrer"
      action="https://formsubmit.co/serverket@protonmail.com"
      method="POST"
      className="max-w-md mx-auto p-4 lg:p-12"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } block font-bold mb-2`}
        >
          <Text tid="name" />
        </label>
        <input
          type="text"
          id="name"
          name="name"
          minLength={3}
          maxLength={34}
          required
          className="border border-gray-500 p-2 rounded w-full text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } block font-bold mb-2`}
        >
          <Text tid="email" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          className="border border-gray-500 p-2 rounded w-full text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } block font-bold mb-2`}
        >
          <Text tid="message" />
        </label>
        <textarea
          id="message"
          name="message"
          minLength={4}
          maxLength={300}
          required
          className="border border-gray-500 p-2 rounded w-full text-gray-800"
        ></textarea>
      </div>
      <button
        className={`${
          theme === "dark"
            ? "hover:bg-teal-400 text-white border-white"
            : "hover:bg-black hover:text-white text-black border-black"
        } font-bold mt-8 mx-auto p-4 h-16 w-48 rounded-full border-2 flex flex-row items-center justify-center pointer-events-auto cursor-pointer transition duration-300 ease-in-out`}
      >
        <Text tid="send" />
      </button>
    </form>
  );
};

export default ContactForm;
