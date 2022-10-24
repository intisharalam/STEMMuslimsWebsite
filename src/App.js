import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import React from 'react';

export default function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="" exact element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
  );
}

