import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectArticleResponse } from '../../../../selectors';
import { Wrapper, Div, Span } from './Wrappers';

function ArticleResponse(props) {
  let text = 'Write the first response';
  let responsePage = './';
  if (props.responses.length > 0) {
    text = `See responses (${props.responses.length})`;
    responsePage = './';
  }
  return (
    <Wrapper>
      <Link to={responsePage}>
        <Div theme={props.theme}>
          <Span theme={props.theme}> {text}</Span>
        </Div>
      </Link>
    </Wrapper>
  );
}

ArticleResponse.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string,
  theme: PropTypes.string,

  responses: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const responses = selectArticleResponse(state, id);
  return { responses };
}

export default connect(mapStateToProps)(ArticleResponse);
