import React from "react";
// import { NavLink } from "react-router-dom";
import homeimg from "../Images/SabreRed.png";
import nxtimg from "../Images/Sabre360.png";
import jusimg from "../Images/Developers.png";
import meimg from "../Images/Proposal.png";
import market from "../Images/MarketIntelligence.png";
import "../Css/ServiceStyle.css";

const Services = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className="services">
        <div className="card">
          <a href="https://www.sabreng.com/sabre360#agencies-section">
            <img src={homeimg} alt="service1" />
          </a>
          <h2>SABRE RED 360 for Agencies</h2>
          <div className="btnbox">
            <div className="btn">
              <a
                href="https://www.sabreng.com/sabre360#agencies-section"
                className="readMore"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <a href="https://www.sabreng.com/sabre360#providers-section">
            <img src={nxtimg} alt="service1" />
          </a>
          <h2>SABRE RED 360 for Providers</h2>
          <div className="btnbox">
            <div className="btn">
              <a
                href="https://www.sabreng.com/sabre360#providers-section"
                className="readMore"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <a href="https://www.sabreng.com/sabre360#developers-section">
            <img src={jusimg} alt="service1" />
          </a>
          <h2>SABRE RED 360 for Developers</h2>
          <div className="btnbox">
            <div className="btn">
              <a
                href="https://www.sabreng.com/sabre360#developers-section"
                className="readMore"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <a href="https://www.sabre.com/products/market-intelligence/">
            <img src={meimg} alt="service1" />
          </a>
          <h2>Improve Selling Experience</h2>
          <div className="btnbox">
            <div className="btn">
              <a
                href="https://www.sabre.com/products/market-intelligence/"
                className="readMore"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="bem">Tap Into Valuable Data for Commercial Planning</h2>
      <p className="mem">
        Airlines face a number of business challenges as they seek to optimize
        planning. They must access accurate information on economic conditions
        and maximize profitability through routings and flight frequencies. In
        addition, carriers must make data-driven decisions based on labor costs,
        aircraft allocation and customer amenities. Market Intelligence delivers
        data-analysis capabilities and critical business insights that encompass
        network planning, revenue management and sales. As a result, airlines
        are able to attract higher-value customers, identify new opportunities
        and respond to market dynamics more efficiently.
      </p>
      <div className="imge">
        <img src={market} alt="home" />
      </div>
    </>
  );
};

export default Services;
