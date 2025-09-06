import { useEffect, useState, useRef } from "react";
import "./App.css";
import  { Icons , Certificates, Backing } from "./assets";
// media imports
import FMobile from "./assets/media/fitter_logo.png";
import CV from "./assets/media/Dover-Cover.png";
import Corn from "./assets/media/CORN.png";
import Fitter from "./assets/media/fitter-screen.png";
import SC from "./assets/media/stepcode.png";
// demo imports
import FMobileDemo from "./assets/demo/fitter-mobile-demo.png";
import CvDemo from "./assets/demo/CV-demo.mp4";
import FbDemo from "./assets/demo/Farmbyte-demo.mp4";
import FitterDemo from "./assets/demo/Fitter-Demo.mp4";
import ScDemo from "./assets/demo/STEPCODE-Demo.mp4";
//project json import
import projects from "./assets/project.json";
import Card from "./Component/Card";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const mediaMap = { FMobile, CV, Corn, Fitter, SC };
  const demoMap = { FMobileDemo, CvDemo, FbDemo, FitterDemo, ScDemo };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 450;
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 450;
    }
  };

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App" ref={containerRef}>
      {!lightMode && (
        <div className="Game-addition">
          <img src={Backing.Game} alt="..." />
        </div>
      )}
      {lightMode && (
        <div>
          <img src={Backing.Dino} alt="..." className="Game-addition-2" />
        </div>
      )}
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
              src={lightMode ? Icons.SunIcon : Icons.MoonIcon}
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
              <img src={Icons.LinkedinIcon} className="profile-icon" alt="LinkedIn" />
              <span>LinkedIn</span>
            </button>
          </a>
          <a
            href="https://github.com/alvrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="profile-button">
              <img src={Icons.GithubIcon} className="profile-icon" alt="GitHub" />
              <span>GitHub</span>
            </button>
          </a>
        </div>
        <div>
          <p className="description">
            <span className="title" style={{ fontWeight: "bold" }}>
              Application Developer | Computer Science Student
            </span>
            <br />
            <br />
            Computer Science student at Binus University, specializing in
            Software Engineering and Machine Learning. As part of the Binus
            Master Track program, set to graduate with both a Bachelor's and
            Master’s degree in the near future. I have experience in developing
            machine learning models and building software applications, using
            frameworks like Laravel, React, and Express.
          </p>
        </div>
        <p style={{ visibility: "hidden", height: "0" }}>
          alvrian timotius hinandra
        </p>
        <p style={{ visibility: "hidden", height: "0" }}>Binus University</p>
      </div>
      {/* Project Section */}
      <div className="snap-section">
        <h2 className="mainText-section2">Projects</h2>
        <div className="carousel-container">
          <button
            className={`arrow left ${isMobile ? "disabled-button" : ""}`}
            onClick={!isMobile ? scrollLeft : undefined}
            disabled={isMobile}
          >
            <img src={Icons.BottomArrow} alt="..." />
          </button>
          <div className="section2-main-content" ref={carouselRef}>
            {projects.map((p, i) => (
              <Card
                key={i}
                title={p.title}
                category={p.category}
                desc={p.desc}
                media={mediaMap[p.media]}
                repo={p.repo}
                demo={demoMap[p.demo]}
                link={p.link}
              />
            ))}
          </div>
          <button
            className={`arrow right ${isMobile ? "disabled-button" : ""}`}
            onClick={!isMobile ? scrollRight : undefined}
            disabled={isMobile}
          >
            <img src={Icons.BottomArrow} alt="..." />
          </button>
        </div>
      </div>
      <div className="snap-section">
        <p className="sub-title">Publication</p>
        <div className="Publication">
          <p className="pub-p">
            {" "}
            Comparison of Model Performance on Housing Business Using Linear
            Regression, Random Forest Regressor, SVR, and Neural Network
          </p>
          <a
            href="http://dx.doi.org/10.1016/j.procs.2024.10.343"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="publication-button">
              <span>Read</span>
            </button>
          </a>
        </div>
        <p className="sub-title">Courses and Certifications</p>
        <div className="courses">
          <img className="courses-item" src={Certificates.NLP} alt="NLP" />
          <img className="courses-item" src={Certificates.ACA} alt="ACA" />
          <img
            className="courses-item"
            src={Certificates.DL}
            alt="Nvidia Deep Learning Fundamentals"
          />
          <img className="courses-item" src={Certificates.UD} alt="NLP" />
        </div>
        <div className="Dino">
          <img src={Backing.Dino} alt="..." />
        </div>
      </div>

      {showArrow && (
        <div className="bottom-arrow-direction">
          <img src={Icons.BottomArrow} alt="Scroll Down" />
        </div>
      )}
    </div>
  );
}

export default App;
