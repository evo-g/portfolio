
import React from 'react';
import { Link } from 'react-router-dom';
import Self from '../../../assets/self.jpg';
import './Welcome.css';


const Welcome = () => {
  const currentYear = new Date().getFullYear();
  const codingYears = currentYear - 2018;
  const professionalYears = currentYear - 2021;

  return (
    <div className="hero">
      <div className="card-child">
        <img src={Self} alt="Evodio Garcia" />
      </div>
      <div className="card-child">
        <h1>Hi! I am <strong>Evodio</strong>, a Software Developer.</h1>
        <p>
          Feel free to call me <strong>Evo</strong> for short. I am a San Diego native who enjoys coding! 
          I have been in tech for about <strong>{codingYears} years</strong> hands on and 
          <strong> {professionalYears} years</strong> professionally, along with several years of experience as an automotive mechanic. 
          You can check out some projects below, or click on the link to find out more about my journey. 
          A little bit of context on my site — I created it using React and GraphQL to pull in my projects and history. 
          CSS needs some polishing.
        </p>
        <div className="button-container">
          <Link className='btn btn-link' to="/about">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

// fix the blocky button change the layout possibly maybe use a different image