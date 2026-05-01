import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const bannerColor = cardInfo.bannerColor || "#1e3a8a";
  const isLpuIssuer =
    cardInfo.issuer &&
    cardInfo.issuer.toLowerCase().includes("lovely professional university");

  return (
    <div
      className={isDark ? "dark-mode certificate-card" : "certificate-card"}
      style={{"--banner-color": bannerColor}}
    >
      {/* Colored Banner Section with Issuer Name */}
      <div className="certificate-banner" style={{backgroundColor: bannerColor}}>
        <div className="certificate-banner-overlay" />
        <h5 className="banner-issuer-name">{cardInfo.issuer || "Organization"}</h5>
      </div>

      {/* Issuer Badge - Positioned between banner and content */}
      <div className="issuer-badge">
        {cardInfo.issuerLogo ? (
          <img
            src={cardInfo.issuerLogo}
            alt={cardInfo.issuer}
            className={isLpuIssuer ? "issuer-logo issuer-logo-lpu" : "issuer-logo"}
          />
        ) : (
          <span className="issuer-initial">{cardInfo.issuer?.charAt(0) || "?"}</span>
        )}
      </div>

      {/* Card Content */}
      <div className="certificate-content">
        <h4 className={isDark ? "dark-mode certificate-title" : "certificate-title"}>
          {cardInfo.title}
        </h4>

        {cardInfo.description && (
          <p className={isDark ? "dark-mode certificate-description" : "certificate-description"}>
            {cardInfo.description}
          </p>
        )}

        <div className="certificate-meta">
          {cardInfo.date && (
            <span className="certificate-date">{cardInfo.date}</span>
          )}

          {cardInfo.category && (
            <span className={isDark ? "dark-mode certificate-category" : "certificate-category"}>
              {cardInfo.category.toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
