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
// import OverlayTrigger from '../../components/OverlayTrigger';
// import ArticlePoster from '../../components/ArticlePoster';
// import Avatar from '../../components/Avatar';
// import ArticleTitle from '../../components/ArticleTitle';
// import AuthorCard from '../../components/AuthorCard';
// import UserSettingList from './UserSettingList';

function HomePage() {
  return (
    <Wrapper>
      {/* <h1>
        <FormattedMessage {...messages.header} />
      </h1> */}
      <Header />
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '40px',
          background: 'gray',
          zIndex: 999,
        }}
      >
        NavBar
      </div>
      <MainHero />
      <SideWrapper>
        <HeroList list="homeList" />
        <Sidebars />
      </SideWrapper>
      {/* <Avatar id="loggedIn" />
      <OverlayTrigger
        popoverContent={<UserSettingList id="loggedIn" />}
        trigger="click"
        placement="dropdown"
      >
        <Avatar id="loggedIn" />
      </OverlayTrigger>
      <ArticleTitle id="ID002" variation="HomeHeroLeft" />
      <AuthorCard variation="PublicationHome" hoverEffect id="ID001" />
      <AuthorCard variation="TopicHome" hoverEffect id="ID001" />
      <AuthorCard variation="Home" hoverEffect id="ID001" />
      <AuthorCard variation="ArticleTitle" hoverEffect id="ID001" />
      <AuthorCard variation="PublicationHome" id="ID001" />
      <ArticlePoster id="ID001" variation="HomeHeroLeft" hoverEffect />
      <ArticlePoster
        id="ID001"
        variation="PublicationHomepageHero"
        hoverEffect
      />
      <ArticlePoster id="ID002" variation="HomeList" hoverEffect />
      <ArticlePoster id="ID002" variation="ArticlePageTitle" hoverEffect /> */}
    </Wrapper>
  );
}

// function mapStateToProps(state) {
//   const { testState } = state;
//   return {
//   };
// }
// export default connect(mapStateToProps)(HomePage);
export default HomePage;
