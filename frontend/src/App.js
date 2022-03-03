import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import Demo from './pages/Demo';
import Home from './pages/Home';
import GlobalStyle, { lightTheme, darkTheme } from './GlobalStyle.style';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';

export const DarkModeContext = createContext(
  window.localStorage.getItem('theme') || 'light'
);

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <DarkModeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<Demo />} />
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
