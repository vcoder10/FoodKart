import React, { useContext, useState } from "react";
import Title from "./Title";
import Login from "./Login";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  //console.log("showning cart");
  //console.log(cartItems);
  //console.log("from header to show cart");
  return (
    <div className="header">
      <Title />
      <div className="app-name">FoodKart</div>

      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <NavLink to="/cart">Cart({cartItems.length})</NavLink>
          </li>
          {/*<li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>*/}
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
      <div className=" flex justify-center p-4 m-4">
        <h4 className="m-4 text-cyan-100">{loggedInUser}</h4>
      </div>
      {/* <Login /> */}
    </div>
  );
};

export default Header;
