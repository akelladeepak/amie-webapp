import React from 'react';
import { Link } from 'react-router-dom';

function RecordHistory({ moodLogs }) {
  // Compute counts by mood
  const moodCounts = moodLogs.reduce((acc, log) => {
    acc[log.mood] = (acc[log.mood] || 0) + 1;
    return acc;
  }, {});

  // For emojis, fallback if needed
  const moodEmojis = {
    Happy: '😊',
    Sad: '😢',
    Angry: '😡',
    Anxious: '😰',
    Depressed: '😞',
    Lonely: '😞',
  };

  // Sort logs by most recent first (optional)
  const sortedLogs = [...moodLogs].sort((a, b) => b.id - a.id);

  // Turn our moodCounts into an array so we can map over them
  // (You can show only moods that have been used, or show all possible moods)
  const moodsUsed = Object.keys(moodCounts);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header: Title + Back Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Mood History</h1>
          <Link
            to="/mood-tracker"
            className="bg-white border rounded px-4 py-2 shadow-sm hover:shadow-md"
          >
            Back to Mood Tracker
          </Link>
        </div>

        {/* Moods Overview */}
        <h2 className="text-xl font-semibold mb-4">Your Moods Overview</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
          {moodsUsed.map((mood) => (
            <div key={mood} className="flex flex-col items-center">
              <span className="text-3xl">
                {moodEmojis[mood] || '😶'}
              </span>
              <span className="text-xl font-semibold">
                {moodCounts[mood]}
              </span>
              <span className="text-sm text-gray-600">{mood}</span>
            </div>
          ))}
        </div>

        {/* Mood Timeline */}
        <h2 className="text-xl font-semibold mb-4">Mood Timeline</h2>
        <div className="flex flex-col space-y-4">
          {sortedLogs.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center bg-white shadow rounded p-4"
            >
              {/* Date/Time Section */}
              <div className="w-20 flex flex-col items-center justify-center border-r pr-4 mr-4">
                {/* entry.date is something like "14 MAR". We can split on space if we want */}
                <span className="text-2xl font-bold">
                  {entry.date.split(' ')[0]}
                </span>
                <span className="text-sm uppercase tracking-wide">
                  {entry.date.split(' ')[1]}
                </span>
                <span className="text-sm">{entry.time}</span>
              </div>

              {/* Mood & Note Section */}
              <div>
                <div className="text-lg font-medium flex items-center gap-2 mb-1">
                  <span>{entry.emoji}</span>
                  <span>{entry.mood}</span>
                </div>
                {entry.note && (
                  <p className="text-gray-600">{entry.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecordHistory;
