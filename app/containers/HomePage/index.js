/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import GenreCard from '../../components/GenreCard/index';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      {/* <GenreCard
        genre="Art"
        genreLink="https://medium.com/topic/art"
        genreImg="https://cdn-images-1.medium.com/fit/c/560/360/1*H2blBoEmzkSusI_a4Bk0dg@2x.jpeg"
        genreState="defaultState"
        onActiveStateChange={() => {
          console.log('fake function');
        }}
      /> */}
    </div>
  );
}
