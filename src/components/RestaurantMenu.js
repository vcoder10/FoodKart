import ShimmerMenu from "./ShimmerMenu";

import { IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import bittuRestaurantMenu from "../utils/bittuRestaurantMenu";

import MenuItems from "./MenuItems";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = bittuRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(true);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
    return <ShimmerMenu />;
  }
  // console.log(resInfo)
  const {
    name,
    city,
    areaName,
    cuisines,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.data?.cards[0]?.card?.card?.info;
  //console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const catagoryItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  //console.log(catagoryItems);
  return (
    <div>
      <div className="menu-container">
        <div className="res-summary">
          <img
            className="res-img"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
          />

          <div className="res-summary-details">
            <div className="res-details">
              <h2 className="res-title">{name}</h2>
              <p>
                {areaName} , {city}
              </p>
              <p>{cuisines.join(", ")}</p>
            </div>

            <div className="res-rating">
              <div>
                <i className="fa-solid fa-star"></i> {avgRating}
              </div>
              <div>
                <h5>{totalRatingsString}</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <button 
                    className="veg-btn"
                    data-testid="toggle-switch"
                    role="switch"
                    aria-checked="false"
                    aria-aria-label="Veg Only">Veg Only
                </button>  */}
      </div>
      {catagoryItems.map((itemsOf, index) => (
        <div className="res-menu-content" key={index}>
          <MenuItems
            index={index}
            list={itemsOf?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={(i) => {
              i == 1 ? setShowIndex(index) : setShowIndex(null);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
