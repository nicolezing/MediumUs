/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { IconButton } from '../app/components/Button';

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

      <p>
        {`type="mainIcon" | "logoIcon" | "searchIcon" | "twIcon" | "fbSqureIcon" |
        "fbRoundIcon"`}
      </p>
      <h3>These two icon has no hover effects</h3>
      <p>{`colorSet="pureBlack"`}</p>
      <IconButton colorSet="pureBlack" type="mainIcon" />
      <IconButton colorSet="pureBlack" type="logoIcon" />

      <h3>Try hover</h3>
      <p>{`colorSet="gray"`}</p>
      <IconButton colorSet="gray" type="searchIcon" />
      <IconButton colorSet="gray" type="twIcon" />
      <IconButton colorSet="gray" type="fbSqureIcon" />
      <IconButton colorSet="gray" type="fbRoundIcon" />

      <h3>The following icons has no hover effct, appears on some pages </h3>
      <p>{`colorSet="pureBlack"`}</p>
      <IconButton colorSet="pureBlack" hoverColor="#000000d6" type="twIcon" />
      <IconButton colorSet="pureBlack" type="fbSqureIcon" />
    </div>
  );
};
