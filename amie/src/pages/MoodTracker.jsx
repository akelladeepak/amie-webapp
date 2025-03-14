// MoodTracker.js
import React from 'react';

function MoodTracker({ moodLogs }) {
  // Calculate today's date (with no time) for comparison
  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // Calculate the start of the week (Monday)
  const currentDay = today.getDay(); // Sunday = 0, Monday = 1, etc.
  const diffToMonday = currentDay === 0 ? 6 : currentDay - 1;
  const monday = new Date(currentDate);
  monday.setDate(currentDate.getDate() - diffToMonday);

  // Create an array for each day of the week (Mon-Sun)
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    let dayDate = new Date(monday);
    dayDate.setDate(monday.getDate() + i);
    weekDays.push({
      dayName: dayDate.toLocaleDateString('en-US', { weekday: 'short' }),
      date: dayDate,
      logs: [],
    });
  }

  // Assign mood logs to their respective day in the week.
  // (Assumes each log's fullDate can be parsed into a Date object.)
  moodLogs.forEach(log => {
    const logDate = new Date(log.fullDate);
    weekDays.forEach(day => {
      if (
        logDate.getFullYear() === day.date.getFullYear() &&
        logDate.getMonth() === day.date.getMonth() &&
        logDate.getDate() === day.date.getDate()
      ) {
        day.logs.push(log);
      }
    });
  });

  // A mapping from mood label to its corresponding color.
  const moodMapping = {
    Happy: 'bg-orange-400',
    Sad: 'bg-blue-400',
    Angry: 'bg-red-400',
    Anxious: 'bg-purple-400',
    Depressed: 'bg-indigo-400',
    Lonely: 'bg-green-500'
  };

  // Compute daily mood info.
  const dailyMoodInfo = weekDays.map(day => {
    let mood = null;
    let color = '';
    if (day.logs.length > 0) {
      // Count frequency of moods for the day.
      const counts = day.logs.reduce((acc, log) => {
        acc[log.mood] = (acc[log.mood] || 0) + 1;
        return acc;
      }, {});
      // Determine the mood with the highest frequency.
      mood = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      color = moodMapping[mood] || 'bg-gray-400';
    } else {
      // No logs found for the day.
      if (day.date < currentDate) {
        // Past day with no log: mark as missed.
        color = 'bg-gray-400';
        mood = 'Missed';
      } else if (
        day.date.getFullYear() === currentDate.getFullYear() &&
        day.date.getMonth() === currentDate.getMonth() &&
        day.date.getDate() === currentDate.getDate()
      ) {
        // Today with no entry can also be considered missed.
        color = 'bg-gray-400';
        mood = 'Missed';
      } else {
        // Future day: show an outlined circle (no fill color).
        color = '';
        mood = '';
      }
    }
    return { ...day, mood, color };
  });

  // Compute overall weekly mood from all logs in the current week.
  const weeklyCounts = {};
  weekDays.forEach(day => {
    day.logs.forEach(log => {
      weeklyCounts[log.mood] = (weeklyCounts[log.mood] || 0) + 1;
    });
  });
  const overallMood = Object.keys(weeklyCounts).length > 0 ? 
    Object.keys(weeklyCounts).reduce((a, b) =>
      weeklyCounts[a] > weeklyCounts[b] ? a : b
    ) : null;
  const overallColor = overallMood ? moodMapping[overallMood] : '';

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        One-Week Mood Tracker
      </h1>
      <div className="p-8 rounded max-w-3xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Overall Mood for the Week:</h2>
        <div className="flex justify-center mb-8">
          {overallMood ? (
            <div className={`w-32 h-32 rounded-full flex items-center justify-center ${overallColor} text-white text-xl font-bold`}>
              {overallMood}
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-gray-400 text-gray-400 text-xl font-bold">
              No Entry
            </div>
          )}
        </div>
        <div className="flex justify-around">
          {dailyMoodInfo.map((day) => (
            <div key={day.dayName} className="flex flex-col items-center">
              {day.color ? (
                <div className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center text-white ${day.color}`}>
                  {day.dayName}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full mb-2 flex items-center justify-center border-2 border-gray-400 text-gray-400">
                  {day.dayName}
                </div>
              )}
              <p className="text-sm text-gray-600">{day.mood}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;
