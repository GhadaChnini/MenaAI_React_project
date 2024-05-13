import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="mena__footer section__padding">
      <div className="mena__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>
      <div className="mena__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="mena__footer-links">
        <div className="mena__footer-links_logo">
          <img src={logo} alt="" />
          <p>
            junior developer ghada chnini, <br /> All Rights Reserved
          </p>
        </div>
        <div className="mena__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="mena__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="mena__footer-links_div">
          <h4>Get in touch</h4>
          <p>Tunisia, tunis</p>
          <p>25 731 943</p>
          <p>ghadachnini@gmail.com</p>
        </div>
      </div>
      <div className="mena__footer-copyright">
        <p>@2022 MenaAI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
