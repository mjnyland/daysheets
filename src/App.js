import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Flights from './components/Flights';
import Personalized from './components/Personalized';
import Exports from './components/Exports';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BottomCTA from './components/BottomCTA';
import Mobile from './components/Mobile';
import GuestList from './components/GuestList';
import TravelProfile from './components/TravelProfile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Prices from './pages/prices';
import Help from './pages/help';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/pricing" element={<Prices />} />
    </Routes>

    </BrowserRouter>

  );
}

export default App;
