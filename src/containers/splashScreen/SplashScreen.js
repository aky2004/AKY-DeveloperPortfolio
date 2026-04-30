import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <svg width="0" height="0">
        <linearGradient id="cube-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b21b6" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
      </svg>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span style={{ background: "linear-gradient(90deg, #5b21b6, #9d174d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          <span> &lt;</span>
          <span className="splash-title">{greeting.username}</span>
          <span>/&gt;</span>
        </span>
      </div>
    </div>
  );
}
