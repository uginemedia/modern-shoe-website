import React from 'react'
import "./Feature.css"
import img from "../../assets/feature.png"

const Feature = () => { 
  return (
    <div className="feature">
     <img src={img} alt="" />
        <div className="feature-text">
            <h3>designed for people <span>who never stay still</span></h3>
            <p>We create sneakers that keep up with your energy from courts to streets, and everything in between. Comfort, performance, and attitude in every step.</p>
            <button>Learn More <ion-icon name="arrow-forward-outline"></ion-icon></button>
        </div>
    </div>
  )
}

export default Feature