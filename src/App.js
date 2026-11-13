import { useEffect, useState } from "react";
import "./App.css";
import { Certificates } from "./assets";
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
import Icon from "./Component/Icon";

// TODO: fill these in. Buttons that use them stay hidden while they are empty.
// cvUrl can be a file in /public (e.g. "/Alvrian-Timotius-CV.pdf") or a Drive link.
const CONTACT = {
  email: "",
  cvUrl: "",
  github: "https://github.com/alvrian",
  linkedin: "https://www.linkedin.com/in/alvrian-timotius/",
};

const mediaMap = { FMobile, CV, Corn, Fitter, SC };
const demoMap = { FMobileDemo, CvDemo, FbDemo, FitterDemo, ScDemo };

const publications = [
  {
    venue: "IEEE ISITIA · 2026",
    title:
      "Comparative Analysis of Mamba, iTransformer, and DLinear Models on Spatial Dynamic Wind Power Dataset",
    url: "https://doi.org/10.1109/ISITIA71267.2026.11642365",
  },
  {
    venue: "Procedia Computer Science · 2024",
    title:
      "Comparison of Model Performance on Housing Business Using Linear Regression, Random Forest Regressor, SVR, and Neural Network",
    url: "https://doi.org/10.1016/j.procs.2024.10.343",
  },
];

const certifications = [
  {
    issuer: "NVIDIA Deep Learning Institute",
    name: "Building Transformer-Based Natural Language Processing Applications",
    image: Certificates.NLP,
  },
  {
    issuer: "NVIDIA Deep Learning Institute",
    name: "Fundamentals of Deep Learning",
    image: Certificates.DL,
  },
  {
    issuer: "Alibaba Cloud",
    name: "Alibaba Cloud Certified Associate: Cloud Computing",
    image: Certificates.ACA,
  },
  {
    issuer: "Udemy",
    name: "Udemy course certificate", // TODO: replace with the course title
    image: Certificates.UD,
  },
];

const shippedProjects = projects.filter((p) => p.repo).length;

const navItems = [
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

// The site uses HashRouter, so "#work" would be read as a route.
// In-page links scroll with JavaScript instead.
const scrollToSection = (event, id) => {
  event.preventDefault();
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
};

function App() {
  const [lightMode, setLightMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "light";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
    try {
      localStorage.setItem("theme", lightMode ? "light" : "dark");
    } catch {
      /* storage unavailable */
    }
  }, [lightMode]);

  const mailto = CONTACT.email ? `mailto:${CONTACT.email}` : null;

  return (
    <div className="App">
      <a className="skip-link" href="#work" onClick={(e) => scrollToSection(e, "work")}>
        Skip to projects
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" onClick={(e) => scrollToSection(e, "top")} aria-label="Alvrian Timotius, back to top">
            <span className="brand-mark">AT</span>
            <span className="brand-name">Alvrian Timotius</span>
          </a>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button"
              onClick={() => setLightMode((v) => !v)}
              aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
            >
              <Icon name={lightMode ? "moon" : "sun"} />
            </button>
            {mailto && (
              <a className="btn btn-primary btn-small" href={mailto}>
                Email me
              </a>
            )}
          </div>

          <nav className="section-nav" aria-label="Sections">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="container hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Open to software engineering and ML roles
            </p>
            <h1 id="hero-title">Alvrian Timotius</h1>
            <p className="hero-lead">
              Master's student in Computer Science at Binus University, building
              ML systems and the software around them.
            </p>
            <p className="hero-sub">
              Currently researching abstractive summarization for Indonesian.
              Previously built web, mobile and computer-vision projects in teams
              of three to five.
            </p>

            <div className="hero-actions">
              {mailto && (
                <a className="btn btn-primary" href={mailto}>
                  <Icon name="mail" /> Email me
                </a>
              )}
              {CONTACT.cvUrl && (
                <a className="btn btn-ghost" href={CONTACT.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="download" /> Download CV (PDF)
                </a>
              )}
              <a className="btn btn-ghost" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub
              </a>
              <a className="btn btn-ghost" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          <aside className="now-card" aria-label="Current work">
            <div className="now-head">
              <span className="eyebrow">Now</span>
              <span className="now-status">Master's thesis · in progress</span>
            </div>
            <h2>Indonesian abstractive summarization with BRIO + IndoBART</h2>
            <p>
              Adapting BRIO's candidate-ranking training to IndoBART and
              evaluating the generated summaries.
            </p>
            <div className="divider" />
            <dl className="stat-grid">
              <div>
                <dt>{publications.length}</dt>
                <dd>peer-reviewed papers</dd>
              </div>
              <div>
                <dt>{shippedProjects}</dt>
                <dd>projects with code</dd>
              </div>
              <div>
                <dt>{certifications.length}</dt>
                <dd>certifications</dd>
              </div>
            </dl>
            <ul className="chip-list" aria-label="Skills">
              <li>Machine learning</li>
              <li>Computer vision</li>
              <li>React</li>
              <li>Laravel</li>
              <li>Express</li>
            </ul>
          </aside>
        </section>

        <section id="work" className="container section" aria-labelledby="work-title">
          <div className="section-head split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Projects</h2>
            </div>
            <p className="section-intro">
              Each card shows the problem, my part in it, and the stack. Open a
              project for the demo and repository.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <Card
                key={project.title}
                {...project}
                media={mediaMap[project.media]}
                demo={demoMap[project.demo]}
              />
            ))}
          </div>
        </section>

        <section id="research" className="container section" aria-labelledby="research-title">
          <div className="section-head">
            <p className="eyebrow">Research</p>
            <h2 id="research-title">Publications</h2>
          </div>
          <ul className="pub-list">
            {publications.map((pub) => (
              <li key={pub.url} className="pub-row">
                <span className="pub-venue">{pub.venue}</span>
                <span className="pub-title">{pub.title}</span>
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  Read paper <Icon name="external" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="credentials" className="container section" aria-labelledby="cred-title">
          <div className="section-head">
            <p className="eyebrow">Continuing study</p>
            <h2 id="cred-title">Certifications</h2>
          </div>
          <ul className="cert-grid">
            {certifications.map((cert) => (
              <li key={cert.name} className="cert-card">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-name">{cert.name}</span>
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  View certificate <Icon name="external" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="container section" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <h2 id="contact-title">Hiring for software or ML?</h2>
              <p>
                {mailto
                  ? "Email is the fastest way to reach me. Based in Jakarta (UTC+7)."
                  : "Message me on LinkedIn. Based in Jakarta (UTC+7)."}
              </p>
            </div>
            <div className="contact-actions">
              {mailto ? (
                <a className="btn btn-primary" href={mailto}>
                  <Icon name="mail" /> {CONTACT.email}
                </a>
              ) : (
                <a className="btn btn-primary" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" /> Message on LinkedIn
                </a>
              )}
              {CONTACT.cvUrl && (
                <a className="btn btn-ghost" href={CONTACT.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="download" /> Download CV (PDF)
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Alvrian Timotius Hinandra</span>
          <div className="footer-links">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#top" onClick={(e) => scrollToSection(e, "top")}>Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
