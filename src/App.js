import { useEffect, useState, useRef } from "react";
import "./App.css";
import SunIcon from "./assets/icon/sun.svg";
import MoonIcon from "./assets/icon/moon.svg";
import LinkedinIcon from "./assets/icon/linkedin-logo.svg";
import GithubIcon from "./assets/icon/github-logo.svg";
import BottomArrow from "./assets/icon/arrow-bottom.svg";
import Dino from "./assets/Dino-gray.png";
import Card from "./Component/Card";
import ACA from "./assets/courses/ACA.webp";
import DL from "./assets/courses/DL-Funda.webp"
import UD from "./assets/courses/udemy.webp";
import Game from "./assets/game.png";
import Corn from "./assets/media/CORN.png";
import NLP from "./assets/courses/nvidia-nlp.png";
import CV from "./assets/media/AOL-compvis.png";
import Fitter from "./assets/media/fitter-screen.png";
import SC from "./assets/media/stepcode.png";
import ScDemo from "./assets/demo/STEPCODE-Demo.mp4";
import FitterDemo from "./assets/demo/Fitter-Demo.mp4";
import CvDemo from "./assets/demo/CV-demo.mp4";

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
      {!lightMode && <div className="Game-addition">
        <img src = {Game} alt = "..."/>
      </div>}
      {lightMode && <div>
        <img src = {Dino} alt = "..." className="Game-addition-2"/>  
      </div>}
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
          <a href="https://www.linkedin.com/in/alvrian-timotius/" target="_blank" rel="noopener noreferrer">
            <button className="profile-button">
              <img src={LinkedinIcon} className="profile-icon" alt="LinkedIn" />
              <span>LinkedIn</span>
            </button>
          </a>
          <a href="https://github.com/alvrian" target="_blank" rel="noopener noreferrer">
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
            <br /><br />
            Computer Science student at Binus University, specializing in Software Engineering and Machine Learning. As part of the Binus
            Master Track program, set to graduate with both a Bachelor's and Master’s degree in the near future. I have experience in developing
            machine learning models and building software applications, using frameworks like Laravel, React, and Express. Currently, I’m
            interning as an applications developer at Indonesia's largest private bank, gaining hands-on experience in real-world projects.
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
              title="Sea-Land Segmentation" 
              category = "Machine Learning"
              desc = "Sea-Land Segmentation based on Superpixel Fuzzy C-Means Clustering and Modified Chan-Vese Model From Optical Images. This is a project created for Computer Vision course that I took during 5th semester. I work with 3 other members to create this project. We use Superpixel Fuzzy C-Means Clustering and Modified Chan-Vese Model to segment the image into sea and land. We use Python and OpenCV to create this project. We also use Streamlit to create the web app."
              media = {CV} 
              repo = "https://github.com/alvrian/compvis-deploy"
              demo = {CvDemo}
              link = "https://alvrian-compvis.streamlit.app/"
            />
            <Card 
              title="FarmByte" 
              category = "Web Development"
              media = {Corn} 
              desc = "Welcome to FarmByte, an innovative platform designed to create a sustainable and mutually beneficial ecosystem by connecting farmers, compost producers, and restaurants. Our application promotes responsible consumption and production, aligning directly with SDG 12: Responsible Consumption and Production, which emphasizes efficient resource use, waste reduction, and sustainable practices."
              repo = "https://github.com/alvrian/project-web-prog"
      
            />
            <Card 
              title="Fitter"
              category= "Machine Learning/Deep Learning"
              media = {Fitter} 
              desc = "Fitter is a Deep Learning created to recognize the type of food and its nutritional value. This is a collaborative project developed for Machine Learning course's final project. I work with 2 other members to create this project."
              repo = "https://github.com/tiffanyjoycelyn/fitter"
              demo= {FitterDemo}
            />
            <Card 
              title="STEPCODE"
              category="WEB Development"
              desc = "STEPCODE is a collaborative project developed by me and four other members as part of our Software Engineering course. We created a platform to help individuals learn how to code, using technologies like typescript, React with Vite, Express, and Firebase. The unique feature of this platform is that each individuals can choose their own tutor based on others experience. Our team followed the SCRUM framework, organizing our work into sprints and holding daily standups to ensure everyone was aligned. We collaborated closely with a designated Product Owner who managed the backlog, and held sprint reviews to gather feedback on our progress."
              media = {SC}
              repo = "https://github.com/alvrian/AOL_SoftEng"
              demo = {ScDemo}
            />
            <Card 
              title="test5" 
              desc = "this is a test project to test this pop up ability this is a test project to test this pop up ability Lorem ipsum it is"
            />

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
          <img className = "courses-item" src = {NLP} alt = "NLP"/>
          <img className = "courses-item" src = {ACA} alt = "ACA"/>
          <img className = "courses-item" src = {DL} alt = "Nvidia Deep Learning Fundamentals"/>
          <img className = "courses-item" src = {UD} alt = "NLP"/>
        </div>
        <div className="Dino">
          <img src={Dino} alt="..." />
        </div>
      </div>
      
      {showArrow && (
        <div className="bottom-arrow-direction">
          <img src={BottomArrow} alt="Scroll Down" />
        </div>
      )}
    </div>
  );
}

export default App;
