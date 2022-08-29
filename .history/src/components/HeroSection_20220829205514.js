import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  console.log('video!!');
  return (
    <div className='hero-container'>
      <video autoPlay loop muted playsInline width='100%' height='100%'>
        <source src={require("./video-2.mp4")} type="video/mp4"></source>
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyles='btn--outline' 
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button 
          className='btns' 
          buttonStyles='btn--primary' 
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
