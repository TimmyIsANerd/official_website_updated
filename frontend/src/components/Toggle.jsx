import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.toggleBtn};
  color: ${({ theme }) => theme.toggleBtnColor};
  padding: 8px;
  border-radius: 5px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 13px;
    margin-left: 5px;
  }
  @media screen and (min-width: 481px) and (max-width: 769px) {
    margin-right: 20px;
  }
`;
const ToggleDarkMode = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <div onClick={toggleTheme}>
        {theme === 'dark' ? (
          <Button title="toggle on light mode">
            <FiSun />
          </Button>
        ) : (
          <Button title="toggle off light mode">
            <FiMoon />
          </Button>
        )}
      </div>
    </>
  );
};

export default ToggleDarkMode;
