import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Homepage';
import PortfolioItem from './components/canvas/Canvas';
import PrintItem from './components/prints/prints';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/images" element={<PortfolioItem />} />
        <Route path="/prints" element={<PrintItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;