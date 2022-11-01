import React from 'react';
import Navfeed from '../components/navfeed';
import Feed from '../components/feed';
import Interests from '../components/interests';
import Navquick from '../components/navquick';
import "./profileS.css";

const About = () => {
  
  return (
    <div className='profile'>
      <Navfeed />
      <div className='profile_body'>
        <Interests />
        <Feed />
        <Navquick />
      </div>
    </div>
    


  )
}

export default About;