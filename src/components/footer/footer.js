import React from "react";
import "./style.css";
import CallingIcon from "../../image/calling-icon.png";
import Tellephone from "../../image/telephone.png";
import EmailIcon from "../../image/email-icon.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p className="footer-background-text">CONTACT</p>
        <div className="footer-upper-text">
          <p className="footer-upper-heading"> Get in Touch</p>
        </div>
        <div className="footer-get-in-touch-container">
          <div className="footer-address">
            <p className="address-heading">ADDRESS</p>
            <p className="address-data">
              62 , prince colony,

              near Star Shadi Hall.
              <br></br>
              Bhopal ,Madhya Pradesh
            </p>
            <div className="calling-container">
              <img
                src={CallingIcon}
                className="calling-icon"
                width={"18px"}
                height={"18px"}
              />
              <span className="mobile-number">(91) 877 002 4924</span>
            </div>
            <div className="calling-container">
              <img
                src={Tellephone}
                className="calling-icon"
                width={"18px"}
                height={"18px"}
              />
              <span className="mobile-number">(91) 7869 617 675</span>
            </div>
            <div className="calling-container">
              <img
                src={EmailIcon}
                className="calling-icon"
                width={"18px"}
                height={"18px"}
              />
              <span className="mobile-number">gourruchi50@gmail.com</span>
            </div>
          </div>
          {/* <div className="footer-form">
            <p className="footer-form-heading">SEND US A NOTE</p>
            <form>
              <div className="input-field-container">
                <input type="text" className="input-field" placeholder="Name" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                />
              </div>
              <textarea
                class="inputarea-field"
                placeholder="Tell us more about your needs.."
              ></textarea>
              <button className="footer-button">Send Message</button>
            </form>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copywrite">
          <p className="copyright">
            Copyright © 2025<span className="name-text-footer"> Ruchi</span>.
            All Rights Reserved.
          </p>
        </div>
        <div className="footer-conditon">
          <p>
            Terms & Policy{" "}
            <span className="footer-bottom-text">Disclaimer</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
