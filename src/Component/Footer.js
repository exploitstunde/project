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
        <div className="container container-flex">
          <div className="icon">
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
          <div className="line"></div>
          <div className="copyright">
            <p>All rights reserved 2023 &copy;</p>
            <p>Build by Dev Tee</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
