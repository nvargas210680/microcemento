import React from "react";
import videoBg from "/src/assets/microcementoProject.mp4";
import "./AutoVideo.css";

function AutoVideo() {
  return (
    <div className="backgroundColor">
      <video className="videoFormat" src={videoBg} autoPlay loop muted />
      {/* <div className="primaryText">Nuestra Misión y Valores</div> */}
    </div>
  );
}

export default AutoVideo;
