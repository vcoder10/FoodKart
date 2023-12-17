// Login.jsx
// import React, { useState } from 'react';
// import profilePhoto from '../images/photo.jpg';

// const Login = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="login">
//       <div className="profile" onClick={toggleMenu}>
//         <img src={profilePhoto} alt="Profile" />
//       </div>
//       {showMenu && (
//         <div className="options">
//           <div className="option">View Cart</div>
//           <div className="option">Account</div>
//           <div className="option">Logout</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

// Login.jsx
import React, { useState } from 'react';
import profilePhoto from '../images/photo.jpg';
//import './login.css'; // Import the CSS file

const Login = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="login ">
      <div className="profile " onClick={toggleMenu}>
        <img  src={profilePhoto} alt="Profile" />
        <div className={`toggle-button ${showMenu ? 'active' : ''}`}>&#9660;</div>
      </div>
      {showMenu && (
        <div className="options">
          <div className="option">View Cart</div>
          <div className="option">Account</div>
          <div className="option">Logout</div>
        </div>
      )}
    </div>
  );
};

export default Login;

