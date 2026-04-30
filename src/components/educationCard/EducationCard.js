import React, {createRef, useContext} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school, isFirst, isLast, index}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={`edu-timeline-row ${isLast ? "edu-timeline-row-last" : ""}`}>
        {/* Left: Year column */}
        <div className={`edu-year-col ${isDark ? "edu-year-col-dark" : ""}`}>
          <span className="edu-year-text">{school.duration}</span>
        </div>

        {/* Center: Line + dot */}
        <div className="edu-line-col">
          <div className={`edu-line-half top ${isFirst ? "hidden" : ""} ${isDark ? "dark" : ""}`}></div>
          <div className={`edu-dot edu-dot-${index} ${isDark ? "edu-dot-dark" : ""}`}>
            {school.logo && (
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="edu-dot-logo"
                src={school.logo}
                alt={school.schoolName}
              />
            )}
          </div>
          <div className={`edu-line-half bottom ${isLast ? "hidden" : ""} ${isDark ? "dark" : ""}`}></div>
        </div>

        {/* Right: Card */}
        <div className={`edu-card edu-card-${index} ${isDark ? "edu-card-dark" : ""}`}>
          <div className="edu-card-content">
            <h5 className={`edu-school ${isDark ? "dark-mode" : ""}`}>{school.schoolName}</h5>
            <p className={`edu-degree ${isDark ? "dark-mode" : ""}`}>{school.subHeader}</p>
            {school.desc && (
              <span className={`edu-score ${isDark ? "edu-score-dark" : ""}`}>{school.desc}</span>
            )}
            <div className="edu-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
