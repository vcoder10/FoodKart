import React, { useEffect, useState } from 'react';
import RestaurantCard from './ResturantCard';
import Filter from './Filter'; // Import the new component
import SortBy from './SortBy'; // Import the new component
import Shimmer from './Shimmer';

import useRestaurant  from '../utils/useRestaurant';


const Body = ({ searchTextToBody }) => {

  const originalResList  = useRestaurant();
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
    return restaurant.info.avgRating > 4.2;
  };

  const filterTopRatedAndVeg = (restaurant) => {
    return restaurant.info.avgRating > 4.2 && restaurant.info.veg;
  };

  const filterTopRatedAndNonVeg = (restaurant) => {
    return restaurant.info.avgRating > 4.2 && !restaurant.info.veg;
  };

  const filterVegRestaurants = (restaurant) => {
    return restaurant.info.veg;
  };

  const filterNonVegRestaurants = (restaurant) => {
    return !restaurant.info.veg;
  };

  
  useEffect(()=>{
  //  console.log('setting filter res list form cutom hook')
    setFilteredRestaurants(originalResList)
    //console.log(filteredRestaurants)
  },[originalResList])

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
          
          <div className="restaurant-list flex flex-wrap">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} {...restaurant} />
            ))}
          </div>
        </div>
      );
};

export default Body;


