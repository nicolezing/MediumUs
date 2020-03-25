/**
 *
 * Avatar
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import avatarHaloIcon from '../../staticData/svgIcons/avatarHaloIcon';
import { haloComponents, avatarImg } from './avatarStyle';
import avatarHaloSizeSets from './avatarHaloSizeSets';
import { selectUserInfo } from '../../selectors';

function Avatar(props) {
  const { AvtStyledImg } = avatarImg(props.size);
  const element = (
    <AvtStyledImg
      src={props.avatar}
      alt={props.alt || props.name}
      size={props.size}
      // pass down eventListener if any
      {...props}
    />
  );
  if (_.has(avatarHaloSizeSets, props.size) && props.member) {
    const { Halo, HaloWrapper } = haloComponents(props.size);
    return (
      <HaloWrapper>
        <Halo>{avatarHaloIcon}</Halo>
        {element}
      </HaloWrapper>
    );
  }
  return element;
}

Avatar.propTypes = {
  member: PropTypes.bool.isRequired,
  size: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { avatar, name, member, link: alt } = selectUserInfo(state, id);
  return {
    avatar,
    name,
    member,
    alt,
  };
}

export default connect(mapStateToProps)(Avatar);
// for storybook props
export { Avatar };
