import { useState } from "react";
import "./SearchBar.css";
import Arrow from "../assets/images/icon-arrow.svg";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };
  return (
    <div className="search-content">
      <h1>IP Address Tracker</h1>
      <form className="searchbar" onSubmit={onSubmit}>
        <label className="search-label">Search Ip Address</label>
        <input
          id="search"
          className="search-input"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <img src={Arrow} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
