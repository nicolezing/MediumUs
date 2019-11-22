/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { OutlinedButton } from '../app/components/Button';
import { OutlinedA } from '../app/components/Anchor';

addDecorator(withInfo);

export default {
  title: 'OutlineComponents',
};

export const OutlinedButtons = () => {
  const [btnText, setBtnText] = useState('Follow');
  const [btnText2, setBtnText2] = useState('Follow');

  return (
    <div>
      <h1>Try click and hover</h1>
      <code>
        {`OutlinedButton.propTypes = {
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired,
          colorSet: PropTypes.string,
          onClick: PropTypes.func,
        };`}
      </code>
      <p>{`type= "Follow" | "Following"`}</p>
      <p>{`size="small" | "middle" | "tall" `} </p>
      <h2>These buttons will be filled after click:</h2>
      <h3>
        {`They are outliend button witht size "small", usually small follow buttons for writers`}
      </h3>
      <OutlinedButton
        text={btnText}
        type={btnText === 'Follow' ? 'outlined' : 'filled'}
        size="sm"
        colorSet="blue"
        onClick={() =>
          setBtnText(btnText === 'Follow' ? 'Following' : 'Follow')
        }
      />
      <h3>
        {`They are outliend button with size "middle", usually small follow buttons for
        topic homepage`}
      </h3>
      <OutlinedButton
        text={btnText2}
        type={btnText2 === 'Follow' ? 'outlined' : 'filled'}
        size="middle"
        colorSet="green"
        onClick={() =>
          setBtnText2(btnText2 === 'Follow' ? 'Following' : 'Follow')
        }
      />
    </div>
  );
};

export const outlinedAnchor = () => (
  <div>
    <h1>Try hover, click will redirect to homepage</h1>
    <code>
      {`OutlinedA.propTypes = {
          text: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired,
          colorSet: PropTypes.string,
          href: PropTypes.string.isRequired,
        };`}
    </code>
    <p>{`size="small" | "middle" | "tall" `} </p>
    <h3>{'Anchor with size "middle"'}</h3>
    <div>
      <OutlinedA text="Upgrade" size="middle" colorSet="black" href="./" />
    </div>
    <h3>
      {`Anchor with size "tall", only been seen on 'Get started' for now`}
    </h3>
    <div>
      {' '}
      <OutlinedA text="Get started" size="tall" colorSet="red" href="./" />
    </div>
  </div>
);
