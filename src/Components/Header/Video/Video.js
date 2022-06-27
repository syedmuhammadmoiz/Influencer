import React from "react";
import "./video.css";
const Video = () => {
  return (
    <div className="video_frame">
      <iframe
        src="https://www.youtube.com/embed/LjYo32s8dBk"
        title=""
        frameborder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
