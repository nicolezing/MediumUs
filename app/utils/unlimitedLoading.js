import { findDOMNode } from 'react-dom';

export default function(window, ref, loadingFunc) {
  return () => {
    const windowHeight = window.innerHeight;
    // eslint-disable-next-line react/no-find-dom-node
    const { bottom } = findDOMNode(ref.current).getBoundingClientRect();
    if (bottom <= windowHeight) {
      loadingFunc();
    }
  };
}
