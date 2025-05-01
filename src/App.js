import { useEffect, useState, useRef } from "react";
import "./App.css";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";
import LinkedinIcon from "./assets/linkedin-logo.svg";
import GithubIcon from "./assets/github-logo.svg";
import BottomArrow from "./assets/arrow-bottom.svg";
import Dino from "./assets/Dino-gray.png";
import Card from "./Component/Card";
import ACA from "./assets/ACA.webp";
import DL from "./assets/DL-Funda.webp"
import UD from "./assets/udemy.webp";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

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
      {/* Main Section */}
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
              Application Developer | Computer Science Student
            </span>
            <br />
            <br />
            Computer Science student at Binus University, specializing in
            Software Engineering and Machine Learning. As part of the Binus
            Master Track program, set to graduate with both a Bachelor's and
            Master’s degree in the near future. I have experience in developing
            machine learning models and building software applications, using
            frameworks like Laravel, React, and Express. Currently, I’m
            interning as an applications developer at Indonesia's largest
            private bank, gaining hands-on experience in real-world projects.
          </p>
        </div>
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
            <img src={BottomArrow} alt="..." />
          </button>
          <div className="section2-main-content" ref={carouselRef}>
            <Card 
              title="test title model" 
              desc = "this is a test project to test this pop up ability Lorem ipsum it is this is a test project to test this pop up ability Lorem ipsum it is"
              media = {ACA}
            />
            <Card 
              title="test2 title model" 
              media = {DL} 
              desc = "this is a test project to test this pop up ability this is a test project to test this pop up ability Lorem ipsum it is"/>
            <Card 
              title="test3 title model"
              media = {UD} 
              desc = "this is a test project to test this pop up ability this is a test project to test this pop up ability Lorem ipsum it is"/>
            <Card title="test4 title model" desc = "this is a test project to test this pop up ability this is a test project to test this pop up ability Lorem ipsum it is"/>
            <Card title="test5" desc = "this is a test project to test this pop up ability this is a test project to test this pop up ability Lorem ipsum it is"/>
            <Card title="test6" desc = "this is a test project to test this pop up ability this "/>
          </div>
          <button
            className={`arrow right ${isMobile ? "disabled-button" : ""}`}
            onClick={!isMobile ? scrollRight : undefined}
            disabled={isMobile}
          >
            <img src={BottomArrow} alt="..." />
          </button>
        </div>
      </div>
      {/* other section */}
      <div className="snap-section">
        <p className="sub-title">Publication</p>
        <div className="Publication">
          <p className="pub-p"> Comparison of Model Performance on Housing Business Using Linear Regression, Random Forest Regressor, SVR, and Neural Network</p>
          <a href="http://dx.doi.org/10.1016/j.procs.2024.10.343" target="_blank" rel="noopener noreferrer">
            <button className="publication-button">
              <span>Read</span>
            </button>
          </a>
        </div>
        <p className="sub-title">Courses and Certifications</p>
        <div className="courses">
          <img className = "courses-item" src = {ACA} alt = "ACA"/>
          <img className = "courses-item" src = {DL} alt = "Nvidia Deep Learning Fundamentals"/>
          <img className = "courses-item" src = {UD} alt = "NLP"/>
        </div>
        <div className="Dino">
          <img src={Dino} alt="..." />
        </div>
      </div>
      
      {/* addition */}
      {showArrow && (
        <div className="bottom-arrow-direction">
          <img src={BottomArrow} alt="Scroll Down" />
        </div>
      )}
    </div>
  );
}

export default App;
