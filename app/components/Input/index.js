import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import SearchStyleInput, {
  IconSpan,
  SearchInputLabel,
} from './searchInputStyle';
import { searchIcon } from '../../staticData/images/icons';

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
      <SearchInputLabel>
        <IconSpan
          onKeyPress={() => {}}
          role="button"
          onClick={() => setInputDisplay(!inputDisplay)}
          tabIndex="0"
        >
          {searchIcon}
        </IconSpan>
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
      </SearchInputLabel>
    </Wrapper>
  );
}

Input.propTypes = {
  placeholderName: propTypes.string.isRequired,
};

export default Input;
