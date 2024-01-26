import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import Logout from '../logout/Logout';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon' onClick={OpenSidebar}>
        <BsJustify className='icon' />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
        <input type="text" placeholder="Search..." className="search-field" />
      </div>
      <div className='header-right'>
        <Logout/>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
