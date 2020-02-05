/*
 * NavbarBasic
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton, OutlinedButton } from '../../../components/Button';
import {
  Wrapper,
  ListWrapper,
  LinkWrapper,
  A,
  DividerSpan,
  ButtonSpan,
  ButtonWrapper,
} from './Wrappers';

function NavbarBasic(props) {
  const { topicNav, socialMedia } = props;
  const renderNavbar = () =>
    topicNav.map((cur, index) => {
      if (index !== topicNav.length - 1) {
        return (
          <LinkWrapper>
            <A to={cur.itemLink} key={cur.navItem}>
              {cur.navItem}
            </A>
          </LinkWrapper>
        );
      }

      return (
        <>
          <DividerSpan />
          <LinkWrapper>
            <A to={cur.itemLink} key={cur.navItem}>
              {cur.navItem}
            </A>
          </LinkWrapper>
        </>
      );
    });

  const renderSocialMedia = () =>
    Object.keys(socialMedia).map(key => (
      <ButtonSpan>
        <a href={socialMedia[key]} key={key}>
          <IconButton iconName={`${key}Icon`} colorSet="gray" />
        </a>
      </ButtonSpan>
    ));

  return (
    <Wrapper>
      <ListWrapper>{renderNavbar()}</ListWrapper>
      <ButtonWrapper>
        {Object.keys(socialMedia).length > 0 ? renderSocialMedia() : <></>}
        <OutlinedButton
          text="Follow"
          type="outlined"
          size="small"
          colorSet="green"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

NavbarBasic.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  topic: PropTypes.string.isRequired,
  // topicLink: PropTypes.string,
  topicNav: PropTypes.array,
  socialMedia: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { topicNav, topicLink, socialMedia } = state.testState.topicList[topic];
  return {
    topicNav,
    topicLink,
    socialMedia,
  };
}

export default connect(mapStateToProps)(NavbarBasic);
