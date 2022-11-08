import React from "react";
import "./Footter.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footter = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footter;
