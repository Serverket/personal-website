import React from "react";
import "./assets/tailwind.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ImprintPrivacyPolicy from "./pages/ImprintPrivacyPolicy";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { ThemeProvider } from "./components/DarkMode/ThemeProvider";
import { LanguageProvider } from "./components/Multilanguage/LanguageProvider";
import { PrivacyProvider } from "./components/PrivacyContext";
import PrivacyBanner from "./components/PrivacyBanner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ThemeProvider>
        <PrivacyProvider>
          <LanguageProvider>
            <PrivacyBanner />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-grow flex flex-col w-full">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route
                    path="/imprintprivacypolicy"
                    element={<ImprintPrivacyPolicy />}
                  ></Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </LanguageProvider>
        </PrivacyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);