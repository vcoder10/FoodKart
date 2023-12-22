import React from "react";
// Title component for display logo

import FoodFireLogo from "../images/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg";
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

export default Title;
