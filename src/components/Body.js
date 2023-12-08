

// import React, { useState } from 'react';
// import RestaurantCard from './ResturantCard';
// import Filter from './Filter'; // Import the new component
// import restaurantList2 from '../utils/mockData2';

// const Body = () => {
//   const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList2);

//   const applyFilter = (filterFunction) => {
//     const filtered = restaurantList2.filter(filterFunction);
//     setFilteredRestaurants(filtered);
//   };

//   const filterTopRated = (restaurant) => {
//     return restaurant.info.avgRating > 4.2;
//   };

//   const filterTopRatedAndVeg = (restaurant) => {
//     return restaurant.info.avgRating > 4.2 && restaurant.info.veg;
//   };

//   const filterTopRatedAndNonVeg = (restaurant) => {
//     return restaurant.info.avgRating > 4.2 && !restaurant.info.veg;
//   };

//   const filterVegRestaurants = (restaurant) => {
//     return restaurant.info.veg;
//   };

//   const filterNonVegRestaurants = (restaurant) => {
//     return !restaurant.info.veg;
//   };

//   return (
//     <div className='body'>
//       <Filter
//         onApplyFilter={applyFilter}
//         filters={[
//           { label: 'Top Rated', filterFunction: filterTopRated },
//           { label: 'Top Rated and Veg', filterFunction: filterTopRatedAndVeg },
//           { label: 'Top Rated and Non-Veg', filterFunction: filterTopRatedAndNonVeg },
//           { label: 'Veg Only', filterFunction: filterVegRestaurants },
//           { label: 'Non-Veg Only', filterFunction: filterNonVegRestaurants },
//         ]}
//       />
//       <div className="restaurant-list">
//         {filteredRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} {...restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


// Body.jsx
import React, { useEffect, useState } from 'react';
import RestaurantCard from './ResturantCard';
import Filter from './Filter'; // Import the new component
import SortBy from './SortBy'; // Import the new component
import restaurantList2 from '../utils/mockData2';

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList2);

  const applyFilter = (filterFunction) => {
    const filtered = restaurantList2.filter(filterFunction);
    setFilteredRestaurants(filtered);
  };

  const sortLowToHigh = () => {
    const sorted = [...filteredRestaurants].sort((a, b) => {
      const first = a.info?.costForTwo ? parseInt(a.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      const second = b.info?.costForTwo ? parseInt(b.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      return first - second;
    });
    setFilteredRestaurants(sorted);
  };

  // const sortHighToLow = () => {
  //   const sorted = [...filteredRestaurants].sort((a, b) => {
  //     const first = parseInt(a.info.costForTwo.replace(/\D/g, ''), 10);
  //     const  second= parseInt(b.info.costForTwo.replace(/\D/g, ''), 10);
  //     return second- first;
  //   });
  const sortHighToLow = () => {
    const sorted = [...filteredRestaurants].sort((a, b) => {
      const first = a.info?.costForTwo ? parseInt(a.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      const second = b.info?.costForTwo ? parseInt(b.info.costForTwo.replace(/\D/g, ''), 10) : 0;
      return second - first;
    });
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
    console.log("useEffect Called");
    fetchData();
  },[])
  // const fetchData = async ()=>{
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //   const json = await data.json();

  //   console.log(json);
  // }

  const fetchData = async () => {
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const swiggyApiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
  
    try {
      const response = await fetch(corsAnywhereUrl + swiggyApiUrl, {
        method: 'GET',
        headers: {
          'Origin': 'http://localhost:1234/', // replace with your actual website URL
        },
      });
  
      const text = await response.text();
      console.log('Response:', text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

console.log("checking who rendered first");

  return (
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
