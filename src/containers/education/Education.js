import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className={isDark ? "dark-mode section-heading" : "section-heading"}>
          Education
        </h1>
        <p className={isDark ? "dark-mode section-subtitle" : "section-subtitle"}>
          Academic journey and key milestones
        </p>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard
              key={index}
              school={school}
              index={index}
              isFirst={index === 0}
              isLast={index === educationInfo.schools.length - 1}
            />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
