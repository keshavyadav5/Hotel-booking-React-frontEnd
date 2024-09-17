import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Link as Redirect } from "react-router-dom"


function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <Link to='back-ground' smooth={true} offset={0} duration={100}>
      {/* <img src="../src/assets/image.png" alt="logo" className="logo" /> */}
      <h2 className='logo-h2'>APEX</h2>
      </Link>

      <ul className={mobileMenu ? '' : 'hide-menu'}>
        <li><Link to='about' smooth={true} offset={-80} duration={100}>Features</Link></li>
        <li><Link to='room' smooth={true} offset={-80} duration={100}>Services</Link></li>
        <li><Link to='night' smooth={true} offset={-80} duration={100}>Resources</Link></li>
        <li><Link to='address' smooth={true} offset={-25} duration={100}>Contact</Link></li>
      </ul>
      <Redirect to="/login" className="btn navbar-btn">GET STARTED</Redirect>
      <div className="navbar-login"></div>

      <img
        src="../src/assets/menu-icon.png"
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
    </div>
  );
}

export default Navbar;
