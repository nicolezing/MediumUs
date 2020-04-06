import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 60px 0;
`;
export const SectionWrapper = styled.section`
  margin: auto;
  @media screen and (min-width: 1080px) {
    padding: 0 64px;
    max-width: 1320px;
  }
  @media screen and (max-width: 1080px) {
    max-width: 1320px;
    padding: 0 64px;
  }
  @media screen and (max-width: 1080px) {
    max-width: 904px;
    padding: 0 48px;
  }
  @media screen and (max-width: 728px) {
    max-width: 728px;
    padding: 0 24px;
  }
`;

export const ListContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.54);
  padding-bottom: 48px;
  margin-bottom: 32px;
  justify-content: space-between;
  display: flex;
  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const ListWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 -12px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainLogoWrapper = styled.span`
  fill: rgba(255, 255, 255, 0.98);
  display: normal;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const LogoWrapper = styled.span`
  fill: rgba(255, 255, 255, 0.98);
  display: normal;
  @media screen and (min-width: 401px) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding-top: 8px;
  & a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 15.8px;
  }
  @media screen and (max-width: 727.98px) {
    width: 140px;
  }
`;

export const ItemWrapper = styled.div`
  flex: 1 1 0;
  margin: 0 12px;
`;

export const HeaderWrapper = styled.div`
  padding-bottom: 12px;
`;

export const Header = styled.h4`
  letter-spacing: -0.32px;
  margin: 0;
  font-size: 21.6px;
  color: rgba(255, 255, 255, 0.98);
`;
export const Detail = styled.p`
  margin: 0;
  font-size: 15.8px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0px;
  line-height: 20px;
`;

export const Mark = styled.a`
  text-decoration: underline;
  color: inherit;
`;
