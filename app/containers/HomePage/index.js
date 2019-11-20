/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import messages from './messages';

export default function HomePage() {
  const [btnText, setBtnText] = useState('Follow');
  const [btnText2, setBtnText2] = useState('Follow');

  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <div />
      <Button
        text={btnText}
        type={btnText === 'Follow' ? 'outlined' : 'filled'}
        size="sm"
        color="#007DB8"
        onClick={() =>
          setBtnText(btnText === 'Follow' ? 'Following' : 'Follow')
        }
      />
      <div />
      <Button
        text={btnText2}
        type={btnText2 === 'Follow' ? 'outlined' : 'filled'}
        size="tall"
        color="#029e74"
        onClick={() =>
          setBtnText2(btnText2 === 'Follow' ? 'Following' : 'Follow')
        }
      />
    </h1>
  );
}
