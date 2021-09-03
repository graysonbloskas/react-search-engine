import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Logo from '../assets/images/not-google.png';
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>

          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className='home__body'>
        <img src={Logo} alt='Logo' className='logo' />
        <Search />
      </div>
    </div>
  );
}

export default Home;
