import React from "react";
import { hotels } from "../data.js";

var getMatchCount = filterKey =>
  hotels.filter(hotel => hotel[filterKey]).length;

var Filter = props => {
  /* When the input is clicked the props.toggleFilter is called, with an argument 
  that indicates which input has been clicked, so the
  onChange function is created here for each Filter component that is rendered */
  var onChange = () => props.toggleFilter(props.filter.key);
  var matchCount = getMatchCount(props.filter.key);
  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={onChange}
          className="filter__checkbox"
        />
        {props.filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
