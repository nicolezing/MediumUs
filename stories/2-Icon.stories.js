/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { IconButton } from '../app/components/Button';
import { IconA } from '../app/components/Anchor';

export default {
  title: 'IconComponents',
};

export const iconButton = function B() {
  return (
    <div>
      <h1>Try hover</h1>
      <code>
        {`IconButton.propTypes = {
              colorSet: PropTypes.string,
              type: PropTypes.string.isRequired,
              effect: PropTypes.string,
            };`}
      </code>
      <p>{`type="bellIcon" | "bookmarkIcon" | "moreIcon" | "clapIcon" | "moreHollowIcon" | "clapIcon"`}</p>
      <p>{`effect can be omitted or use effect="glow"`}</p>
      <h3>Normal ones</h3>
      <IconButton colorSet="gray" type="bellIcon" />
      <IconButton colorSet="gray" type="bookmarkIcon" />
      <IconButton colorSet="gray" type="moreIcon" />
      <IconButton colorSet="gray" type="clapIcon" />
      <h3>The following icons has no hover effct, appears on some pages </h3>
      <p>{`colorSet="pureblack" type="moreHollowIcon"`}</p>

      <IconButton colorSet="pureBlack" type="moreHollowIcon" />
      <h3>Try to keep hovering on this one</h3>
      <p>{`This one is speciall with type="clapIcon" effect="glow"`}</p>
      <IconButton colorSet="purple" type="clapIcon" effect="glow" />
    </div>
  );
};

export const iconAnchor = function A() {
  return (
    <div>
      <h1>Try hover, click will redirect to homepage</h1>
      <code>{`IconA.propTypes = {
              colorSet: PropTypes.string,
              type: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
            };`}</code>
      <p>
        {`type="mainIcon" | "logoIcon" | "searchIcon" | "twIcon" | "fbSqureIcon" |
        "fbRoundIcon"`}
      </p>
      <h3>These two icon has no hover effects</h3>
      <p>{`colorSet="pureBlack"`}</p>
      <IconA colorSet="pureBlack" type="mainIcon" href="http://google.com" />
      <IconA colorSet="pureBlack" type="logoIcon" href="./" />

      <h3>Try hover</h3>
      <p>{`colorSet="gray"`}</p>
      <IconA colorSet="gray" type="searchIcon" href="./" />
      <IconA colorSet="gray" type="twIcon" href="./" />
      <IconA colorSet="gray" type="fbSqureIcon" href="./" />
      <IconA colorSet="gray" type="fbRoundIcon" href="./" />

      <h3>The following icons has no hover effct, appears on some pages </h3>
      <p>{`colorSet="pureBlack"`}</p>
      <IconA
        colorSet="pureBlack"
        hoverColor="#000000d6"
        type="twIcon"
        href="./"
      />
      <IconA colorSet="pureBlack" type="fbSqureIcon" href="./" />
    </div>
  );
};
