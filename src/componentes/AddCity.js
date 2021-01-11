import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCity = ({ setCities }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCities((city) => [inputValue, ...city]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCity.propTypes = {
  setCities: PropTypes.func.isRequired,
};
