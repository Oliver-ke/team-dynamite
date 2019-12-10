import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <Link to="/auth">Sign In</Link>
    </header>
  );
};

export default Header;
