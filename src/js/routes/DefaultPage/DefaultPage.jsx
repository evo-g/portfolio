import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <section class="wrapper" id="default">
      <h1>Sorry cannot find this page</h1>
      <img src={require('../../../images/cannot-find.jpg')} alt='confused funny face' />
      <Link to='/'>Return Home</Link>
    </section>
  )
};

export default DefaultPage;
