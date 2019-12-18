/**
 *
 * PopoverContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../../Button';
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
  return (
    <UnorderedList>
      <UpWrapper>
        <TitleWrapper>
          <TitleA href={props.headerLink}>{props.header}</TitleA>
          {props.member && (
            <MemberSince>Medium member since {props.joinedDate}</MemberSince>
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
  imgType: PropTypes.oneOf(['avatar']),
  id: PropTypes.string,
};

export default PopoverContent;