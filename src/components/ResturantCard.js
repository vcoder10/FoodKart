// Restaurant card component: Image, name, cuisine
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IMG_CDN_URL, user } from "../utils/constants";
export const dummy3 =
  "dummy data from resturantCard using named and defaurlt export present here";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
    id,
  } = props.info;
  //console.log(props);
  return (
    <NavLink
      to={"/restaurant/" + id}
      style={{
        textDecoration: "none",
      }}
    >
      <div className="card" style={{ color: "black" }}>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>

        <h5>{costForTwo}</h5>

        <span className="rating-time">
          <h5>{sla.deliveryTime} Minutes</h5>
          <h4>
            {avgRating}
            <i className="fa-solid fa-star"></i>
          </h4>
        </span>
      </div>
    </NavLink>
  );
};

export default RestaurantCard;
