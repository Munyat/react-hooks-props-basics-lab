import React from "react";
import Link from "./Links.js";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
