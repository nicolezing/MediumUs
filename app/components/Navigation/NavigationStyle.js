import styled from 'styled-components';

const NavWrap = styled.nav`
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga' on;
  color: rgba(0, 0, 0, 0.84);
  font-size: 20px;
  line-height: 1.4;

  position: absolute;
  display: block;
  z-index: 500;
  width: 100%;
  font-size: 16px;
  background: #fff;
  color: rgba(0, 0, 0, 0.54);
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  top: 0;

  white-space: nowrap !important;

  line-height: 20px;
  font-size: 16px;

  display: flex;

  max-width: 98%;
`;

const NavflexWrap = styled.div`
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;

  min-width: 0 !important;
`;
const AllListWrap = styled.div`
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: start !important;
  -webkit-align-items: flex-start !important;
  -ms-flex-align: start !important;
  align-items: flex-start !important;
  white-space: nowrap !important;
  z-index: 200;
  transform: ${props => (props.left ? 'translateX(0px)' : 'translateX(-50px)')};
  transition: transform 200ms ease 0s;
`;

export { NavWrap, NavflexWrap, AllListWrap };
