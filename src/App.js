import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Icons, Certificates, Backing } from "./assets";
import FMobile from "./assets/media/fitter_logo.png";
import CV from "./assets/media/Dover-Cover.png";
import Corn from "./assets/media/CORN.png";
import Fitter from "./assets/media/fitter-screen.png";
import SC from "./assets/media/stepcode.png";
import FMobileDemo from "./assets/demo/fitter-mobile-demo.png";
import CvDemo from "./assets/demo/CV-demo.mp4";
import FbDemo from "./assets/demo/Farmbyte-demo.mp4";
import FitterDemo from "./assets/demo/Fitter-Demo.mp4";
import ScDemo from "./assets/demo/STEPCODE-Demo.mp4";
import projects from "./assets/project.json";
import Card from "./Component/Card";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 940);

  const mediaMap = { FMobile, CV, Corn, Fitter, SC };
  const demoMap = { FMobileDemo, CvDemo, FbDemo, FitterDemo, ScDemo };

  const highlights = [
    { value: "5+", label: "Featured builds" },
    { value: "ML", label: "Computer vision focus" },
    { value: "Full-stack", label: "React, Laravel, Express" },
  ];

  const expertise = [
    "Machine learning",
    "React applications",
    "Laravel backends",
    "Computer vision",
    "Product-minded teamwork",
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 430;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 430;
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && containerRef.current) {
      containerRef.current.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
      setShowArrow(!isAtBottom);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 940);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
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
      <div className="ambient-media" aria-hidden="true">
        <img src={lightMode ? Backing.Dino : Backing.Game} alt="" />
      </div>

      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Go to home">
          AT
        </a>
        <label className="theme-toggle" aria-label="Toggle color theme">
          <input
            type="checkbox"
            checked={!lightMode}
            onChange={() => setLightMode((current) => !current)}
          />
          <span className="theme-track">
            <span className="theme-thumb" />
          </span>
          <img
            src={lightMode ? Icons.SunIcon : Icons.MoonIcon}
            alt=""
            className="theme-icon"
          />
        </label>
      </header>

      <nav className="section-nav" aria-label="Portfolio sections">
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("credentials")}>Credentials</a>
      </nav>

      <main>
        <section className="snap-section hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / Software Engineering / ML</p>
            <h1>Alvrian Timotius</h1>
            <p className="hero-role">
              Application Developer and Computer Science Student
            </p>
            <p className="hero-description">
              I build software products with a practical eye for user flows,
              reliable architecture, and machine learning systems. Currently
              studying Computer Science at Binus University with a focus on
              software engineering and applied ML.
            </p>

            <div className="profile-links" aria-label="Profile links">
              <a
                className="profile-button"
                href="https://www.linkedin.com/in/alvrian-timotius/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Icons.LinkedinIcon} alt="" />
                <span>LinkedIn</span>
              </a>
              <a
                className="profile-button"
                href="https://github.com/alvrian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Icons.GithubIcon} alt="" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Portfolio summary">
            <div className="availability-card">
              <span className="status-dot" />
              <span>Open to software and ML opportunities</span>
            </div>
            <div className="highlight-grid">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="skill-list">
              {expertise.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>

          <p className="sr-only">alvrian timotius hinandra Binus University</p>
        </section>
        
        <section className="snap-section credentials-section" id="credentials">
          <div className="section-heading compact">
            <p className="eyebrow">Research and Growth</p>
            <h2>Credentials</h2>
            <p>
              Academic publication work, practical certifications, and
              continuing study across AI and cloud fundamentals.
            </p>
          </div>

          <div className="credentials-row">
            <article className="publication-card">
              <p className="card-kicker">Publication</p>
              <h3>
                Comparative Analysis of Mamba, Itransformer, and Dlinear Models
                on Spatial Dynamic Wind Power Dataset
              </h3>
              <a
                className="text-link"
                href="https://doi.org/10.1109/ISITIA71267.2026.11642365"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read publication
              </a>
            </article>
            <article className="publication-card">
              <p className="card-kicker">Publication</p>
              <h3>
                Comparison of Model Performance on Housing Business Using Linear
                Regression, Random Forest Regressor, SVR, and Neural Network
              </h3>
              <a
                className="text-link"
                href="http://dx.doi.org/10.1016/j.procs.2024.10.343"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read publication
              </a>
            </article>
          </div>

          <div className="credentials-row cert-row">
            <p className="card-kicker row-kicker">Courses and Certifications</p>
            <div className="cert-scroll-track">
              <img src={Certificates.NLP} alt="NVIDIA NLP certificate" className="cert-card" />
              <img src={Certificates.ACA} alt="ACA certificate" className="cert-card" />
              <img src={Certificates.DL} alt="NVIDIA Deep Learning Fundamentals certificate" className="cert-card" />
              <img src={Certificates.UD} alt="Udemy certificate" className="cert-card" />
            </div>
          </div>
        </section>

        <section className="snap-section project-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects</h2>
            <p>
              A focused collection of web, mobile, and machine learning work,
              with demos and repositories where available.
            </p>
          </div>

          <div className="carousel-shell">
            <button
              className="carousel-arrow left"
              onClick={!isMobile ? scrollLeft : undefined}
              disabled={isMobile}
              aria-label="Previous projects"
            >
              <img src={Icons.BottomArrow} alt="" />
            </button>
            <div className="project-track" ref={carouselRef}>
              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  category={project.category}
                  desc={project.desc}
                  media={mediaMap[project.media]}
                  repo={project.repo}
                  demo={demoMap[project.demo]}
                  link={project.link}
                />
              ))}
            </div>
            <button
              className="carousel-arrow right"
              onClick={!isMobile ? scrollRight : undefined}
              disabled={isMobile}
              aria-label="Next projects"
            >
              <img src={Icons.BottomArrow} alt="" />
            </button>
          </div>
        </section>


      </main>

      {showArrow && (
        <div className="bottom-arrow-direction" aria-hidden="true">
          <img src={Icons.BottomArrow} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
