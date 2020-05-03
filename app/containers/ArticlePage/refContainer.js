/* eslint-disable react/no-find-dom-node */
import React, {
  // component,
  useEffect,
  useRef,
  forwardRef,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { passArticleAvatarRef, passArticleImageRef } from '../../store/actions';

const refCopies = {};

function RefContainer(props) {
  const childRef = useRef();
  const { refType, uuid, children } = props;

  const dispatchRef = (type, uid, node) => {
    if (type === 'avatarRef') {
      props.passArticleAvatarRef(node, uid);
      return;
    }
    if (type === 'imageRef') {
      props.passArticleImageRef(node, uid);
    }
  };

  useEffect(() => {
    if (refCopies[uuid].ref) {
      // only dispatch action when component mounted and ref is valid (especially after hot reload)
      dispatchRef(refType, uuid, findDOMNode(childRef.current));
    }
  });

  if (!refCopies[uuid]) {
    const ChildComponentWithRef = forwardRef((rest, ref) =>
      cloneElement(children, { ...rest, ref }),
    );
    refCopies[uuid] = <ChildComponentWithRef ref={childRef} key={uuid} />;
  }
  console.log('refCopies outside : ', refCopies);
  return refCopies[uuid];
}

RefContainer.propTypes = {
  refType: PropTypes.oneOf(['avatarRef', 'imageRef']).isRequired,
  uuid: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  passArticleAvatarRef: PropTypes.func,
  passArticleImageRef: PropTypes.func,
  avatarRefs: PropTypes.object,
};

export default connect(
  null,
  { passArticleAvatarRef, passArticleImageRef },
)(RefContainer);
