import React from "react";
import Check from "../../assets/images/check.png";
import wheat from "../../assets/images/wheat.png";
import "./pricing.css";
const Pricing = () => {
  return (
    <div className="pricing_container">
      <div className="pricing_header">
        <h1>Simple & Transparent Pricing</h1>
        <div className="pricing_text">
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Unlimited Searches</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Unlimited Saved lists</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Twitter Influencers</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Instagram Influencers</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>YouTube Influencers (soon)</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Export Data</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Influencer's granular details</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>CPM estimatin </p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>3rd party integrations</p>
          </div>
          <div className="flex">
            <img className="pricing_check" src={Check} alt="" />
            <p>Future Updates Included</p>
          </div>
        </div>
      </div>
      <div className="pricing_card">
        <div className="pricing_card_text">
          <p className="was">WAS</p>
          <p className="card_life">
            <s> $199/lifetime</s>
          </p>
          <div className="pricing_line"></div>
          <p className="now">Now</p>
          <p className="life">$99/lifetime</p>
          <p className="buy">BUY NOW</p>
        </div>
        <div className="pricing_cir">
          <img className="wheat" src={wheat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
