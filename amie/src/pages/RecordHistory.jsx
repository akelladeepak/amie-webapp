import React from 'react';
import { Link } from 'react-router-dom';

function RecordHistory() {
  // Example data for the "Your Moods Overview" section
  const moodsOverview = [
    { mood: 'Sad', emoji: '😢', count: 3 },
    { mood: 'Happy', emoji: '😊', count: 1 },
    { mood: 'Anxious', emoji: '😰', count: 2 },
    { mood: 'Angry', emoji: '😡', count: 1 },
    { mood: 'Fearful', emoji: '😨', count: 1 },
    { mood: 'Disgust', emoji: '🤢', count: 1 },
  ];

  // Example data for the "Mood Timeline" section
  const moodTimeline = [
    {
      date: '14 MAR',
      time: '05:06 AM',
      mood: 'Angry',
      emoji: '😡',
      note: 'Dfhggg',
    },
    {
      date: '14 MAR',
      time: '04:51 AM',
      mood: 'Sad',
      emoji: '😢',
      note: 'T',
    },
    {
      date: '14 MAR',
      time: '02:01 AM',
      mood: 'Sad',
      emoji: '😢',
      note: 'Not very good',
    },
    {
      date: '14 MAR',
      time: '01:47 AM',
      mood: 'Anxious',
      emoji: '😰',
      note: '',
    },
    {
      date: '14 MAR',
      time: '01:47 AM',
      mood: 'Disgust',
      emoji: '🤢',
      note: '',
    },
  ];

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
          {moodsOverview.map((item) => (
            <div key={item.mood} className="flex flex-col items-center">
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-xl font-semibold">{item.count}</span>
              <span className="text-sm text-gray-600">{item.mood}</span>
            </div>
          ))}
        </div>

        {/* Mood Timeline */}
        <h2 className="text-xl font-semibold mb-4">Mood Timeline</h2>
        <div className="flex flex-col space-y-4">
          {moodTimeline.map((entry, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow rounded p-4"
            >
              {/* Date/Time Section */}
              <div className="w-20 flex flex-col items-center justify-center border-r pr-4 mr-4">
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
                {entry.note && <p className="text-gray-600">{entry.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecordHistory;
