// MoodSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

const moods = [
  {
    label: 'Happy',
    description: 'A feeling of joy and comfort',
    color: 'bg-orange-400',
    emoji: '😊',
  },
  {
    label: 'Sad',
    description: 'A feeling of unhappiness',
    color: 'bg-blue-400',
    emoji: '😢',
  },
  {
    label: 'Angry',
    description: 'A strong feeling of displeasure',
    color: 'bg-red-400',
    emoji: '😡',
  },
  {
    label: 'Anxious',
    description: 'A sense of worry or unease',
    color: 'bg-purple-400',
    emoji: '😰',
  },
  {
    label: 'Depressed',
    description: 'A feeling of deep sadness',
    color: 'bg-indigo-400',
    emoji: '😞',
  },
  {
    label: 'Lonely',
    description: 'A sense of isolation or solitude',
    color: 'bg-green-500',
    emoji: '🫥',
  },
];

function MoodSelection({ moodLogs, setMoodLogs }) {
  const navigate = useNavigate();

  // Track which mood was clicked (but not logged yet)
  const [selectedMood, setSelectedMood] = useState(null);

  // First modal states
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [ventText, setVentText] = useState('');

  // Second modal state
  const [showSecondModal, setShowSecondModal] = useState(false);

  // Handle user clicking on a mood card
  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setVentText('');
    setShowFirstModal(true);
  };

  // Cancel button on first modal => close modal & do NOT log anything
  const handleCancel = () => {
    setShowFirstModal(false);
    setSelectedMood(null);
    setVentText('');
  };

  // Shared helper to create and store a mood log
  const logMood = (moodLabel, moodEmoji, note = '') => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const dateStr = `${day} ${month}`; // e.g. "14 MAR"

    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newLog = {
      id: Date.now(),
      fullDate: new Date().toISOString(),
      date: dateStr,
      time: timeStr,
      mood: moodLabel,
      emoji: moodEmoji,
      note: note,
    };

    setMoodLogs((prevLogs) => [...prevLogs, newLog]);
  };

  // Save Mood => log with ventText
  const handleSaveMood = () => {
    if (!selectedMood) return;
    logMood(selectedMood.label, selectedMood.emoji, ventText);
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  // Skip Details => log with empty note
  const handleSkipDetails = () => {
    if (!selectedMood) return;
    logMood(selectedMood.label, selectedMood.emoji, '');
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  // Second modal buttons => go to Coming Soon
  const handleVent = () => {
    navigate('/coming-soon');
  };

  const handleExercise = () => {
    navigate('/coming-soon');
  };

  // ------------------------------------------
  // Sort mood logs descending and take the 5 most recent
  // ------------------------------------------
  const sortedLogs = [...moodLogs].sort(
    (a, b) => new Date(b.fullDate) - new Date(a.fullDate)
  );
  const recentLogs = sortedLogs.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 relative">
      <h1 className="text-5xl font-bold text-gray-700 mb-24">
        How are you feeling right now?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 select-none">
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`rounded-lg px-12 pb-10 pt-6 text-white flex flex-col justify-center items-center cursor-pointer hover:shadow-xl transition-shadow ${mood.color} border border-black group`}
            onClick={() => handleMoodClick(mood)}
          >
            <h2 className="text-xl font-semibold mb-4">{mood.label}</h2>
            <span className="text-4xl mb-2 group-hover:scale-150 duration-300 ease-in-out">
              {mood.emoji}
            </span>
            {/* <p className="text-center">{mood.description}</p> */}
          </div>
        ))}
      </div>

      {/* FIRST MODAL */}
      {showFirstModal && selectedMood && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={handleCancel}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 select-none">
              Share More About Your Mood
            </h2>
            <div className="flex items-center text-2xl mb-4">
              <span className="mr-2">{selectedMood.emoji}</span>
              <span>{selectedMood.label}</span>
            </div>
            <p className="mb-4">Would you like to share any details?</p>
            <textarea
              value={ventText}
              onChange={(e) => setVentText(e.target.value)}
              placeholder="Tell us more about how you're feeling..."
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            {/* Button row */}
            <div className="flex justify-between items-center">
              {/* Left side: Skip Details */}
              <button
                onClick={handleSkipDetails}
                className="text-sm underline text-gray-700 rounded px-2 py-1 cursor-pointer"
              >
                Skip Details
              </button>

              {/* Right side: Cancel & Save Mood */}
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveMood}
                  className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                >
                  Save Mood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECOND MODAL */}
      {showSecondModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowSecondModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 select-none">
              Please choose below
            </h2>
            <p className="mb-6">
              Vent about your mood or proceed to a healthy exercise tailored to your feeling.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleVent}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Vent
              </button>
              <button
                onClick={handleExercise}
                className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
              >
                Exercise
              </button>
            </div>
            <button
              onClick={() => setShowSecondModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* RECENT MOODS SECTION */}
      <div className="mt-12 w-full max-w-md px-4">
        {/* Row with heading on the left, button on the right */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Moods</h2>
          <button
            onClick={() => navigate('/record-history')}
            className="text-blue-600 cursor-pointer relative group"
          >
            View Full History →
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {recentLogs.length === 0 ? (
          <p className="text-gray-600">No moods logged yet.</p>
        ) : (
          <ul className="space-y-3 text-left">
            {recentLogs.map((log) => (
              <li
                key={log.id}
                className="bg-white p-3 rounded shadow"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{log.emoji}</span>
                  <span className="font-semibold">{log.mood}</span>
                </div>
                <div className="text-gray-600 text-sm">
                  {log.date} {log.time}
                </div>
                {log.note && (
                  <div className="mt-1 text-gray-800">{log.note}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MoodSelection;
