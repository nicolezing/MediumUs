/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  OutlinedButton,
  IconButton,
  UserButton,
} from '../../components/Button';
import messages from './messages';
import { IconA, OutlinedA, PlainA, AvatarImage } from '../../components/Anchor';
import N from '../../staticData/images/N.png';
import user001 from '../../staticData/images/user-profile001.png';

// import { findByLabelText } from 'react-testing-library';

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
      <OutlinedA text="Upgrade" size="middle" colorSet="black" href="./" />
      <div>
        <PlainA text="Sign in" href="./" colorSet="red" fontsize="16px" />
        <OutlinedA text="Get started" size="tall" colorSet="red" href="./" />
      </div>
      <PlainA
        text="Become a member"
        href="./"
        colorSet="pureGray"
        fontsize="15.8px"
      />
      <IconA colorSet="pureBlack" type="mainIcon" href="http://google.com" />
      <IconA colorSet="pureBlack" type="logoIcon" href="./" />
      <IconA colorSet="gray" type="searchIcon" href="./" />
      <IconA colorSet="gray" type="twIcon" href="./" />
      <IconA colorSet="gray" type="fbSqureIcon" href="./" />
      <IconA colorSet="gray" type="fbRoundIcon" href="./" />
      <IconButton colorSet="gray" type="bellIcon" />
      <IconButton colorSet="gray" type="bookmarkIcon" />
      <IconButton colorSet="gray" type="moreIcon" />
      <IconButton colorSet="pureBlack" type="moreHollowIcon" />
      <IconButton colorSet="gray" type="clapIcon" />

      <UserButton src={N} alt="Nicoleing" />
      <br />
      <div>
        <AvatarImage href="./" src={user001} alt="UerName" size="36px" member />
        <PlainA
          text="Michael McLeod"
          href="./"
          colorSet="red"
          fontsize="16px"
        />
      </div>
      <AvatarImage href="./" src={user001} alt="UerName" size="36px" />
      <div>
        <IconButton colorSet="purple" type="clapIcon" effect="glow" />
      </div>
    </div>
  );
}
