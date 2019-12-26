import React from 'react';
import { Wrapper, A } from './Wrappers';

function Footer() {
  const footerList = {
    Help: './',
    Status: './',
    Writers: './',
    Blog: './',
    Careers: './',
    Privacy: './',
    Terms: './',
    About: './',
  };

  const renderFooterListItem = key => (
    <A href={footerList.key} key={key}>
      {key}
    </A>
  );

  return (
    <Wrapper>
      {Object.keys(footerList).map(key => renderFooterListItem(key))}
    </Wrapper>
  );
}

export default Footer;
