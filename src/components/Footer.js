// const Footer = () => {
//     return (
//       <div className="footer">
//         Created By
//         <i className="fa-solid fa-heart"></i>
//         <a href="https://www.linkedin.com/in/vcoder10/" target="_blank">
//           Vikramaditya Singh
//         </a>
//         <i className="fa-solid fa-copyright"></i>2023
//         <strong>
//           Food<span>Kart</span>
//         </strong>
//       </div>
//     );
//   };

//   export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/vcoder10/"
        target="_blank"
        rel="noopener noreferrer" // Add rel attribute for security
      >
        Vikramaditya Singh
      </a>
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span className="footer-highlight">Kart</span>
      </strong>
    </div>
  );
};

export default Footer;
