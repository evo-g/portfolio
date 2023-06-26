import React, { useState } from 'react';
import { mainTechnologies, familiarServices, servicesMedium } from '../../data';
import './Services.css';

const mainTech = mainTechnologies.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

const mediumTech = servicesMedium.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

const familiarTech = familiarServices.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

function ServicePage() {
  const [active, setActive] = useState(1);

  function setActiveTab(id) {
    setActive(id);
  }

  return (
    <div className="page-container" id="services">
      <div className='tab-container'>
        <ul className='tab-nav'>
          <li className={`${active === 1 ? 'active' : ''} tabs`} onClick={() => setActiveTab(1)}>
            <h2>Core Technologies</h2>
          </li>
          <li className={`${active === 2 ? 'active' : ''} tabs`} onClick={() => setActiveTab(2)}>
            <h2>Comfortable working with</h2>
          </li>
          <li className={`${active === 3 ? 'active' : ''} tabs`} onClick={() => setActiveTab(3)}>
            <h2>Familiar Technologies and Expoloring</h2>
          </li>
        </ul>
        <div className={`${active === 1 ? 'active' : ''} content`}>
          <ul>{mainTech}</ul>
        </div>
        <div className={`${active === 2 ? 'active' : ''} content`}>
          <ul>{mediumTech}</ul>
        </div>
        <div className={`${active === 3 ? 'active' : ''} content`}>
          <ul>{familiarTech}</ul>
        </div>
      </div>
    </div>
  )
}

export default ServicePage;


{/* <div className=''>
  <i className="fab fa-html5"></i>
  <i className="fab fa-css3-alt"></i>
  <i className="fab fa-js"></i>
  <i className="fab fa-node"></i>
  <i className="fab fa-react"></i>
</div> */}