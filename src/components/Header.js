
import React, { useState } from 'react';
import Title from './Title';
import Login from './Login';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  console.log("header rendered");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="header">
      <Title />
      <div className="app-name">FoodKart</div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Search input and button */}
      <div className="search">
        <input
          className="search-box"
          type="text"
          value={searchText}
          placeholder="Search items..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <Login />
    </div>
  );
};

export default Header;
