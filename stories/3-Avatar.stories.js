/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { storysource } from '@storybook/addon-storysource';
import { UserButton } from '../app/components/Button';
import { AvatarImage } from '../app/components/Anchor';
import N from '../app/staticData/images/N.png';
import user001 from '../app/staticData/images/user-profile001.png';

export default {
  title: 'AvatarComponents',
};

export const userButton = function B() {
  return (
    <div>
      <h3>This is the user button on top right of the page</h3>
      <code>{`UserButton.propTypes = {
              src: PropTypes.string.isRequired,
              alt: PropTypes.string.isRequired,
            };`}</code>
      <p>{`Default size is 32px, you can set when needed`}</p>
      <br />
      <UserButton src={N} alt="Nicoleing" />
    </div>
  );
};

export const avatarImageAnchor = function B() {
  return (
    <div>
      <h1>This are the user avatars, click it to see examples on medium.com</h1>
      <code>{`AvatarImage.propTypes = {
              member: PropTypes.bool,
              size: PropTypes.string.isRequired,
              src: PropTypes.string.isRequired,
              alt: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
            };`}</code>
      <p>Only use listed sizes below</p>
      <div>
        <h2>
          Common writer cards on homepages, <br />
          left one is general one, right one is members special
        </h2>
        <p>{`size="36px" used in cards on CollectionsHomePage`}</p>
        <AvatarImage
          href="https://humanparts.medium.com/"
          src={user001}
          alt="UserName"
          size="36px"
        />
        <AvatarImage
          href="https://humanparts.medium.com/"
          src={user001}
          alt="UserName"
          size="36px"
          member
        />
        <p>{`size="32px" used in cards on CollectionsHomePage with narrow screen`}</p>
        <AvatarImage
          href="https://elemental.medium.com/"
          src={user001}
          alt="UserName"
          size="32px"
        />
        <AvatarImage
          href="https://elemental.medium.com/"
          src={user001}
          alt="UserName"
          size="32px"
          member
        />

        <p>{`size="40px" used in cards on TopicsHomePage and HomePage`}</p>
        <AvatarImage href="./" src={user001} alt="UserName" size="40px" />
        <AvatarImage
          href="./"
          src={user001}
          alt="UserName"
          size="40px"
          member
        />
      </div>
      <h2>Cards on article pages</h2>
      <p>{`size="48px" used in cards on article pages at the top, under title`}</p>
      <AvatarImage
        href="https://heated.medium.com/trump-tax-hike-on-eu-foods-roils-big-cheese-importers-f372b16559f8"
        src={user001}
        alt="UserName"
        size="48px"
      />
      <AvatarImage
        href="https://heated.medium.com/trump-tax-hike-on-eu-foods-roils-big-cheese-importers-f372b16559f8"
        src={user001}
        alt="UserName"
        size="48px"
        member
      />

      <p>{`size="80px" used in cards on article pages at the end of the article`}</p>
      <AvatarImage
        href="https://gen.medium.com/why-my-red-states-election-is-not-a-referendum-on-trump-fad46930060b"
        src={user001}
        alt="UserName"
        size="80px"
      />
      <AvatarImage
        href="https://gen.medium.com/why-my-red-states-election-is-not-a-referendum-on-trump-fad46930060b"
        src={user001}
        alt="UserName"
        size="80px"
        member
      />
      <div>
        <h2>Featured writter card</h2>
        <p>{`size="128px" used in 'FEATURED WRITER' card at TopicsHomePage`}</p>
        <AvatarImage
          href="https://medium.com/topic/art"
          src={user001}
          alt="UserName"
          size="128px"
        />
        <AvatarImage
          href="https://medium.com/topic/art"
          src={user001}
          alt="UserName"
          size="128px"
          member
        />
        <p>{`size="64px" used in 'FEATURED WRITER' card at TopicsHomePage with narrow screen`}</p>
        <AvatarImage
          href="https://medium.com/topic/books"
          src={user001}
          alt="UserName"
          size="64px"
        />
        <AvatarImage
          href="https://medium.com/topic/books"
          src={user001}
          alt="UserName"
          size="64px"
          member
        />
      </div>
    </div>
  );
};
