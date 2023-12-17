// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './style.css'

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
//  const Header=()=>{
//     return (

//         <div className='header'>

//          <img className='logo' src={"https://img.freepik.com/premium-vector/fast-food-delivery-logo-food-delivery-logo-design-template_664675-639.jpg"} />
//         <div className='nav-items'>
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//         </div>

//         </div>
//     )
//  }
// const ResturantCart =()=>{
//     return (
//         <div className='res-cart'>
//             <img src='' />
//             <h4>Newton Dhaba</h4>
//             <h4>Newton Dhaba</h4>
//             <h4>Newton Dhaba</h4>
//             <h4>Newton Dhaba</h4>
//         </div>
//     )
// }

//  const Body=()=>{
//     return (
//         <div className='body'>
//             <div className='search'>
//                 Search
//             </div>
//             <div className='res-container'>
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//                 <ResturantCart />
//             </div>
//         </div>
//     )
//  }
//  const Footer=()=>{
//     return (
//         <div className='footer'>
//             <h4>Copy Right</h4>
//             <h4>Instagram</h4>
//         </div>
//     )
//  }

//  const AppLayout= ()=>{
//     return(
//         <>
//             <Header />
//             <Body />
//             <Footer />
//         </>
//     )
//  }

//  const root= ReactDOM.createRoot(document.getElementById("abc"));

// root.render(<AppLayout />);

import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import Login from './components/Login';
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import useOnlineStatus from "./utils/useOnlineStatus";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const App = () => {
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  const [userName, setUserName] = useState();

  useEffect(() => {
    // call api to get userName
    const data = {
      name: "vikram",
    };
    setUserName(data.name);
  }, []);

  const searchRestaurants = (text) => {
    setSearchText(text);
  };
  if (!isOnline)
    return (
      <p style={{ color: "red" }}>
        You are offline. Please check your internet connection.
      </p>
    );
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Router>
          <Header onSearch={searchRestaurants} />

          <Routes>
            <Route
              exact
              path="/"
              element={<Body searchTextToBody={searchText} />}
            />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/*" element={<Error />} />
            <Route
              exact
              path="/restaurant/:resId"
              element={
                <Suspense fallback={<h1>loading data....</h1>}>
                  <RestaurantMenu />
                </Suspense>
              }
            />
          </Routes>

          <Footer />
        </Router>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// router code
/**
 * return (

    <Router>
      <Header onSearch={searchRestaurants} />
      <Routes>
        <Route
         exact path="/" 
         element={<Body searchTextToBody={searchText} />}
         
        />
        <Route
         exact path="/about" 
         element={<About />}
        />
        <Route
         exact path="/contact" 
         element={<Contact />}
        />
      </Routes>
        
      <Footer />
    </Router>
  );
 */
