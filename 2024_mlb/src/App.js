import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TeamBatting from './components/TeamBatting';
import PlayerBatting from './components/PlayerBatting';
import PlayerPitching from './components/PlayerPitching';
import AssistedAnalysis from './components/AssistedAnalysis';
import Navbar from './components/Navbar';
import TeamPitching from './components/TeamPitching';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TeamBatting" element={<TeamBatting />} />
        <Route path="/TeamPitching" element={<TeamPitching />} />
        <Route path="/PlayerBatting" element={<PlayerBatting />} />
        <Route path="/PlayerPitching" element={<PlayerPitching />} />
        <Route path="/AssistedAnalysis" element={<AssistedAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
