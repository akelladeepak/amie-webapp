import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const moods = [
  {
    label: 'Happy',
    description: 'A feeling of joy and comfort',
    color: 'bg-orange-400',
    emoji: '😊',
  },
  {
    label: 'Sad',
    description: 'A feeling of sorrow or unhappiness',
    color: 'bg-blue-400',
    emoji: '😢',
  },
  {
    label: 'Angry',
    description: 'A strong feeling of displeasure or hostility',
    color: 'bg-red-400',
    emoji: '😡',
  },
  {
    label: 'Anxious',
    description: 'A feeling of worry or apprehension',
    color: 'bg-purple-400',
    emoji: '😰',
  },
  {
    label: 'Depressed',
    description: 'A mood matched by deep sadness and low energy',
    color: 'bg-indigo-400',
    emoji: '😞',
  },
  {
    label: 'Lonely',
    description: 'A sense of isolation or solitude',
    color: 'bg-green-500',
    emoji: '😞',
  },
];

function MoodSelection({ moodLogs, setMoodLogs }) {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ventText, setVentText] = useState('');
  const [lastLogId, setLastLogId] = useState(null);

  const handleMoodClick = (mood) => {
    // Log the mood immediately with the corrected date format (DD MMM)
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const dateStr = `${day} ${month}`; // e.g. "14 MAR"

    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newLog = {
      id: Date.now(), // Unique ID
      fullDate: new Date().toISOString(),
      date: dateStr,
      time: timeStr,
      mood: mood.label,
      emoji: mood.emoji,
      note: '',
    };

    setMoodLogs((prevLogs) => [...prevLogs, newLog]);
    setLastLogId(newLog.id);

    // Indicate that this mood has been logged
    setSelectedMood(mood.label);
    setShowModal(true);
  };

  const handleExercise = () => {
    // Navigate to the ComingSoon page for the exercise feature
    navigate('/coming-soon');
  };

  const handleVentSubmit = () => {
    // Update the note for the most recent mood log
    setMoodLogs((prevLogs) =>
      prevLogs.map((log) =>
        log.id === lastLogId ? { ...log, note: ventText } : log
      )
    );
    // Reset vent text and close the modal
    setVentText('');
    setShowModal(false);
    setSelectedMood(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 relative">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Please select your current mood.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`rounded-lg p-6 text-white flex flex-col justify-center items-center cursor-pointer hover:shadow-xl transition-shadow ${mood.color}`}
            onClick={() => handleMoodClick(mood)}
          >
            <h2 className="text-xl font-semibold mb-2">
              {mood.label}
            </h2>
            <p className="text-center">
              {selectedMood === mood.label
                ? 'Your feeling has been logged'
                : mood.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Please choose below</h2>
            <p className="mb-4">
              Vent about your mood or proceed to a healthy exercise tailored to your feeling.
            </p>

            {/* Vent textarea */}
            <textarea
              value={ventText}
              onChange={(e) => setVentText(e.target.value)}
              placeholder="Type here if you want to vent..."
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={handleVentSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Vent
              </button>
              <button
                onClick={handleExercise}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Exercise
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodSelection;
