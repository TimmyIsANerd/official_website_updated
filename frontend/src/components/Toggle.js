import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const ToggleDarkMode = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <div onClick={toggleTheme}>
        <h1>{theme}</h1>
      </div>
    </>
  );
};

export default ToggleDarkMode;
