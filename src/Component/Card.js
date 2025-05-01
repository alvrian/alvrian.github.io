import React, { useState } from 'react';
import './Card.css';

export default function Card({ title, desc, media }) {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleCardClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className='Card'>
            <div className="mainCardBody" onClick={handleCardClick}>
                <p className='card-title'>{title}</p>
                <p className='card-description'>{desc}</p>
                <img className='card-media' src = {media} alt = "..."/>
            </div>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popupContent">
                        <p>{title} - This is a pop-up</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
