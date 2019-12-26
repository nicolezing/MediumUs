import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { Wrapper, MidWrapper } from './Wrappers';
import Footer from '../Footer';

export const NewFromNetwork = () => (
  <MidWrapper>
    <Sidebar recommendationSource="newFromNetwork" />
  </MidWrapper>
);

export const PopularOnMedium = () => (
  <MidWrapper>
    <Sidebar recommendationSource="popularOnMedium" />
  </MidWrapper>
);

export const ReadingList = () => (
  <MidWrapper>
    <Sidebar recommendationSource="readingList" />
  </MidWrapper>
);

function Sidebars() {
  return (
    <Wrapper>
      <NewFromNetwork />
      <PopularOnMedium />
      <ReadingList />
      <Footer />
    </Wrapper>
  );
}

export default Sidebars;
