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
