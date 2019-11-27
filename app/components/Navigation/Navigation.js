import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UIWrap } from './NavigationStyle';
import Arrow from './Arrow/Arrow';

function NavComponents(props) {
  const [positionClick, setPosition] = useState({ left: true });

  const navClickHandler = direction => {
    if (direction === 'left') {
      setPosition({ left: true });
    } else {
      setPosition({ left: false });
    }
  };

  const ListWrap = styled.li`
    display: flex;
    align-item: center;
    padding-top: 15px;
    overflow: hidden;
    transition: all 5s;
    transform: ${positionClick.left ? 'translateX(0px)' : 'translateX(-50px)'};
  `;

  const navList = props.navs.map(el => (
    <ListWrap key={el.id}>
      <NavLink to={el.navURL} activeStyle={{ textDecoration: 'none' }}>
        {el.navName}
      </NavLink>
    </ListWrap>
  ));

  return (
    <UIWrap>
      <Arrow direction="left" clicked={navClickHandler} />
      {navList}
      <Arrow direction="right" clicked={navClickHandler} />
    </UIWrap>
  );
}

NavComponents.propTypes = {
  navs: PropTypes.array,
};

export default NavComponents;
