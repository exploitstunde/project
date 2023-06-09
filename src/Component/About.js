import React from "react";
import "../Css/About.css";
import airimg from "../Images/dare.jpeg";
import lag from "../Images/ify.jpeg";
import meg from "../Images/segun.jpeg";
import gag from "../Images/bolaji.jpeg";
import dam from "../Images/dami.jpeg";
import oba from "../Images/obalouwa.jpeg";
import mega from "../Images/profile.jpg";

const About = () => {
  return (
    <>
      <div className="business">
        <h1>Accelerate With Sabre</h1>
        <p>
          Sabre is a leading software and technology company that powers the
          global travel industry. With decades of revolutionary firsts, our team
          of experts drive innovation and ingenuity across the travel ecosystem.
          Sabre partners with airlines, hoteliers, agencies and other travel
          partners to retail, distribute and fulfill travel. Our technology is
          the intelligence behind mobile apps, airport check-in kiosks, online
          travel sites, airline and hotel reservation networks, travel agent
          terminals, and scores of other travel solutions. Positioned at the
          center of the travel ecosystem, our platform enables our customers to
          connect people with experiences that matter in their lives.
        </p>
        <h2 className="tem">Meet our Team:</h2>
        <div className="services">
          <div className="memo">
            <img src={airimg} alt="service1" />
            <h2>Dare Olayiwola</h2>
          </div>

          <div className="memo">
            <img src={lag} alt="service1" />
            <h2>Ifeyinwa Ozioko</h2>
          </div>

          <div className="memo">
            <img src={meg} alt="service1" />
            <h2>Segun Taiwo</h2>
          </div>

          <div className="memo">
            <img src={gag} alt="service1" />
            <h2>Bolaji Oladipo</h2>
          </div>

          <div className="memo">
            <img src={dam} alt="service1" />
            <h2>Damilola Awosope</h2>
          </div>
        </div>
      </div>
      <div className="cowry">
        <div className="mo">
          <img src={oba} alt="service1" />
          <h2>Obaloluwa Oduyemi</h2>
        </div>
        <div className="mo">
          <img src={mega} alt="service1" />
          <h2>Tunde Akindele</h2>
        </div>
      </div>
    </>
  );
};
export default About;
