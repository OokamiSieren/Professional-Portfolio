import React from "react";
import "./style.css";
import Typist from "react-typist";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 495,
        clear: "both",
        paddingTop: 170,
        textAlign: "center"
      }}
      className="jumbotron font_righteous"
    >
      {children}
      <Typist cursor={{ hideWhenDone: true }}>
        <h1>Diana Murillo</h1>
        <h1>Full Stack Web Developer</h1>
      </Typist>
    </div>
  );
}

export default Jumbotron;
