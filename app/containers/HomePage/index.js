/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Avatar from '../../components/Avatar';
import N from '../../staticData/images/N.png';
import user001 from '../../staticData/images/user-profile001.png';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Avatar src={N} alt="username" />
      <Avatar src={user001} alt="username001" size="80px" member />
    </div>
  );
}
