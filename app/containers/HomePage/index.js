/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { WriterInfoChunk } from '../../components/AuthorCards';
import user001 from '../../staticData/images/user-profile001.png';

import messages from './messages';
import Avatar from '../../components/Avatar';
import N from '../../staticData/images/N.png';

// import { findByLabelText } from 'react-testing-library';
const writerInfo = {
  authorLink: './',
  name: 'Jessica Herrington',
  companyLink: './',
  company: 'OneZero',
  date: 'Nov 21',
  readingTime: '9 min read',
  avatar: user001,
  member: false,
};

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      {/* <Avatar src={N} alt="username" />
      <Avatar src={user001} alt="username001" size="80px" member /> */}

      <WriterInfoChunk {...writerInfo} />
    </div>
  );
}
