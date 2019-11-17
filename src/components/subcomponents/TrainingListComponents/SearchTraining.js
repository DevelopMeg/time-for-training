import React from "react";

const SearchTraining = props => {
  return (
    <div className="search-training">
      <p className="search-training__title">Choose search category:</p>
      <div className="handle-search">
        <button className="handle-search__option handle-search__option--title">
          title
        </button>
        <button className="handle-search__option handle-search__option--city">
          city
        </button>
        <button className="handle-search__option handle-search__option--clear">
          X clear
        </button>
      </div>

      <input
        type="text"
        className="search-training__search-input"
        value={props.valueSearchTraining}
        onChange={props.handleChangeValueSearchTraining}
        placeholder="search..."
      />
    </div>
  );
};

export default SearchTraining;
