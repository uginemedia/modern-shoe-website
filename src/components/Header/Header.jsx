import React, { useState } from 'react'
import "./Header.css"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return <>
    <div className="header">
        <a href="#" className="logo">Modern<span>Shoe.</span></a>
        <nav>
            <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="items">
            <button>Shop Now</button>
            <div>
                <a href="#"><ion-icon name="person-outline"></ion-icon></a>
                <a href="#"><ion-icon name="cart-outline"></ion-icon></a>
            </div>
        </div>
        <button id="menu" onClick={toggleMenu}><ion-icon name="menu-outline"></ion-icon></button>
    </div>

    <div className={`sub-header ${openMenu ? 'open' : ''}`}>
        <button id='close-menu' onClick={toggleMenu}><ion-icon name="close-outline"></ion-icon></button>
        <nav>
            <ul className='sub-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <div className="sub-items">
            <button>Shop Now</button>
            <div>
                <a href="#"><ion-icon name="person-outline"></ion-icon></a>
                <a href="#"><ion-icon name="cart-outline"></ion-icon></a>
            </div>
        </div>
    </div>
  </>
}

export default Header