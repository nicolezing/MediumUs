/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { OutlinedButton, IconButton } from '../../components/Button';
import messages from './messages';
import Avatar from '../../components/Avatar';
import N from '../../staticData/images/N.png';
import user001 from '../../staticData/images/user-profile001.png';

export default function HomePage() {
  const [btnText, setBtnText] = useState('Follow');
  const [btnText2, setBtnText2] = useState('Follow');

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div style={{ display: 'flex' }} />
      <OutlinedButton
        text={btnText}
        type={btnText === 'Follow' ? 'outlined' : 'filled'}
        size="small"
        colorSet="purple"
        onClick={() =>
          setBtnText(btnText === 'Follow' ? 'Following' : 'Follow')
        }
      />
      <div />
      <OutlinedButton
        text={btnText2}
        type={btnText2 === 'Follow' ? 'outlined' : 'filled'}
        size="middle"
        colorSet="green"
        onClick={() =>
          setBtnText2(btnText2 === 'Follow' ? 'Following' : 'Follow')
        }
      />
      <div />

      <IconButton colorSet="gray" type="bellIcon" />
      <IconButton colorSet="gray" type="bookmarkIcon" />
      <IconButton colorSet="gray" type="moreIcon" />
      <IconButton colorSet="pureBlack" type="moreHollowIcon" />
      <IconButton colorSet="gray" type="clapIcon" />
      <div>
        <IconButton colorSet="purple" type="clapIcon" effect="glow" />
      </div>

      <Avatar src={N} alt="username" />
      <Avatar src={user001} alt="username001" size="80px" member />
    </div>
  );
}
