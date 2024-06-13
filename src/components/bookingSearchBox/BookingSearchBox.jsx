import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSearchBox.scss";

const BookingSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setKeyword(" ");
    console.log("Searching with keyword:", keyword, "and date:", startDate);
    navigate("/searchResult");
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search__form">
        <div className="search__input">
          <div className="search__input-fieldBox">
            <input
              type="text"
              placeholder="Enter Service keyword..."
              value={keyword}
              onChange={handleKeywordChange}
              className="search__input-field"
            />
          </div>
          <div className="search__input-date">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="Pp"
              showTimeSelect
              timeFormat="HH:mm"
              className="search__input-datepicker"
            />

            <button
              type="submit"
              className="search__button"
              onClick={() => handleSearch}
            >
              Search
            </button>
          </div>
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
