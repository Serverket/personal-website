import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { CTAbutton } from "../components/CTAbutton";
import Bg from "../assets/pictures/nebula.webm";

export default function Home() {
  const { theme } = React.useContext(ThemeContext);
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const hasPosterRef = React.useRef(false);
  const [posterUrl, setPosterUrl] = React.useState(null);
  const [videoVisible, setVideoVisible] = React.useState(false);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;

    if (!videoElement || !canvasElement) {
      return () => {};
    }

    const drawFrameToCanvas = () => {
      if (hasPosterRef.current) {
        return;
      }

      const { videoWidth, videoHeight } = videoElement;
      if (!videoWidth || !videoHeight) {
        return;
      }

      const context = canvasElement.getContext("2d", { willReadFrequently: false });
      if (!context) {
        return;
      }

      const targetWidth = Math.min(1280, videoWidth);
      const scale = targetWidth / videoWidth;
      const targetHeight = Math.round(videoHeight * scale);

      canvasElement.width = targetWidth;
      canvasElement.height = targetHeight;

      context.drawImage(videoElement, 0, 0, targetWidth, targetHeight);

      try {
        const dataUrl = canvasElement.toDataURL("image/webp", 0.75);
        hasPosterRef.current = true;
        setPosterUrl(dataUrl);
      } catch (error) {
        console.warn("Failed to generate video preview", error);
      }
    };

    const handleLoadedData = () => {
      if (hasPosterRef.current) {
        return;
      }
      window.requestAnimationFrame(drawFrameToCanvas);
    };

    const handlePlaying = () => {
      setVideoVisible(true);
    };

    const handleError = () => {
      setVideoVisible(true);
    };

    if (videoElement.readyState >= 2) {
      handleLoadedData();
    }

    videoElement.addEventListener("loadeddata", handleLoadedData);
    videoElement.addEventListener("playing", handlePlaying);
    videoElement.addEventListener("error", handleError);

    const fallbackTimeout = window.setTimeout(() => {
      setVideoVisible(true);
    }, 4000);

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
      videoElement.removeEventListener("playing", handlePlaying);
      videoElement.removeEventListener("error", handleError);
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-out ${
            videoVisible ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={
            posterUrl
              ? {
                  backgroundImage: `url(${posterUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          poster={posterUrl || undefined}
          className="w-full h-full object-cover bg-black"
        >
          <source src={Bg} type="video/webm" />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="Video background of a colourful looping animation with no sound"
          />
          <track
            src="captions_es.vtt"
            kind="captions"
            srcLang="es"
            label="Fondo de video de una colorida animación en bucle sin sonido"
          />
          Your browser does not support the video tag.
        </video>
        <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      </div>
      <div className="w-full flex-grow relative z-10 overflow-hidden font-noto">
        <div className="relative flex justify-center pointer-events-none h-full">
          <div
            className={`${theme === "dark" ? "text-white" : "text-white"
              } px-8 md:px-0 mt-12 md:mt-40 mx-auto flex flex-col pointer-events-none z-20`}
          >
            <div className="self-center">
              <p className="text-4xl sm:text-5xl leading-none">
                <Text tid="homeGreeting" />
              </p>
              <p className="text-6xl font-bold">
                <Text tid="homeName" />{" "}
                <span className="underline decoration-teal-400">Serverket</span>
              </p>
            </div>
            <div className="mt-2 self-center">
              <p
                className={`${theme === "dark" ? "text-neutral-300" : "text-neutral-300"
                  } text-xl font-semibold tracking-wider uppercase`}
              >
                Frontend Web Developer
              </p>
              <p className="text-neutral-500 text-lg font-semibold text-justify">
                <Text tid="homeFrom" />
              </p>
            </div>
            <div
              className={`${theme === "dark" ? "text-gray-400" : "text-gray-400"
                } mt-4 sm:mt-8 px-4 text-md sm:text-lg font-semibold tracking-wider text-center`}
            >
              <Text tid="homeAbout1" />
              <br />
              <Text tid="homeAbout2" />
            </div>
            <CTAbutton />
          </div>
        </div>
      </div>
    </>
  );
}
