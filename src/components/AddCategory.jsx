import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

export const AddCategory = ({ onNewCategory, setCategories, service }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    if(e.target.value === ""){
      setCategories(null);
    }
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) {
      setCategories(null);
      return;
    }
    onNewCategory(inputValue.trim());
  };
  const onReturn = (e) => {
    e.preventDefault();
    setInputValue("");
    setCategories(null);
  };
  useEffect(() => {
    setInputValue("");
  }, [service]);
  return (
    <form aria-label='form' onSubmit={onSubmit}>
      {inputValue.length > 0 && (
        <button className="button-return" type="reset" onClick={onReturn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
            />
          </svg>
        </button>
      )}
      <input
        type="text"
        placeholder={`Search in ${service}`}
        value={inputValue}
        onChange={onInputChange}
        className="px-3 text-[#f5f5f6]"
      />
      {inputValue.length > 0 ? (
        <button type="reset" onClick={onReturn} className="button-clear">
          <svg
            style={{ backgroundColor: "transparent" }}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </button>
      ) : (
        <button className="button-clear">
          <svg
            style={{ backgroundColor: "transparent" }}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </button>
      )}
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}