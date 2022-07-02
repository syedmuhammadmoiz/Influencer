import React, { useState } from "react";
import Play from "../../../assets/images/playButton.png";
import "./video.css";
const Video = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="video_frame">
      <img
        className={play ? "play_hidden" : "video_play"}
        src={Play}
        alt=""
        onClick={() => setPlay(true)}
      />
      <iframe
        src={
          play
            ? "https://www.youtube.com/embed/LjYo32s8dBk?autoplay=1"
            : "https://www.youtube.com/embed/LjYo32s8dBk"
        }
        title=""
        frameborder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
