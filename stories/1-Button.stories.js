import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import Button from '../app/components/Button';

export default {
  title: 'Button',
};

export const outlined = function HomePage() {
  const [btnText, setBtnText] = useState('Follow');

  return (
    <Button
      text={btnText}
      type={btnText === 'Follow' ? 'outlined' : 'filled'}
      size="sm"
      color="#007DB8"
      onClick={() => setBtnText(btnText === 'Follow' ? 'Following' : 'Follow')}
    />
  );
};

export const filled = function HomePage() {
  const [btnText2, setBtnText2] = useState('Follow');

  return (
    <Button
      text={btnText2}
      type={btnText2 === 'Follow' ? 'outlined' : 'filled'}
      size="tall"
      color="#029e74"
      onClick={() =>
        setBtnText2(btnText2 === 'Follow' ? 'Following' : 'Follow')
      }
    />
  );
};
