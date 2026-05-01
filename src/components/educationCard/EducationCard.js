import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="edu-bar-card-wrap">
        <div className={isDark ? "edu-bar-card edu-bar-card-dark" : "edu-bar-card"}>
          <div className="edu-bar-left">
            <div className="edu-bar-logoWrap">
              {school.logo ? (
                <img className="edu-bar-logo" src={school.logo} alt={school.schoolName} />
              ) : (
                <span className="edu-bar-logoFallback">
                  {school.schoolName?.charAt(0) || "?"}
                </span>
              )}
            </div>
          </div>

          <div className="edu-bar-content">
            <div className="edu-bar-top">
              <div className="edu-bar-titleBlock">
                <h3 className={isDark ? "edu-bar-school dark-mode" : "edu-bar-school"}>
                  {school.schoolName}
                </h3>
                <p className={isDark ? "edu-bar-degree dark-mode" : "edu-bar-degree"}>
                  {school.subHeader}
                </p>
              </div>

              <div className="edu-bar-meta">
                {school.duration && <span className="edu-bar-duration">{school.duration}</span>}
                {school.desc && (
                  <span className={isDark ? "edu-bar-score edu-bar-score-dark" : "edu-bar-score"}>
                    {school.desc}
                  </span>
                )}
              </div>
            </div>

            {school.descBullets && school.descBullets.length > 0 && (
              <ul className="edu-bar-highlights">
                {school.descBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
