import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: #fff;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  span {
    position: absolute;
    width: 25px;
    height: 3px;
    left: 8px;
    background: #1863ff;
    border-radius: 3px;
    transition: 0.5s;
    &:nth-child(1) {
      transform: translateY(-8px);
      width: 15px;
      left: 8px;
    }
    &:nth-child(2) {
      transform: translateY(8px);
      width: 10px;
      left: 8px;
    }
  }
  &.active {
    span {
      &:nth-child(3) {
        transform: translateX(40px);
      }
      &:nth-child(1) {
        width: 25px;
        transform: translateY(0px) rotate(45deg);
        transition-delay: 0.125s;
      }
      &:nth-child(2) {
        width: 25px;
        transform: translateY(0px) rotate(315deg);
        transition-delay: 0.25s;
      }
    }
  }
`;
const ToggleMenu = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Toggle className={toggle && 'active'} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </Toggle>
    </>
  );
};

export default ToggleMenu;
