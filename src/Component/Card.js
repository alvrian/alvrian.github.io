import React, { useState } from "react";
import "./Card.css";
import GithubIcon from "../assets/icon/github-logo.svg";
import LinkIcon from "../assets/icon/link-logo.svg";

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

  const handleCardClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="Card">
      <div className="mainCardBody" onClick={handleCardClick}>
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
              {title}<br />
              <p className="card-category">{category}</p>
            </p>
            <div className="card-media-container">
              <div>
                <video className="card-media" controls autoplay>
                  <source src={demo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="card-button" >
                <a href= {repo} target="_blank" rel="noopener noreferrer">
                  <button className="git-button">
                    <img src={GithubIcon} alt="GitHub" />
                    <span>Github Repo</span>
                  </button>
                </a>
                <a href= {link} target="_blank" rel="noopener noreferrer">
                  <button className="git-button">
                    <img src={LinkIcon} className="profile-icon" alt="GitHub" />
                    <span>Go to Project</span>
                  </button>
                </a>  
              </div>
            </div>
            <p>{desc}</p>
            <div className="closeButtonContainer">
                <button className="closeButton" onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
