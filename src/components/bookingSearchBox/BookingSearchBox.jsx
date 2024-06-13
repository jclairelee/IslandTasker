import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSearchBox.scss";

const BookingSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isTyping, setIsTyping] = useState(true);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("");

  useEffect(() => {
    if (isTyping && index < word.length) {
      const typingTimeout = setTimeout(() => {
        setKeyword((prevKeyword) => prevKeyword + word[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 90);
      return () => clearTimeout(typingTimeout);
    } else if (index === word.length) {
      setIsTyping(false);
    }
  }, [isTyping, index, word]);

  const handleWordClick = (word) => {
    setKeyword("");
    setIndex(0);
    setWord(word);
    setIsTyping(true);
  };

  const handleSearch = (event) => {
    if (event) {
      event.preventDefault();
    }
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
              onChange={(event) => setKeyword(event.target.value)}
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
        <button
          className="search-categories__keyword"
          onClick={() => handleWordClick("Babysitting")}
        >
          Babysitting
        </button>
        <button
          className="search-categories__keyword"
          onClick={() => handleWordClick("Shopping")}
        >
          Shopping
        </button>
        <button
          className="search-categories__keyword"
          onClick={() => handleWordClick("Moving")}
        >
          Moving
        </button>
        <button
          className="search-categories__keyword"
          onClick={() => handleWordClick("Dog Walking")}
        >
          Dog Walking
        </button>
      </div>
    </div>
  );
};

export default BookingSearchBox;
