// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './style.css'
 /**
 * ? Heading
 * !    logo
 * !    nav-items
 * 
 * ? Body
 * 
 * ? Foote
 */
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


// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";


import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
//import Carousel from "./components/Carousel";


// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/*<Carousel/>*/}
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);