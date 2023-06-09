import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../Images/airplane.jpg";
import "../Css/HomeAbout.css";

const Home = () => {
  return (
    <>
      <div className="mainSection">
        <div className="contentBox">
          <h1>The Power Behind Travel </h1>
          <p>
            At Sabre, we are committed to powering the next generation of
            retailing, distribution and fulfillment in the travel industry. The
            most important thing we do is connect buyers with sellers of travel
            and enable those sellers to efficiently maximize the value of their
            content in a personalized way. Travel agencies, corporate travel
            departments, airlines, and other travel related companies across the
            globe rely on Sabre every day for providing technology that is
            intelligent, mobile-enabled, scalable, open, flexible and data-rich.
            Our legacy was built on developing revolutionary firsts, and we
            continue that spirit and drive of delivering innovative solutions in
            order to enable our customers to connect people with experiences
            that matter in their lives.
          </p>
          <div className="box">
            <div className="button">
              <NavLink to="/about" className="look">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={homeimg} alt="home" />
        </div>
      </div>
    </>
  );
};
export default Home;
