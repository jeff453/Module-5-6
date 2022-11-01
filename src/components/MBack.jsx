import "./MBackStyles.css";
import React from 'react';
import backStars from "../assets/backStars.mp4";

const MBack = () => {
  return (
    <div className="MBack">
        <video src={backStars} autoPlay loop muted />
    </div>
  )
}

export default MBack;