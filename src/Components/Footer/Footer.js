import React from "react";
import Content from "../../assets/images/content.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/insta.png";
import tweet from "../../assets/images/tweet.png";
import apple from "../../assets/images/apple.png";
import play from "../../assets/images/play.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="footer_container">
        <div className="footer_on">
          <img className="footer_content" src={Content} alt="" />
          <p className="footer_para">
            The only platform you will ever need for <br /> Your content
            marketing and Socail media
            <br />
            management.
          </p>
        </div>
        <div className="footer_mar">
          <p className="footer_head">Product</p>
          <p className="footer_para">Discovery</p>
          <p className="footer_para">Curation</p>
          <p className="footer_para">Automation</p>
          <p className="footer_para">Planner</p>
          <p className="footer_para">Publish</p>
          <p className="footer_para">Analytics</p>
        </div>
        <div className="footer_mar1">
          <p className="footer_head">Resources</p>
          <p className="footer_para">Partner Program</p>
          <p className="footer_para">Blog</p>
          <p className="footer_para">Knowledgebase</p>
          <p className="footer_para">Changelog</p>
          <p className="footer_para">Support</p>
        </div>
        <div className="footer_mar2">
          <p className="footer_head">Legal</p>
          <p className="footer_para">Terms & Conditions</p>
          <p className="footer_para">Privacy Policy</p>
          <p className="footer_para">Contact Us</p>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_flex">
          <div className="footer_bottom_img">
            <img className="face" src={face} alt="" />
            <img className="tweet" src={tweet} alt="" />
            <img className="insta" src={insta} alt="" />
          </div>
          <p className="footer_bottom_para copy_right">
            &copy; 2016 - 2017 ContentStudio
          </p>
        </div>
        <div className="footer_side">
          <p className="footer_bottom_para"> You can download our app from.</p>
          <div className="footer_is">
            <img className="apple" src={apple} alt="" />
            <img className="play" src={play} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
