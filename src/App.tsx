import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DJList } from './pages/DJList';
import { DJ1 } from './pages/DJ1';
import { DJ2 } from './pages/DJ2';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste-dj" element={<DJList />} />
        <Route path="/dj-1" element={<DJ1 />} />
        <Route path="/dj-2" element={<DJ2 />} />
      </Routes>
    </Router>
  );
};