import React from "react";
import Timeline from "../../components/Timeline";

function AboutPage () {
  return (
    <section className="page-container">
      <div className="about-intro">
        <h3>About Me</h3>
        <p className="about-me">
          Hi, my name is Evodio Garcia! Thanks for checking out my portfolio. I’m an automotive mechanic turned
          software developer, who went from breaking down cars to breaking down code. Down below is small
          timeline of my journey so far.
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
