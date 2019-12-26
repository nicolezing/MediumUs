/**
 *
 * PopoverContent
 *
 */

import React from 'react';
import { connect } from 'react-redux';
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

function PopoverContent(props) {
  const { year, month } = formatDate(props.joinedDate);
  return (
    <UnorderedList>
      <UpWrapper>
        <TitleWrapper>
          <TitleA href={props.headerLink}>{props.header}</TitleA>
          {props.member && (
            <MemberSince>{`Medium member since ${month} ${year}`}</MemberSince>
          )}
          <Subtitle>{props.subHeader}</Subtitle>
        </TitleWrapper>

        {props.imgType === 'avatar' ? (
          <Avatar size="60px" id={props.id} />
        ) : (
          <Img src={props.imgLink} alt={props.imgAlt} />
        )}
      </UpWrapper>
      <Divider />
      <DownWrapper>
        <FollowerSpan>
          Followed by{' '}
          <NumSpan>{roundToThousand(props.followersNumber)}</NumSpan> people
        </FollowerSpan>
        <OutlinedButton text="Follow" type="outlined" size="middle" />
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
};

function mapStateToProps(state, ownProps) {
  const { id, imgType } = ownProps;
  let componentProps = {};
  if (imgType === 'avatar') {
    const { userInfo } = state.testState[id];
    componentProps = {
      headerLink: userInfo.authorLink,
      header: userInfo.name,
      subHeader: userInfo.authorDescription,
      member: userInfo.member,
      followersNumber: userInfo.authorFollowers,
    };
    if (componentProps.member) {
      componentProps.joinedDate = userInfo.memberJoinedDate;
    }
  } else if (imgType === 'publication') {
    const { publicationInfo } = state.testState[id].articleInfo;
    componentProps = {
      headerLink: publicationInfo.publicationLink,
      header: publicationInfo.publication,
      subHeader: publicationInfo.publicationDescription,
      imgLink: publicationInfo.publicationLogo,
      imgAlt: publicationInfo.publication,
      followersNumber: publicationInfo.publicationFollowers,
    };
  }
  return componentProps;
}

export default connect(mapStateToProps)(PopoverContent);
