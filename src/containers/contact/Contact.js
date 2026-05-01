import React, {useContext, useState} from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const TEMPLATES = {
  Hiring: `Hello Aman, I am reaching out to discuss an exciting opportunity at our place.\n\n## Position Details:\n\n## Company Details:`,
  Chat: `Hello Aman! I am reaching out to have a casual chat scheduled sometime.\nI am available on <AVAILABLE_TIME>.\nSpecific Topics I would like to discuss: <IF_ANY_SPECIFIC_TOPICS>`
};

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [activeIntent, setActiveIntent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    // If user edits message manually, deselect intent
    if (e.target.name === "message") {
      setActiveIntent("");
    }
  };

  const handleIntent = (intent) => {
    if (activeIntent === intent) {
      // Deselect — clear message
      setActiveIntent("");
      setFormData({...formData, message: ""});
    } else {
      setActiveIntent(intent);
      setFormData({...formData, message: TEMPLATES[intent]});
    }
  };

  const clearMessage = () => {
    setActiveIntent("");
    setFormData({...formData, message: ""});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = activeIntent
      ? `[${activeIntent}] Message from ${formData.name}`
      : `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.open(
      `mailto:${contactInfo.email_address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-heading-div">
          <h1 className={isDark ? "dark-mode section-heading" : "section-heading"}>
            {contactInfo.title}
          </h1>
          <p className={isDark ? "dark-mode section-subtitle" : "section-subtitle"}>
            {contactInfo.subtitle}
          </p>
        </div>
        <div className="contact-premium-wrapper">
          {/* ---- Left Column ---- */}
          <div className="contact-left">
            <h1 className="contact-premium-title">
              Let's work<br />
              <span className="contact-highlight">together.</span>
            </h1>

            <p className="contact-left-quote">
              I'm a full-stack developer passionate about building 
              real-world products. Whether it's a project, opportunity, 
              or just a conversation — I'm all ears.
            </p>

            {/* <div className="contact-status-badges">
              <div className="status-badge green-badge">
                <span className="status-badge-icon green-icon">
                  <span className="status-dot green"></span>
                </span>
                Open to Work
              </div>
              <div className="status-badge lightning-badge">
                <span className="status-badge-icon amber-icon">⚡</span>
                Replies within 24 hours
              </div>
            </div>

            <div className="contact-left-divider"></div> */}

            <div className="contact-info-row">
              <a className="contact-info-item" href={`mailto:${contactInfo.email_address}`}>
                <i className="fas fa-envelope"></i>
                <span>{contactInfo.email_address}</span>
              </a>
              {contactInfo.number && (
                <a className="contact-info-item" href={`tel:${contactInfo.number}`}>
                  <i className="fas fa-phone-alt"></i>
                  <span>{contactInfo.number}</span>
                </a>
              )}
            </div>

            <div className="contact-left-divider"></div>

            {/* Social Media Pill Buttons */}
            <div className="contact-social-pills">
              {socialMediaLinks.github && (
                <a href={socialMediaLinks.github} className="social-pill" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i><span>GitHub</span>
                </a>
              )}
              {socialMediaLinks.linkedin && (
                <a href={socialMediaLinks.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i><span>LinkedIn</span>
                </a>
              )}
              {socialMediaLinks.gmail && (
                <a href={`mailto:${socialMediaLinks.gmail}`} className="social-pill" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i><span>Email</span>
                </a>
              )}
              {socialMediaLinks.instagram && (
                <a href={socialMediaLinks.instagram} className="social-pill" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i><span>Instagram</span>
                </a>
              )}
              {socialMediaLinks.leetcode && (
                <a href={socialMediaLinks.leetcode} className="social-pill" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i><span>LeetCode</span>
                </a>
              )}
            </div>
          </div>

          {/* ---- Right Column - Form ---- */}
          <div className="contact-right">
            <p className="contact-form-intro">
              Got something on your mind? Reach me at{" "}
              <a href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>{" "}
              or use the form below — let's make something great together.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group textarea-wrapper">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                {/* Intent Toggles + Clear */}
                <div className="intent-row">
                  <div className="intent-toggles">
                    <button
                      type="button"
                      className={`intent-btn ${activeIntent === "Hiring" ? "active hiring" : ""}`}
                      onClick={() => handleIntent("Hiring")}
                    >
                      <span className="intent-dot hiring-dot"></span>
                      Interested In Hiring!
                    </button>
                    <button
                      type="button"
                      className={`intent-btn ${activeIntent === "Chat" ? "active chat" : ""}`}
                      onClick={() => handleIntent("Chat")}
                    >
                      <span className="intent-dot chat-dot"></span>
                      Some Chit-Chat! 
                    </button>
                  </div>

                  {formData.message && (
                    <button
                      type="button"
                      className="clear-btn"
                      onClick={clearMessage}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      Clear Message!
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${submitted ? "submitted" : ""}`}
              >
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 16 16 12 12 8"></polyline>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
