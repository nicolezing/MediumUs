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
import { Helmet } from 'react-helmet';
import { WidthConstrainWrapper, SideWrapper } from './Wrappers';
import Header from './Header';
import MainHero from './MainHero';
import HeroList from './HeroList';
import AutoStickySidebars from './AutoStickySidebars';
import Navbar from './Navbar';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Medium – Get smarter about what matters to you.</title>
        {/* TODO fix below */}
        <meta
          name="description"
          content="Medium is not like any other platform on the internet. Our sole purpose is to help you find compelling ideas, knowledge, and perspectives. We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest."
        />
        <link
          rel="icon"
          href="https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
        />
      </Helmet>
      <div>
        <WidthConstrainWrapper>
          {/* <h1>
        {/* <FormattedMessage {...messages.header} /> */}
          {/* </h1> */}
          <Header />
        </WidthConstrainWrapper>
        <Navbar />
        <WidthConstrainWrapper>
          <MainHero />
          <SideWrapper>
            <HeroList />
            <AutoStickySidebars />
          </SideWrapper>
        </WidthConstrainWrapper>
      </div>
    </>
  );
}

export default HomePage;
