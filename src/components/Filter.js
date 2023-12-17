import React from "react";

const Filter = ({ onApplyFilter, filters }) => {
  return (
    <div className="filter">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className="filter-btn"
          onClick={() => onApplyFilter(filter.filterFunction)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
