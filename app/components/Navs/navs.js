import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavComponents(props) {
  const [positionClick, setPosition] = useState({ left: true, right: false });

  const navClickHandler = position => {
    if (position === 'left') {
      setPosition({ left: true, right: false });
    } else {
      setPosition({ left: false, right: true });
    }
  };
  const ListWrap = styled.li`
    display: flex;
    align-item: center;
    padding-top: 15px;
    overflow: hidden;
    transition: all 5s;
    transform: ${positionClick.left ? 'translateX(0px)' : 'translateX(100px)'};
  `;
  const navList = props.navs.map(el => (
    <ListWrap key={el.id}>
      <NavLink to={el.navURL} activeStyle={{ textDecoration: 'none' }}>
        {el.navName}
      </NavLink>
    </ListWrap>
  ));

  const UlWrap = styled.ul`
    width: 60%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-item: center;
    overflow: hidden;
  `;

  return (
    <UlWrap>
      <button type="button" onClick={navClickHandler.bind(null, 'left')}>
        {'<'}
      </button>
      {navList}
      <button type="button" onClick={navClickHandler.bind(null, 'right')}>
        {'>'}
      </button>
    </UlWrap>
  );
}

NavComponents.propTypes = {
  navs: PropTypes.array,
};

export default NavComponents;
