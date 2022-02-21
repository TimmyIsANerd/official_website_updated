import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
