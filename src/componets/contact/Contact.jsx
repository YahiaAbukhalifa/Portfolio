import React from "react";
import "./Contact.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
function Contact() {
    
  return (
    <section className="section contact section-padding" id="contact">
      <div className="section-title">
        <span>Contact</span>
        <h3>I want to hear from you </h3>
      </div>
      <div className="contact__container wrapper">
        <div className="contact left">
          <div className="contact__flex">
            <div className="contact__icon">
              <HiLocationMarker />
            </div>
            <div>
              <h3>Adresss</h3>
              <p>Damitee , Egypt</p>
            </div>
          </div>
          <div className="contact__flex">
            <div className="contact__icon">
              <BsFillEnvelopeAtFill />
            </div>
            <div>
              <h3>Email</h3>
              <p>yehyaabukalifa@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact__right">
            <form>
                <input type="text" placeholder="Full name" className="input"/>
                <input type="email" placeholder="Email" className="input"/>
                <input type="number" placeholder="Phone number" className="input"/>
                <textarea name="message" placeholder="message" cols="30" rows="10" className="input"></textarea>
                <button className="btn"><span>Send</span></button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
