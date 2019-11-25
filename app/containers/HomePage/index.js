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
import NavComponent from '../../components/Navs/navs';

export default function HomePage() {
  const [btnText, setBtnText] = useState('Follow');
  const [btnText2, setBtnText2] = useState('Follow');
  const navItems = [
    { id: '1', navName: 'Home', navURL: '' },
    { id: '2', navName: 'ONEZERO', navURL: '' },
    { id: '3', navName: 'ELEMENTAL', navURL: '' },
    { id: '4', navName: 'GEN', navURL: '' },
    { id: '5', navName: 'ZORA', navURL: '' },
    { id: '6', navName: 'FORGE', navURL: '' },
    { id: '7', navName: 'HUMAN PARTS', navURL: '' },
    { id: '8', navName: 'MARKER', navURL: '' },
    { id: '9', navName: 'SELF', navURL: '' },
    { id: '10', navName: 'TECH', navURL: '' },
    { id: '11', navName: 'HEATED', navURL: '' },
    { id: '12', navName: 'MODUS', navURL: '' },
    { id: '13', navName: 'MORE', navURL: '' },
  ];

  return (
    <div>
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
      <NavComponent navs={navItems} />
    </div>
  );
}
