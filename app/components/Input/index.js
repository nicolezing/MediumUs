import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import SearchStyleInput from './searchInputStyle';

function Input(props) {
  const [inputDisplay, setInputDisplay] = useState(false);
  const [searchContent, setSearchContent] = useState('');

  let inputStyles = '';
  if (inputDisplay === true) {
    inputStyles = 'InputDisplay';
  } else {
    inputStyles = 'InputHidden';
  }

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      {/* <Button /> */}
      {/* here should use the button component */}
      <button type="button" onClick={() => setInputDisplay(!inputDisplay)}>
        Test
      </button>
      <SearchStyleInput
        ref={inputRef}
        placeholder={props.placeholderName}
        type="search"
        id="searchInput"
        value={searchContent}
        onChange={event => {
          setSearchContent(event.target.value);
        }}
        inputStyles={inputStyles}
      />
    </div>
  );
}

Input.propTypes = {
  placeholderName: propTypes.string,
};

export default Input;
