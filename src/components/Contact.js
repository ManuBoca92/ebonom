import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-center">
          <h1 className="title">contact me</h1>
          <div className="contact-detail">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>ebonom.n.mfam@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+48732187071</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
