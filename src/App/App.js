import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BuzOne from '../components/BuzOne';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/bizone" replace />} />
      <Route path="/bizone" element={<BuzOne />} />
    </Routes>
  );
}

export default App;