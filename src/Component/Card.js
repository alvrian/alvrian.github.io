import React, { useState } from "react";
import "./Card.css";
import GithubIcon from "../assets/icon/github-logo.svg";
import LinkIcon from "../assets/icon/link-logo.svg";
// import { GlassSurface } from "./GlassSurface";

export default function Card({
  title,
  desc,
  media,
  link,
  category,
  repo,
  demo,
}) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const handleCardClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  function getMediaType(src) {
    if (/\.(mp4|webm|ogg)$/i.test(src)) return "video";
    return "image";
  }

  const preloadMedia = () => {
    if (isPreloaded || !demo) return;

    if (getMediaType(demo) === "image") {
      const img = new Image();
      img.src = demo;
      img.onload = () => setIsPreloaded(true);
    } else {
      const video = document.createElement("video");
      video.src = demo;
      video.preload = "auto";
      video.onloadeddata = () => setIsPreloaded(true);
    }
  };

  return (
    <div className="Card">
      <div
        className="mainCardBody"
        onMouseEnter={preloadMedia}
        onClick={handleCardClick}
      >
        <p className="card-title">
          {title}
          <br />
          <p className="card-category">{category}</p>
        </p>
        <p className="card-description">{desc}</p>
        <img className="card-media" src={media} alt="..." />
      </div>
      

      {isPopupVisible && (
        <div className="popup">
          <div className="popupContent">
            <p className="card-title">
              {title}
              <br />
              <p className="card-category">{category}</p>
            </p>

            <div className="card-media-container">
              {getMediaType(demo) === "image" ? (
                <img className="card-media" src={demo} alt="..." />
              ) : (
                <video className="card-media" controls autoPlay>
                  <source src={demo} type="video/mp4" />
                </video>
              )}

              <div className="card-button">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                  <button className="git-button">
                    <img src={GithubIcon} alt="GitHub" />
                    <span>Github Repo</span>
                  </button>
                </a>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="git-button">
                      <img
                        src={LinkIcon}
                        className="profile-icon"
                        alt="Project"
                      />
                      <span>Go to Project</span>
                    </button>
                  </a>
                )}
              </div>
            </div>
            <p>{desc}</p>

            <div className="closeButtonContainer">
              <button className="closeButton" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
