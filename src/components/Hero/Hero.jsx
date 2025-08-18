import React from 'react'
import './Hero.css'
import heroImage from "../../assets/hero.png"
  
const Hero = () => {
  return (
    <div className="hero">
        <div className="paint-splash"></div>
        <div className="hero-text">
            <span>Sale Products</span>
            <h1>Nike Ari Max 2025</h1>
            <p>Your one-stop shop for the latest in footwear fashion.</p>
            <div className="socials">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="#"><ion-icon name="logo-pinterest"></ion-icon></a>
        </div>
            <button>Make Your Big Purchase!</button>
        </div>
        <div className="hero-image">
            <img src={heroImage} alt='Hero-image' />
        </div>
    </div>
  )
}

export default Hero