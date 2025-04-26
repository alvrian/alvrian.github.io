import { useEffect, useState } from "react";
import "./App.css";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";
import LinkedinIcon from "./assets/linkedin-logo.svg";
import GithubIcon from "./assets/github-logo.svg";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  return (
    <div className="App">
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
        <div></div>
        <h2 className="mainText">Alvrian Timotius</h2>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/alvrian-timotius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="profile-button">
              <img src={LinkedinIcon} className="profile-icon" alt = "..."/>
              <span>LinkedIn</span>
            </button>
          </a>
          <a
            href="https://github.com/alvrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="profile-button">
              <img src={GithubIcon} className="profile-icon" alt = "..."/>
              <span>GitHub</span>
            </button>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="snap-section">
        <div className="header"></div>
        <h2 className="mainText">Alvrian Timotius</h2>
      </div>
    </div>
  );
}

export default App;
