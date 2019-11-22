/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { OutlinedButton } from '../app/components/Button';

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
      <br />
      <OutlinedButton
        text="Upgrade"
        type="outlined"
        size="tall"
        colorSet="black"
      />
    </div>
  );
};
