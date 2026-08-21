import React, { useEffect, useState } from "react";
import "./Card.css";
import GithubIcon from "../assets/icon/github-logo.svg";
import LinkIcon from "../assets/icon/link-logo.svg";

export default function Card({ title, desc, media, link, category, repo, demo }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const getMediaType = (src) => {
    if (src && /\.(mp4|webm|ogg)$/i.test(src)) return "video";
    return "image";
  };

  const preloadMedia = () => {
    if (isPreloaded || !demo) return;

    if (getMediaType(demo) === "image") {
      const img = new Image();
      img.src = demo;
      img.onload = () => setIsPreloaded(true);
      return;
    }

    const video = document.createElement("video");
    video.src = demo;
    video.preload = "auto";
    video.onloadeddata = () => setIsPreloaded(true);
  };

  useEffect(() => {
    if (!isPopupVisible) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setPopupVisible(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isPopupVisible]);

  return (
    <article className="Card">
      <button
        className="mainCardBody"
        onMouseEnter={preloadMedia}
        onFocus={preloadMedia}
        onClick={() => setPopupVisible(true)}
        type="button"
      >
        <span className="card-category">{category}</span>
        <span className="card-title">{title}</span>
        <span className="card-description">{desc}</span>
        <span className="card-media-frame">
          <img className="card-media" src={media} alt={`${title} preview`} />
        </span>
        <span className="card-cta">View project</span>
      </button>

      {isPopupVisible && (
        <div
          className="popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${title.replace(/\s+/g, "-")}-title`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setPopupVisible(false);
            }
          }}
        >
          <div className="popupContent">
            <div className="popup-header">
              <div>
                <p className="card-category">{category}</p>
                <h3 id={`${title.replace(/\s+/g, "-")}-title`}>{title}</h3>
              </div>
              <button
                className="icon-close"
                type="button"
                onClick={() => setPopupVisible(false)}
                aria-label="Close project details"
              >
                x
              </button>
            </div>

            <div className="popup-grid">
              <div className="popup-media-frame">
                {getMediaType(demo) === "image" ? (
                  <img className="popup-media" src={demo} alt={`${title} demo`} />
                ) : (
                  <video className="popup-media" controls autoPlay muted>
                    <source src={demo} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="popup-details">
                <p>{desc}</p>
                <div className="card-button">
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="" />
                    <span>GitHub Repo</span>
                  </a>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={LinkIcon} alt="" />
                      <span>Live Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
