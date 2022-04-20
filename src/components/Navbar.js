// rfce
// how to import image
import logo from '../assets/pizzaLogo.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const hom = 'active';
  const abt = '';
  const con = '';
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={logo} alt="pizza" className="logo" />
      </div>

      <ul className="nav-list">
        <li className={hom}>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li className={abt}>
          <Link to="/about" className="link">
            ABOUT
          </Link>
        </li>
        <li className={con}>
          <Link to={'/profile'} className="link">
            PROFILE
          </Link>
        </li>
      </ul>

      <div className="rightside"></div>
    </div>
  );
}

export default Navbar;
