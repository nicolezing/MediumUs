/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import messages from './messages';
import { Wrapper, SideWrapper } from './Wrappers';
import Header from './Header';
import MainHero from './MainHero';
import HeroList from './HeroList';
import Sidebars from './Sidebars';

function HomePage() {
  return (
    <Wrapper>
      {/* <h1>
        <FormattedMessage {...messages.header} />
      </h1> */}
      <Header />
      <div
        id="navbar"
        style={{
          position: 'sticky',
          top: 0,
          height: '50px',
          background: 'gray',
          zIndex: 10,
        }}
      >
        NavBar
      </div>
      <MainHero />
      <SideWrapper>
        <HeroList list="homeList" />
        <Sidebars />
      </SideWrapper>
    </Wrapper>
  );
}

export default HomePage;
