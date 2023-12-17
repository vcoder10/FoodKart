import { useState, useEffect } from "react";

import { SWIGGY_API_URL } from "../utils/constants";
const useRestaurant = () => {
  const [originalResList, setOriginalResList] = useState([]);

  useEffect(() => {
    //console.log("useEffect Called from cutomhooks useRestaurant");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const restaurant =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log('from custom hook rs')
    //console.log(restaurant)
    setOriginalResList(restaurant);

    //setFilteredRestaurants(restaurant);
  };
  return originalResList;
};
export default useRestaurant;
