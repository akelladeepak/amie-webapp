import React from 'react';

function MoodTracker() {
  // Example data for each day
  const days = [
    { day: 'Mon', mood: 'Happy', color: 'bg-orange-400' },
    { day: 'Tue', mood: 'Sad', color: 'bg-blue-400' },
    { day: 'Wed', mood: 'Happy', color: 'bg-orange-400' },
    { day: 'Thu', mood: 'Angry', color: 'bg-red-400' },
    { day: 'Fri', mood: 'Happy', color: 'bg-orange-400' },
    { day: 'Sat', mood: 'Lonely', color: 'bg-green-400' },
    { day: 'Sun', mood: 'Depressed', color: 'bg-indigo-400' },
  ];

  // Example logic to find "overall mood" for the week (just picks the most frequent).
  const moodCount = days.reduce((acc, d) => {
    acc[d.mood] = (acc[d.mood] || 0) + 1;
    return acc;
  }, {});
  const overallMood = Object.keys(moodCount).reduce((a, b) =>
    moodCount[a] > moodCount[b] ? a : b
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        One-Week Mood Tracker
      </h1>
      <div className="p-8 rounded max-w-3xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Overall Mood for the Week:</h2>
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-orange-400 text-white text-xl font-bold">
            {overallMood}
          </div>
        </div>
        <div className="flex justify-around">
          {days.map((dayObj) => (
            <div key={dayObj.day} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center text-white ${dayObj.color}`}
              >
                {dayObj.day}
              </div>
              <p className="text-sm text-gray-600">{dayObj.mood}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;
