/*
 * PublicationFooterBasic
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, A, MarginWrapper, Span } from './Wrappers';
import { selectPublicationFooter } from '../../../selectors';
import { basicFooter } from './publicationBasicFooterContent';

function PublicationFooterBasic(props) {
  const footerList = [...props.footer, ...basicFooter];

  return (
    <Wrapper>
      {footerList.map(({ title, link }, index) => {
        if (index === 0) {
          return (
            <MarginWrapper>
              <A href={link} key={title}>
                {title}
              </A>
            </MarginWrapper>
          );
        }
        return (
          <MarginWrapper>
            <Span>&middot;</Span>
            <A href={link} key={title}>
              {title}
            </A>
          </MarginWrapper>
        );
      })}
    </Wrapper>
  );
}

PublicationFooterBasic.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  publicationId: PropTypes.string.isRequired,
  footer: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps;
  const footer = selectPublicationFooter(state, publicationId);
  return { footer };
}

export default connect(mapStateToProps)(PublicationFooterBasic);
