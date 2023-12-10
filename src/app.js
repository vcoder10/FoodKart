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




import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const searchRestaurants = (text) => {
    setSearchText(text);
  };

  return (
    <Router>
      <div>
        <Header onSearch={searchRestaurants} />
        <Routes>
          <Route path="/" element={<Body searchTextToBody={searchText} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);