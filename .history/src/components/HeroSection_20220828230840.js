import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay><source src='../../public/videos/video-1.mp4' type='video/mp4' /></video> 
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
