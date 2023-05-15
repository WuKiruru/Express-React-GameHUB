import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Game01 from './components/Game01';
import Game02 from './components/Game02';
import Records from './components/Records';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game01" element={<Game01 />} />
        <Route path="/game02" element={<Game02 />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
