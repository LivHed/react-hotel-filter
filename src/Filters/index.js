import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

var FiltersList = props => {
  /* The callback function is put inside of the FiltersList function so that props
  can be accessed, in the definition of the renderFilter callback function */
  var renderFilter = filter => {
    // the .includes array method
    var isChecked = props.selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
      />
    );
  };
  var filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
