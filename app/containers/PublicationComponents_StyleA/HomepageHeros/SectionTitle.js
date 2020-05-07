import React from 'react';
import PropTypes from 'prop-types';
import { MarginWrapper, Title } from './Wrappers';

function SectionTitle({ title }) {
  if (title.length === 0) {
    return <></>;
  }
  return (
    <MarginWrapper key={title}>
      <Title>{title}</Title>
    </MarginWrapper>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
