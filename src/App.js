import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

export default function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="" exact element={<LandingPage />} />
          </Routes>
        </Router>
      </>
  );
}

