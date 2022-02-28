import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.toggleBtnColor};
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0px;
    margin-left: 5px;

    .icon {
      font-size: 40px;
    }
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
            <FiSun className="icon" />
          </Button>
        ) : (
          <Button title="toggle off light mode">
            <FiMoon className="icon" />
          </Button>
        )}
      </div>
    </>
  );
};

export default ToggleDarkMode;
