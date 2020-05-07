import styled from 'styled-components';

export const GradientMask = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  height: 150px;
  margin: -140px auto 10px auto;
  position: relative;
  display: block;
  max-width: 760px;
`;

export const WidthWrapper = styled.div`
  max-width: 760px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  margin: auto;
  border-radius: 4px;
  display: flex;
  // flex-direction: row;
`;

export const Img = styled.img`
  padding-bottom: 16px;
`;

export const TextWrapper = styled.div`
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  line-height: 36px;
  font-size: 32px;
  font-weight: 500;
  font-family: medium-marketing-display-font, Georgia, Cambria,
    'Times New Roman', Times, serif;
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
`;

export const H4 = styled.h4`
  font-weight: 300;
  color: rgba(0, 0, 0, 0.54);
  line-height: 24px;
  font-size: 18px;
  font-family: medium-content-sans-serif-font, 'Lucida Grande',
    'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif;
  margin-top: 8px;
  margin-bottom: 28px;
`;

export const A = styled.a`
  display: inline-block;
  width: 182px;
  line-height: 20px;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.9);

  color: rgba(255, 255, 255, 1);
  letter-spacing: 0px;
  text-decoration: none;
  text-align: center;
`;
