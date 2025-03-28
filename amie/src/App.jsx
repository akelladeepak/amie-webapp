// App.jsx
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Login from './pages/Login';
import MoodSelection from './pages/MoodSelection';
import Resources from './pages/Resources';
import MoodTracker from './pages/MoodTracker';
import RecordHistory from './pages/RecordHistory';
import ComingSoon from './pages/ComingSoon';
import LandingPage from './pages/LandingPage';

// Import Navbar
import Navbar from './components/Navbar';

function App() {
  // Keep mood logs in state at the top level so any page can read/write them.
  const [moodLogs, setMoodLogs] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-[#94D2BD]">
        <Routes>
          {/* Landing page at "/" */}
          <Route path="/" element={<LandingPage />} />

          {/* If you want your old login at "/login" */}
          <Route path="/login" element={<Login />} />

          {/* For the rest of the tool pages */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="pt-16">
                  <Routes>
                    <Route
                      path="/mood-selection"
                      element={
                        <MoodSelection
                          moodLogs={moodLogs}
                          setMoodLogs={setMoodLogs}
                        />
                      }
                    />
                    <Route path="/resources" element={<Resources />} />
                    <Route
                      path="/mood-tracker"
                      element={<MoodTracker moodLogs={moodLogs} />}
                    />
                    <Route
                      path="/record-history"
                      element={<RecordHistory moodLogs={moodLogs} />}
                    />
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
