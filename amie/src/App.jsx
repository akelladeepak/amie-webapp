// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Login from './pages/Login';
import MoodSelection from './pages/MoodSelection';
import Resources from './pages/Resources';
import MoodTracker from './pages/MoodTracker';
import RecordHistory from './pages/RecordHistory';
import ComingSoon from './pages/ComingSoon';

// Import Navbar
import Navbar from './components/Navbar';

function App() {
  // Keep mood logs in state at the top level so any page can read/write them.
  const [moodLogs, setMoodLogs] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="pt-16">
                  <Routes>
                    {/* Pass moodLogs and setMoodLogs to pages that need them */}
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
                    {/* Pass moodLogs to MoodTracker */}
                    <Route path="/mood-tracker" element={<MoodTracker moodLogs={moodLogs} />} />
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
