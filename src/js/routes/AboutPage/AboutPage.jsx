import React from "react";
import Timeline from "../../components/Timeline";

function AboutPage () {
  return (
    <section className="page-container">
      <div className="about-intro">
        <h2>About Me</h2>
        <p className="about-me">
        Hi, my name is Evodio Garcia! Thanks for checking out my portfolio. I’m an automotive mechanic software developer, who went from breaking down cars to breaking down code. I am a San Diego Native, and love to learn new information. I love working with my hands, it’s why I love coding and being a problem solver!  Down below is timeline of my journey so far.
        </p>
      </div>
      <Timeline />
      <div className="about-intro">
        <p>Would love to work with you in the future. Please contact me for further details</p>
      </div>
    </section>
  )
}

export default AboutPage;
