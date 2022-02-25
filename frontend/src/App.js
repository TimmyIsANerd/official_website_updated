import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { darkTheme, lightTheme } from './GlobalStyle.style'
import Demo from './pages/Demo';
import Home from './pages/Home';



function App() {
const [theme, setTheme] = useState('dark') ;

const themeToggler = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light'); 
}

  return (
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle/>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Demo />} />
      </Routes>
    </Router>
    
    
      </ThemeProvider>
  
  );
}

export default App;
