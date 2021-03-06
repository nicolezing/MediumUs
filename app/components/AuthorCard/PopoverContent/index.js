/**
 *
 * PopoverContent
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../../Button';
import formatDate from '../formatDate';
import Avatar from '../../Avatar';
import {
  UnorderedList,
  Divider,
  TitleA,
  Subtitle,
  MemberSince,
  Img,
  FollowerSpan,
  NumSpan,
} from './styledListItems';
import { UpWrapper, DownWrapper, TitleWrapper } from './styledWrappers';
import roundToThousand from '../../../utils/roundToThousand';
import { selectUserInfo, selectPublicationAllInfo } from '../../../selectors';

function PopoverContent(props) {
  const { year, month } = formatDate(props.joinedDate);
  return (
    <UnorderedList>
      <UpWrapper>
        <TitleWrapper>
          <TitleA to={props.headerLink}>{props.header}</TitleA>
          {props.member && (
            <MemberSince>{`Medium member since ${month} ${year}`}</MemberSince>
          )}
          <Subtitle>{props.subHeader}</Subtitle>
        </TitleWrapper>
        <Link to={props.headerLink}>
          {props.imgType === 'avatar' ? (
            <Avatar size="60px" id={props.id} />
          ) : (
            <Img src={props.imgLink} alt={props.imgAlt} />
          )}
        </Link>
      </UpWrapper>
      <Divider />
      <DownWrapper>
        <FollowerSpan>
          Followed by{' '}
          <NumSpan>{roundToThousand(props.followersNumber)}</NumSpan> people
        </FollowerSpan>
        <OutlinedButton
          text="Follow"
          type="outlined"
          size="middle"
          theme={props.theme}
        />
      </DownWrapper>
    </UnorderedList>
  );
}

PopoverContent.propTypes = {
  headerLink: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  joinedDate: PropTypes.string,
  member: PropTypes.bool,
  imgLink: PropTypes.string,
  imgAlt: PropTypes.string,
  followersNumber: PropTypes.number.isRequired,
  imgType: PropTypes.oneOf(['avatar', 'publication']),
  id: PropTypes.string,
  theme: PropTypes.string,

  // writerId: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { id, imgType } = ownProps;
  let componentProps = {};
  if (imgType === 'avatar') {
    // const { author: writerId } = selectArticleAbstract(state, id);
    const {
      link,
      name,
      description,
      member = undefined,
      memberJoinedDate = undefined,
      followers,
    } = selectUserInfo(state, id);
    componentProps = {
      headerLink: link,
      header: name,
      subHeader: description,
      member,
      joinedDate: memberJoinedDate,
      followersNumber: followers,
    };
  } else if (imgType === 'publication') {
    const {
      link,
      name,
      description,
      icon,
      followers,
    } = selectPublicationAllInfo(state, id);
    componentProps = {
      headerLink: link,
      header: name,
      subHeader: description,
      imgLink: icon,
      imgAlt: name,
      followersNumber: followers,
    };
  }
  return componentProps;
}

export default connect(mapStateToProps)(PopoverContent);
