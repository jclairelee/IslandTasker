import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSearchBox.scss";

const BookingSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [keyword, setKeyword] = useState("");

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Searching with keyword:", keyword, "and date:", startDate);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search__form">
        <div className="search__input">
          <input
            type="text"
            placeholder="Enter Service keyword..."
            value={keyword}
            onChange={handleKeywordChange}
            className="search__input-field"
          />
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="search__input-datepicker"
          />
          <button type="submit" className="search__button">
            Search
          </button>
        </div>
      </form>
      <div className="search-categories">
        <span className="search-categories__txt">Popular:</span>
        <button className="search-categories__keyword">Babysitting</button>
        <button className="search-categories__keyword">Shopping</button>
        <button className="search-categories__keyword">Moving</button>
        <button className="search-categories__keyword">Dog Walking</button>
      </div>
    </div>
  );
};

export default BookingSearchBox;
