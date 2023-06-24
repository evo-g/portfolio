import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../assets/profile.jpg';

const Footer = () => {
  return (
    <Fragment>
      <section className='connect'>
        <div className='end'>
          <h3>Get in Touch With Me</h3>
        </div>
        <div className='in-touch'>
          <a href='https://www.linkedin.com/in/evodio-garcia-57761669/' target='_blank' rel='noopener' alt='personal linkedin'>
            <i className="fab fa-linkedin icon"></i>
          </a>
          <a href='https://github.com/evo-g' target='_blank' rel='noopener' alt='personal github link'>
            <i className="fab fa-github-square icon"></i>
          </a>
          <Link to='/contact' alt='contact page'>
            <i className="far fa-envelope icon"></i>
          </Link>
        </div>
      </section>
      <section class='footer-content'>
        <a href='/'><img src={Profile} alt='my avatar/home page' /></a>
        <div className='column-break'>
          <span>My Portfolio</span>
          <span>&copy; 2018</span>
        </div>
      </section>
    </Fragment>
  )
}

export default Footer;
