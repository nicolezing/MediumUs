import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import SearchStyleInput, { SearchStyledLabel } from './searchInputStyle';
import { IconButton } from '../Button/index';

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

  const Wrapper = styled.div`
    position: relative;
    heighth: 37px;
  `;

  return (
    <Wrapper>
      <SearchStyledLabel>
        <IconButton
          aria-label="search-button"
          onClick={() => setInputDisplay(!inputDisplay)}
          type="searchIcon"
          colorSet="gray"
          style={{ verticalAlign: 'middle' }}
        />
        <SearchStyleInput
          ref={inputRef}
          placeholder={props.placeholderName}
          type="search"
          aria-label="search-input"
          id="searchInput"
          value={searchContent}
          onChange={event => {
            setSearchContent(event.target.value);
          }}
          inputStyles={inputStyles}
        />
      </SearchStyledLabel>
    </Wrapper>
  );
}

Input.propTypes = {
  placeholderName: propTypes.string.isRequired,
};

export default Input;
