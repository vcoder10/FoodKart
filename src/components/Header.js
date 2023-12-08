
import React from 'react';
import Title from './Title';
import Login from './Login';

const Header = () => {
  
  return (
    <div className="header">
      <Title />
      <div className="app-name">FoodKart</div>
      <div className='search'>
        <input placeholder='Search items...' />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
      <Login />
    </div>
  );
};

export default Header;


  

