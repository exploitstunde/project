import React from "react";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341361850382!2d3.3375809144497692!3d6.604433624050279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cd55a1b743%3A0xcf38ecb90a7a938c!2sSabre%20Travel%20Solutions%2C%20Central%20%26%20West%20Africa!5e0!3m2!1sen!2sng!4v1680790223439!5m2!1sen!2sng"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      <div>
        <h2>Send Us A message</h2>
      </div>
      <p className="sub">
        Sabre West Africa serves travel agents, travel suppliers, online travel
        sites, corporations and governments throughout the world. As the world’s
        leading provider of travel solutions and the largest global distribution
        system, our reach is global — yet our service is personal and
        accessible.
      </p>
      <div>
        <form action="" method="POST">
          <div className="foam">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              autoComplete="off "
            />
          </div>
          <div className="mail">
            <input
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
              autoComplete="off "
            />
            <div className="phone">
              <input
                type="number"
                placeholder="Phone Number"
                name="user_number"
                required
                autoComplete="off "
              />
            </div>
          </div>

          <div className="foam">
            <input
              type="text"
              placeholder="Subject"
              name="user_name"
              required
              autoComplete="off "
            />
          </div>

          <div className="txt">
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              autoComplete="off"
            ></textarea>
          </div>
          <div className="bok">
            <button type="submit" class="btn btn--primary">
              Send Message
            </button>
          </div>
        </form>
        <div className="container">
          <h2 className="hd">Sabre West Africa Headquaters</h2>
          <p>
            PTL Towers, 3 Ajao Road, Off Adeniyi Jones, P.O.Box 6613, Ikeja,
            Lagos State.<br></br>
            <br></br>
            Email: enquiries@sabreng.com, helpdesk@sabreng.com <br></br>
            Customer Care: +234 807 929 7113, +234 812 801 4552 TOLLFREE LINES: +2348031230223,
            8031230224
          </p>
        </div>
        <div>Business hours </div>
      </div>
    </>
  );
};

export default Contact;
