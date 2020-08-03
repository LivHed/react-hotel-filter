import React, { Component } from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";

class App extends Component {
  state = { selectedFilters: [] };
  toggleFilter = clickedFilterKey => {
    var newFilters;
    // using the .includes array method
    var alreadySelected = this.state.selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      // using the .filter array method
      newFilters = this.state.selectedFilters.filter(
        selectedFilter => selectedFilter !== clickedFilterKey
      );
    } else {
      // using the .concat array method
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    this.setState({ selectedFilters: newFilters });
  };
  render() {
    return (
      <div className="App">
        <Filters
          selectedFilters={this.state.selectedFilters}
          toggleFilter={this.toggleFilter}
        />
        <Hotels selectedFilters={this.state.selectedFilters} />
      </div>
    );
  }
}

export default App;
