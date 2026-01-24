import React from "react";
import { Spinner } from "react-rainbow-components";
import { Text } from "./Multilanguage/Text";

export default function LoadingSpinner() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Spinner size={"x-large"} variant={"brand"}>
        <p
          className="relative mt-40 text-center text-xl font-semibold"
          style={{ color: "rgb(0, 163, 220)" }}
        >
          <Text tid="loading" />...
        </p>
      </Spinner>
    </div>
  );
}
