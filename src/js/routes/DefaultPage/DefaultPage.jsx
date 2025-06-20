import React from 'react';
import { Link } from 'react-router-dom';
import cannot from '../../../assets/cannot-find.jpg'

const DefaultPage = () => {
  return (
    <section className='page-container' id='default'>
      <h1>Sorry cannot find this page</h1>
      <img src={cannot} alt='confused funny face' />
      <Link className='btn' to='/'>Return Home</Link>
    </section>
  )
};

export default DefaultPage;
