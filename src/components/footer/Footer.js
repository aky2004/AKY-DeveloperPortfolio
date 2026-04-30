import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {/* {emoji("Made with ❤️ by ")} */}
          <span className="logo" style={{ fontSize: "1.3em", float: "none", display: "inline-block", margin: "0 5px" }}>
            <span style={{ background: "linear-gradient(90deg, #5b21b6, #9d174d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              <span> &lt;</span>
              <span className="logo-name" style={{ fontFamily: "'Agustina Regular', sans-serif", fontWeight: "bold", padding: "0 5px" }}>Aman Kumar Yadav</span>
              <span>/&gt;</span>
            </span>
          </span>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          {/* <span className="grey-color" style={{ fontSize: '14px' }}>Powered by</span> */}
          <i className="fab fa-react" style={{ fontSize: '22px', color: '#61DBFB' }} title="React"></i>
          <i className="fab fa-node-js" style={{ fontSize: '22px', color: '#68A063' }} title="Node.js"></i>
          <i className="fab fa-js-square" style={{ fontSize: '22px', color: '#F0DB4F' }} title="JavaScript"></i>
          <i className="fab fa-css3-alt" style={{ fontSize: '22px', color: '#2965f1' }} title="CSS"></i>
          <i className="fab fa-sass" style={{ fontSize: '22px', color: '#cc6699' }} title="Sass"></i>
          <i className="devicon-mongodb-plain" style={{ fontSize: '22px', color: '#47A248' }} title="MongoDB"></i>

        </p>
      </div>    
    </Fade>
  );
}
