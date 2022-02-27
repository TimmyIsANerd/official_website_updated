import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, toggleTheme];
};
