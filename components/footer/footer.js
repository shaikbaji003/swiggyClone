import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row"></div>
        <div className="icon_style">
          <FontAwesomeIcon icon={faFacebook} />
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faWhatsapp} />
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faInstagram} />
          &nbsp;&nbsp;
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; By continuing past this page, you agree to our Terms of
            Service, Cookie Policy, Privacy Policy and Content Policies. All
            trademarks are properties of their respective owners. 2008-2022 ©
            eatnow™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
