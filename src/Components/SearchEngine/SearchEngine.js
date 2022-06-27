import React from "react";
import "./searchEngine.css";
import Group from "../../assets/images/Group.png";

const SearchEngine = () => {
  return (
    <div className="search_container">
      <div className="search_img">
        <img src={Group} alt="search engine" />
      </div>
      <div className="search_text">
        <h1>The Influencer Search Engine</h1>
        <p className="search_para">
          Find authentic influencers in seconds and leverage their reach to grow
          <br />
          your business
        </p>
        <h4>SUPPORTED NETWORKS</h4>

        <ul>
          <li>
            <span> Twitter(soon)</span>
          </li>
          <li>
            <span>Instragram(soon) </span>
          </li>
          <li>
            <span>YouTube(soon)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchEngine;
