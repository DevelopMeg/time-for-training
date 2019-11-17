import React, { useRef } from "react";

const SearchTraining = props => {
  const btnTitleRef = useRef();
  const btnCityRef = useRef();

  return (
    <div className="search-training">
      <p className="search-training__title">Choose search category:</p>
      <div className="handle-search">
        <button
          onClick={e =>
            props.handleClickChooseSearch(
              btnTitleRef.current,
              btnCityRef.current,
              e
            )
          }
          ref={btnTitleRef}
          className="handle-search__option handle-search__option--title"
        >
          title
        </button>
        <button
          onClick={e =>
            props.handleClickChooseSearch(
              btnCityRef.current,
              btnTitleRef.current,
              e
            )
          }
          ref={btnCityRef}
          className="handle-search__option handle-search__option--city"
        >
          city
        </button>
        <button
          onClick={() =>
            props.handleClearChooseSearch(
              btnTitleRef.current,
              btnCityRef.current
            )
          }
          className="handle-search__option handle-search__option--clear"
        >
          X clear
        </button>
      </div>

      <input
        type="text"
        className="search-training__search-input"
        value={props.valueSearchTraining}
        onChange={props.handleChangeValueSearchTraining}
        disabled={props.clickChooseSearch === "" ? true : false}
        style={
          props.clickChooseSearch !== ""
            ? { borderColor: "#af8f6d", backgroundColor: "#fff" }
            : { backgroundColor: "#e8e8e8" }
        }
        placeholder="search..."
      />
    </div>
  );
};

export default SearchTraining;
