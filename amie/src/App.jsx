import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Login from './pages/Login';
import MoodSelection from './pages/MoodSelection';
import Resources from './pages/Resources.jsx';
import MoodTracker from './pages/MoodTracker';
import RecordHistory from './pages/RecordHistory';
import ComingSoon from './pages/ComingSoon';

// Import Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
        {/* We only want to show the navbar on pages other than Login */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="pt-16">
                  <Routes>
                    <Route path="/mood-selection" element={<MoodSelection />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/mood-tracker" element={<MoodTracker />} />
                    <Route path="/record-history" element={<RecordHistory />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
