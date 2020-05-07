import React from 'react';
import {
  GradientMask,
  WidthWrapper,
  Img,
  TextWrapper,
  H2,
  H4,
  A,
} from './Wrappers';

export default function ArticlePageUpgradeMask() {
  return (
    <>
      <GradientMask />
      <WidthWrapper>
        <div>
          <Img
            src="https://miro.medium.com/max/228/0*GLFDRIpcedGcmuSg"
            alt=""
            width="114"
            height="260"
          />
        </div>

        <TextWrapper>
          <H2>You read a lot. We like that.</H2>
          <H4>
            You’ve reached the end of your free member preview for this month.
            Become a member now for $5/month to read this story and get
            unlimited access to all of the best stories on Medium.
          </H4>
          {/* <H4>
            You’ve reached the end of your free member preview for this month.
            Upgrade for unlimited access.
          </H4> */}

          <div>
            <A to="">Upgrade</A>
          </div>
        </TextWrapper>
      </WidthWrapper>
    </>
  );
}
