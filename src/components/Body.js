import React, { useEffect, useState } from 'react';
import RestaurantCard from './ResturantCard';
import Filter from './Filter'; // Import the new component
import SortBy from './SortBy'; // Import the new component
import Shimmer from './Shimmer';

const Body = ({ searchTextToBody }) => {

  const [originalResList , setOriginalResList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  const applyFilter = (filterFunction) => {
    const filtered = originalResList.filter(filterFunction);
    //setFilteredRestaurants(filtered);
    setFilteredRestaurants(filtered);
  };

  const sortLowToHigh = () => {
    const sorted = [...filteredRestaurants].sort((a, b) => {
      const first = a.info?.costForTwo ? parseInt(a.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      const second = b.info?.costForTwo ? parseInt(b.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      return first - second;
    });
    //setFilteredRestaurants(sorted);
    setFilteredRestaurants(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...filteredRestaurants].sort((a, b) => {
      const first = a.info?.costForTwo ? parseInt(a.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      const second = b.info?.costForTwo ? parseInt(b.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      return second - first;
    });
    //setFilteredRestaurants(sorted);
    setFilteredRestaurants(sorted);
  };

  const filterTopRated = (restaurant) => {
    return restaurant.info.avgRating > 3.2;
  };

  const filterTopRatedAndVeg = (restaurant) => {
    return restaurant.info.avgRating > 3.2 && restaurant.info.veg;
  };

  const filterTopRatedAndNonVeg = (restaurant) => {
    return restaurant.info.avgRating > 3.2 && !restaurant.info.veg;
  };

  const filterVegRestaurants = (restaurant) => {
    return restaurant.info.veg;
  };

  const filterNonVegRestaurants = (restaurant) => {
    return !restaurant.info.veg;
  };

  useEffect(()=>{
    console.log("useEffect Called");
    fetchData();
  },[])
  const fetchData = async ()=>{
    const latNlong = "lat=22.572646&lng=88.36389500000001";
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?${latNlong}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
    const json = await data.json();
    const restaurant= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setOriginalResList(restaurant);
    setFilteredRestaurants(restaurant);
    console.log(restaurant);
    console.log(json);
  }

  useEffect(() => {
    searchRestaurants(searchTextToBody);
  }, [searchTextToBody]);

  const searchRestaurants = (text) => {
    const searchedRes = originalResList.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurants(searchedRes);
  };
  return  filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) :
      (
        <div className='body'>
          <Filter
            onApplyFilter={applyFilter}
            filters={[
              { label: 'Top Rated', filterFunction: filterTopRated },
              { label: 'Top Rated and Veg', filterFunction: filterTopRatedAndVeg },
              { label: 'Top Rated and Non-Veg', filterFunction: filterTopRatedAndNonVeg },
              { label: 'Veg Only', filterFunction: filterVegRestaurants },
              { label: 'Non-Veg Only', filterFunction: filterNonVegRestaurants },
            ]}
          />
          <SortBy onSortLowToHigh={sortLowToHigh} onSortHighToLow={sortHighToLow} />
          
          <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} {...restaurant} />
            ))}
          </div>
        </div>
      );
};

export default Body;


