import React from "react";
import "./Box.css";

const Features = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
      </video>
      <h1>Features</h1>
      <div  className="grid">
        <div className="box box1">Fast and unlimited api calls</div>
        <div className="box box2">Get data per second!</div>
        <div className="box box3">Completely free</div>
        <div className="box box4">Thanks to our distributed machines, the availability is guaranteed</div>
      </div>
    </div>
  );
};

export default Features;
