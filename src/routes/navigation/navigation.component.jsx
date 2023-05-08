import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

import React from 'react';

const Navigation = () => {
  return (
    <>
      <div className='nav-container'>
        <Link
          className='logo-container'
          to='/'>
          HOME
        </Link>
        <div className='nav-links-container'>
          <Link
            className='nav-link'
            to='/songwriting'>
            SONGWRITING
          </Link>
          <Link
            className='nav-link'
            to='/musicproduction'>
            MUSIC PRODUCTION
          </Link>
          <Link
            className='nav-link'
            to='/inspirations'>
            INSPIRATIONS
          </Link>
          <Link
            className='nav-link'
            to='/hardware'>
            HARDWARE
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
