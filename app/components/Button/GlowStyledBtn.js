import styled from 'styled-components';
import getColor from '../../staticData/colorSets';

const GlowStyledBtn = styled.button`
  font-size: 0px;
  cursor: pointer;

  fill: ${props => getColor(props.colorSet).color};

  transition: border-color 150ms ease;
  outline: 0;
  background: white;
  position: relative;
  border-radius: 50%;
  padding: 20% 2em;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #0000001a;
  margin: auto;
  background-clip: padding-box;
  display: flex;
  width: 58px;
  height: 58px;

  :hover {
    border-color: ${props => getColor(props.colorSet).color};
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: 0px;
    border-radius: inherit;
    background: radial-gradient(
      circle,
      ${props => getColor(props.colorSet).color} 50%,
      transparent 70%
    );
    opacity: 0;
  }
  :hover::before {
    border-color: red;
    animation: pulse 2s linear infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 0;
      margin: 0px;
    }
    50% {
      opacity: 1;
      margin: -5px;
    }
    80% {
      opacity: 0;
      margin: -12px;
    }
    100% {
      opacity: 0;
      margin: -12px;
    }
  }
`;

const Wrapper = styled.div`
  width: 70px;
`;

export { GlowStyledBtn, Wrapper };
