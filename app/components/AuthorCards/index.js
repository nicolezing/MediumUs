/**
 *
 * AuthorCards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Avatar from '../Avatar';
import { StyledSpan } from './TextWrapper';
import StarIcon from '../../staticData/images/starIcon';

function WriterInfoChunk(props) {
  return (
    <div>
      <a href={props.authorLink}>
        <div>
          <Avatar
            src={props.avatar}
            alt={`Go to the profile of ${props.name}`}
            size="36px"
          />
        </div>
      </a>

      <div>
        <StyledSpan>
          <a href={props.authorLink}>{props.name}</a>
          <a href={props.companyLink}>
            &nbsp;in&nbsp;
            {props.company}
          </a>
        </StyledSpan>

        <div>
          <span>{props.date}</span>
          &middot;
          <span>{props.readingTime}</span>
          {StarIcon}
        </div>
      </div>
    </div>
  );
}

function AuthorCards() {
  return <div />;
}

AuthorCards.propTypes = {};
WriterInfoChunk.propTypes = {
  authorLink: PropTypes.string,
  name: PropTypes.string,
  companyLink: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  avatar: PropTypes.string,
};
export { AuthorCards, WriterInfoChunk };
