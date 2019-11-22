/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { PlainA } from '../app/components/Anchor';

export default {
  title: 'Links',
};
export const plainAnchorLink = function B() {
  return (
    <div>
      <h1>Some simple links</h1>
      <code>{`PlainA.propTypes = {
              text: PropTypes.string,
              colorSet: PropTypes.string,
              fontsize: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
            };`}</code>
      <h3>{`Used when not signed in, hover has no effect because colorSet='pureGray'`}</h3>
      <PlainA
        text="Become a member"
        href="./"
        colorSet="pureGray"
        fontsize="15.8px"
      />
      <h3>Sign in link, usually comes with Get Started</h3>
      <PlainA text="Sign in" href="./" colorSet="red" fontsize="16px" />
      <h3>Writer name in all cards</h3>
      <PlainA text="Michael McLeod" href="./" fontsize="16px" colorSet="red" />
    </div>
  );
};
