// Restaurant card component: Image, name, cuisine

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (betichod) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
    
  }= betichod.info;

  function openRestaurantLink() {
    if (window.open(link, "_blank")) {
        // Do nothing, as the window was opened successfully
    } else {
        // Handle the case where the window was blocked (e.g., show a message)
        alert("Please allow pop-ups to view the restaurant link.");
    }
}
  const {link} = betichod.cta;
    return (
     
      
      <div className="card">
        
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          onClick={openRestaurantLink}
        />
        
        <h2>{name}</h2>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{areaName}</h4>
        <span>
        <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{sla.deliveryTime} Minutes</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
      
    );
  };

  export default RestaurantCard;