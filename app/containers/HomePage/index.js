/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
import messages from './messages';
// import OverlayTrigger from '../../components/OverlayTrigger';
// import ArticlePoster from '../../components/ArticlePoster';
// import Avatar from '../../components/Avatar';
// import ArticleTitle from '../../components/ArticleTitle';
// import AuthorCard from '../../components/AuthorCard';
// import UserSettingList from './UserSettingList';

function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
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
    </div>
  );
}

// function mapStateToProps(state) {
//   const { testState } = state;
//   return {
//   };
// }
// export default connect(mapStateToProps)(HomePage);
export default HomePage;
