import React from "react";

const SortBy = ({ onSortLowToHigh, onSortHighToLow }) => {
  return (
    <div className="sort-by">
      <button className="sort-btn" onClick={onSortLowToHigh}>
        Cost: Low to High
      </button>
      <button className="sort-btn" onClick={onSortHighToLow}>
        Cost: High to Low
      </button>
    </div>
  );
};

export default SortBy;
