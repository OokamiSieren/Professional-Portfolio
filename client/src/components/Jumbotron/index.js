import React from "react";
import "./style.css";

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
      <h1>Full Stack Web Developer</h1>
    </div>
  );
}

export default Jumbotron;