/*
 * Footer
 */

import React from 'react';
import { Wrapper, A, MarginWrapper, Span } from './Wrappers';

function Footer() {
  const footerList = {
    'About Elemental': './',
    'Latest Stories': './',
    Archive: './',
    'About Medium': './',
    Terms: './',
    Privacy: './',
  };

  const renderFooterListItem = arr =>
    arr.map((key, index) => {
      if (index < arr.length - 1) {
        return (
          <MarginWrapper>
            <A href={footerList.key} key={key}>
              {key}
            </A>
            <Span>&middot;</Span>
          </MarginWrapper>
        );
      }
      return (
        <MarginWrapper>
          <A href={footerList.key} key={key}>
            {key}
          </A>
        </MarginWrapper>
      );
    });

  return <Wrapper>{renderFooterListItem(Object.keys(footerList))}</Wrapper>;
}

export default Footer;
