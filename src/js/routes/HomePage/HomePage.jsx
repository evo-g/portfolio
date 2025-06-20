import React, { Fragment } from 'react';
import Welcome from '../../components/Welcome';
import Projects from '../../components/Projects';
import './HomePage.css';

function HomePage() {

  return (
    <Fragment>
      <Welcome />
      <section className='page-container'>
        <h2 className='projects-h2'>Projects</h2>
        <div className='grid-row projects-section'>
          <Projects />
        </div>
      </section>
    </Fragment>
  )
}

export default HomePage;
