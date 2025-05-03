import React, { useState } from "react";
import "./Card.css";

export default function Card({
  title,
  desc,
  media,
  link,
  category,
  repo,
  additional,
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
            <img className="card-media" src = {media} alt = "loading..."/>
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
