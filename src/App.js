import { useEffect, useState, useRef } from "react";
import "./App.css";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";
import LinkedinIcon from "./assets/linkedin-logo.svg";
import GithubIcon from "./assets/github-logo.svg";
import BottomArrow from "./assets/arrow-bottom.svg";
import Dino from "./assets/Dino-gray.png";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight;
        const clientHeight = containerRef.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - 20) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="App" ref={containerRef}>
      {/* section 1 */}
      <div className="snap-section">
        <div className="header">
          <label className="switch">
            <input
              type="checkbox"
              checked={!lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
            <span className="slider"></span>
          </label>
          <span className="mode-icon">
            <img
              key={lightMode ? "sun" : "moon"}
              src={lightMode ? SunIcon : MoonIcon}
              alt={lightMode ? "Sun" : "Moon"}
              className="mode-icon"
            />
          </span>
        </div>
        <h2 className="mainText">Alvrian Timotius</h2>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/alvrian-timotius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="profile-button">
              <img src={LinkedinIcon} className="profile-icon" alt="LinkedIn" />
              <span>LinkedIn</span>
            </button>
          </a>
          <a
            href="https://github.com/alvrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="profile-button">
              <img src={GithubIcon} className="profile-icon" alt="GitHub" />
              <span>GitHub</span>
            </button>
          </a>
        </div>
        <div>
          <p className="description">
            <span className="title" style={{ fontWeight: "bold" }}>
              Computer Science Student | Developer{" "}
            </span>
            <br />
            <br />
            I'm a Computer Science student at Binus University, specializing in
            Software Engineering and Machine Learning. As part of the Binus
            Master Track program, I’m set to graduate with both a Bachelor's and
            Master’s degree in the near future. I have experience in developing
            machine learning models and building software applications, using
            frameworks like Laravel, React, and Express. Currently, I’m
            interning as an applications developer at Indonesia's largest
            private bank, gaining hands-on experience in real-world projects.
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="snap-section">
          <h2 className="mainText-section2">Potfolio</h2>
          <div className="section2-main-content"></div>
          <div className="Dino">
            <img src={Dino} alt="..." />
          </div>
      </div>

      {/* addition */}
      {showArrow && (
        <div className="bottom-arrow-direction">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>More</span>
          <img src={BottomArrow} alt="Scroll Down" />
        </div>
      )}
    </div>
  );
}

export default App;
