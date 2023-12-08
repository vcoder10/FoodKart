// FilterComponent.jsx
// import React from 'react';

// const Filter= ({ onFilterTopRated, onFilterVeg, onFilterNonVeg }) => {
//   return (
//     <div className='filter'>
//       <button className='filter-btn' onClick={onFilterTopRated}>
//         Top Rated Restaurant
//       </button>
//       <button className='filter-btn' onClick={onFilterVeg}>
//         Veg Only
//       </button>
//       <button className='filter-btn' onClick={onFilterNonVeg}>
//         Non-Veg Only
//       </button>
//     </div>
//   );
// };

// export default Filter;

// Filter.jsx
import React from 'react';

const Filter = ({ onApplyFilter, filters }) => {
  return (
    <div className='filter'>
      {filters.map((filter) => (
        <button
          key={filter.label}
          className='filter-btn'
          onClick={() => onApplyFilter(filter.filterFunction)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;

