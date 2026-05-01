import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [activeProject, setActiveProject] = useState(0);
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }

  const project = bigProjects.projects[activeProject];

  const renderMedia = (src, altText, className) => {
    if (!src) return null;
    const isVideo = src.match(/\.(mp4|webm|ogg)$/i);
    if (isVideo) {
      return (
        <video
          src={src}
          className={className}
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      );
    }
    return <img src={src} alt={altText} className={className} />;
  };

  const goNext = () => {
    setActiveProject((prev) =>
      prev < bigProjects.projects.length - 1 ? prev + 1 : 0
    );
  };

  const goPrev = () => {
    setActiveProject((prev) =>
      prev > 0 ? prev - 1 : bigProjects.projects.length - 1
    );
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="projects-section">
          <h1 className={isDark ? "dark-mode section-heading" : "section-heading"}>
            {bigProjects.title}
          </h1>
          <p className={isDark ? "dark-mode section-subtitle" : "section-subtitle"}>
            {bigProjects.subtitle}
          </p>

          {/* Showcase Area */}
          <div className="project-showcase">
            {/* Navigation Arrows */}
            {bigProjects.projects.length > 1 && (
              <>
                <button
                  className="showcase-nav showcase-nav-left"
                  onClick={goPrev}
                  aria-label="Previous project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  className="showcase-nav showcase-nav-right"
                  onClick={goNext}
                  aria-label="Next project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}

            {/* Device Mockup Display */}
            <div className="showcase-devices">
              {/* Laptop Mockup */}
              <div className="device-laptop">
                <div className="laptop-screen">
                  {project.image ? (
                    renderMedia(project.image, project.projectName, "device-screenshot")
                  ) : (
                    <div className="device-placeholder">
                      <span>{project.projectName}</span>
                    </div>
                  )}
                </div>
                <div className="laptop-bottom">
                  <div className="laptop-notch"></div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="device-phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {project.image ? (
                    renderMedia(project.image, project.projectName + " mobile", "device-screenshot")
                  ) : (
                    <div className="device-placeholder">
                      <span>{project.projectName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Selector Thumbnails */}
          {bigProjects.projects.length > 1 && (
            <div className="project-thumbnails">
              {bigProjects.projects.map((proj, i) => (
                <div
                  key={i}
                  className={`thumbnail-item ${i === activeProject ? "thumbnail-active" : ""}`}
                  onClick={() => setActiveProject(i)}
                >
                  <div className="thumbnail-image-wrap">
                    {proj.image ? (
                      renderMedia(proj.image, proj.projectName, "")
                    ) : (
                      <div className="thumbnail-placeholder"></div>
                    )}
                  </div>
                  <span className="thumbnail-number">{i + 1}</span>
                </div>
              ))}
            </div>
          )}

          {/* Project Info Section */}
          <div className="project-info-section">
            <div className="project-info-left">
              <h2 className="project-info-title">{project.projectName}</h2>
              <p className="project-description">{project.projectDesc}</p>
              
              {/* Tech Stack Tags */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="project-tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="project-info-right">
              {/* Action Buttons */}
              <div className="project-action-buttons">
                {project.footerLink &&
                  project.footerLink.map((link, i) => (
                    <button
                      key={i}
                      className={`project-action-btn ${i === 0 ? "primary" : "secondary"}`}
                      onClick={() => openUrlInNewTab(link.url)}
                    >
                      {i === 0 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: "6px"}}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      )}
                      {link.name}
                    </button>
                  ))}
              </div>

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="highlight-item">
                      <span className="highlight-stat">{highlight.stat}</span>
                      <span className="highlight-label">{highlight.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
