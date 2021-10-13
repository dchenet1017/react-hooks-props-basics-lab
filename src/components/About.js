import React from "react";
import Links from "./Links.js"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>_{props.bio ? props.bio : " "}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin= 'https://www.linkedin.com/in/liza/'/>
      <Links github='https://github.com/liza'/>
    </div>
  );
}

export default About;
