import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4>Sabre Travel Network</h4>
                <ul className="list-unstyled">
                  <li>08024448174</li>
                  <li>Lagos,Nigeria</li>
                  <li>3 Ajao Road, off Adeniyi Jones Ikeja</li>
                </ul>
              </div>
              <div className="icons">
                <TwitterIcon className="icon" />
                <FacebookIcon className="icon" />
                <InstagramIcon className="icon" />
                <LinkedInIcon className="icon" />
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} SABRE INC | All rights reserved
              </p>
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
};
export default Footer;
