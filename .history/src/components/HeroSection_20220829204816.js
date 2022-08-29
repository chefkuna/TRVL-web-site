import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  console.log('video!!');
  return (
    <div className='hero-container'>
      <video 
        src="./video-1.mp4"
        autoPlay loop muted
        />
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
