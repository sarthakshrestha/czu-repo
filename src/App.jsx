import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import PortfolioItem from './components/canvas/Canvas';
import PrintItem from './components/prints/prints';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/images" element={<PortfolioItem />} />
        <Route path="/prints" element={<PrintItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;