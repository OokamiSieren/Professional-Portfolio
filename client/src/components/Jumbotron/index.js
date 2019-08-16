import React from "react";
import "./style.css";
// import Slide from 'react-reveal/Slide';
import Typist from "react-typist";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 400,
        clear: "both",
        paddingTop: 170,
        textAlign: "center"
      }}
      className="jumbotron font_righteous"
    >
      {children}
      {/* <Slide right> */}
      <Typist cursor={{ hideWhenDone: true }}>
        <h1>Full Stack Web Developer</h1>
      </Typist>
      {/* </Slide> */}
    </div>
  );
}

export default Jumbotron;
