// MoodTracker.js
import React, { useState } from 'react';

// Define the MoodTracker component that accepts moodLogs as a prop
function MoodTracker({ moodLogs }) {
  // Set up state to track the current view type (week, month, or year)
  const [viewType, setViewType] = useState('week');
  
  // Get today's date and create a normalized version (time set to 00:00:00)
  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // Mapping from mood names to CSS background color classes
  const moodMapping = {
    Happy: 'bg-orange-400',
    Sad: 'bg-blue-400',
    Angry: 'bg-red-400',
    Anxious: 'bg-purple-400',
    Depressed: 'bg-indigo-400',
    Lonely: 'bg-green-500'
  };

  // Check if the current view is either week or month
  if (viewType === 'week' || viewType === 'month') {
    let viewData = [];
    if (viewType === 'week') {
      // WEEK VIEW: Calculate the start of the week (Monday)
      const currentDay = today.getDay(); // getDay returns 0 for Sunday, 1 for Monday, etc.
      const diffToMonday = currentDay === 0 ? 6 : currentDay - 1;
      const monday = new Date(currentDate);
      monday.setDate(currentDate.getDate() - diffToMonday);
      
      // Build an array with 7 days starting from Monday
      for (let i = 0; i < 7; i++) {
        const dayDate = new Date(monday);
        dayDate.setDate(monday.getDate() + i);
        viewData.push({
          dayName: dayDate.toLocaleDateString('en-US', { weekday: 'short' }), // e.g., "Mon"
          date: dayDate,
          logs: [] // To hold mood logs for this day
        });
      }
      // Loop through mood logs and assign each to its corresponding day based on the date
      moodLogs.forEach(log => {
        const logDate = new Date(log.fullDate);
        viewData.forEach(day => {
          if (
            logDate.getFullYear() === day.date.getFullYear() &&
            logDate.getMonth() === day.date.getMonth() &&
            logDate.getDate() === day.date.getDate()
          ) {
            day.logs.push(log);
          }
        });
      });
    } else if (viewType === 'month') {
      // MONTH VIEW: Set up the days for the current month
      const year = today.getFullYear();
      const month = today.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();

      // Build an array for every day in the month
      for (let d = 1; d <= daysInMonth; d++) {
        const dayDate = new Date(year, month, d);
        viewData.push({
          dayName: dayDate.toLocaleDateString('en-US', { weekday: 'short' }), // Day of the week
          date: dayDate,
          logs: [] // To hold mood logs for this day
        });
      }
      // Assign each mood log to its day if the date matches
      moodLogs.forEach(log => {
        const logDate = new Date(log.fullDate);
        if (logDate.getFullYear() === year && logDate.getMonth() === month) {
          viewData.forEach(day => {
            if (logDate.getDate() === day.date.getDate()) {
              day.logs.push(log);
            }
          });
        }
      });
    }

    // Aggregate mood counts for all days in viewData to determine the overall mood
    const aggregatedCounts = {};
    viewData.forEach(item => {
      item.logs.forEach(log => {
        aggregatedCounts[log.mood] = (aggregatedCounts[log.mood] || 0) + 1;
      });
    });
    // Find the mood with the highest count to be the overall mood
    const overallMood = Object.keys(aggregatedCounts).length > 0
      ? Object.keys(aggregatedCounts).reduce((a, b) => aggregatedCounts[a] > aggregatedCounts[b] ? a : b)
      : null;
    const overallColor = overallMood ? moodMapping[overallMood] : '';

    // For each day, determine the most common mood (if any) and assign a color
    const viewMoodInfo = viewData.map(item => {
      let mood = null;
      let color = '';
      if (item.logs.length > 0) {
        // Count mood frequencies for the day
        const counts = item.logs.reduce((acc, log) => {
          acc[log.mood] = (acc[log.mood] || 0) + 1;
          return acc;
        }, {});
        // Determine the most frequent mood for the day
        mood = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        color = moodMapping[mood] || 'bg-gray-400';
      } else {
        // If there are no logs, mark the day as "Missed" if it is in the past or is today
        if (item.date < currentDate) {
          color = 'bg-gray-400';
          mood = 'Missed';
        } else if (
          item.date.getFullYear() === currentDate.getFullYear() &&
          item.date.getMonth() === currentDate.getMonth() &&
          item.date.getDate() === currentDate.getDate()
        ) {
          color = 'bg-gray-400';
          mood = 'Missed';
        } else {
          color = '';
          mood = '';
        }
      }
      return { ...item, mood, color };
    });

    // Render the UI for week/month view
    return (
      <div className="min-h-screen flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
          Mood Tracker
        </h1>
        {/* Header: Shows overall mood and a dropdown to change the view */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mr-4">
            Overall Mood for the {viewType.charAt(0).toUpperCase() + viewType.slice(1)}:
          </h2>
          <select
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            className="px-4 py-2 border border-black rounded"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        {/* Main container for mood circles and labels */}
        <div className="p-4 md:p-8 rounded max-w-3xl w-full text-center">
          {/* Display overall mood as a large circle */}
          <div className="flex justify-center mb-10">
            {overallMood ? (
              <div
                className={`w-32 h-32 lg:w-56 lg:h-56 rounded-full flex items-center justify-center ${overallColor} text-white text-base md:text-xl font-bold`}
              >
                {overallMood}
              </div>
            ) : (
              <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full flex items-center justify-center border-2 border-gray-400 text-gray-400 text-base md:text-xl font-bold">
                No Entry
              </div>
            )}
          </div>
          {/* Render a circle for each day with its mood and corresponding color */}
          <div className="flex flex-wrap justify-center gap-4">
            {viewMoodInfo.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.color ? (
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 rounded-full mb-2 flex items-center justify-center text-white ${item.color}`}
                  >
                    {viewType === 'week'
                      ? item.dayName
                      : item.date.getDate()}
                  </div>
                ) : (
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-full mb-2 flex items-center justify-center border-2 border-gray-400 text-gray-400">
                    {viewType === 'week'
                      ? item.dayName
                      : item.date.getDate()}
                  </div>
                )}
                <p className="text-xs md:text-sm text-gray-600">{item.mood}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (viewType === 'year') {
    // YEAR VIEW: Build and display data for each month of the current year
    const year = today.getFullYear();
    let yearData = [];
    // Loop through each month (0 to 11)
    for (let m = 0; m < 12; m++) {
      const monthDate = new Date(year, m, 1);
      const monthLabel = monthDate.toLocaleString('en-US', { month: 'long' });
      const lastDay = new Date(year, m + 1, 0);
      const daysInMonth = lastDay.getDate();
      let days = [];
      // Create an array for each day in the month
      for (let d = 1; d <= daysInMonth; d++) {
        const dayDate = new Date(year, m, d);
        days.push({
          dayName: dayDate.toLocaleDateString('en-US', { weekday: 'short' }),
          date: dayDate,
          logs: [] // To store mood logs for the day
        });
      }
      // Assign mood logs to the correct day in this month
      moodLogs.forEach(log => {
        const logDate = new Date(log.fullDate);
        if (logDate.getFullYear() === year && logDate.getMonth() === m) {
          days.forEach(day => {
            if (logDate.getDate() === day.date.getDate()) {
              day.logs.push(log);
            }
          });
        }
      });
      // For each day, calculate the most frequent mood and its associated color
      const daysWithMood = days.map(day => {
        let mood = null;
        let color = '';
        if (day.logs.length > 0) {
          const counts = day.logs.reduce((acc, log) => {
            acc[log.mood] = (acc[log.mood] || 0) + 1;
            return acc;
          }, {});
          mood = Object.keys(counts).reduce((a, b) =>
            counts[a] > counts[b] ? a : b
          );
          color = moodMapping[mood] || 'bg-gray-400';
        } else {
          // Mark day as "Missed" if there are no logs and the day is past or today
          if (day.date < currentDate) {
            color = 'bg-gray-400';
            mood = 'Missed';
          } else if (
            day.date.getFullYear() === currentDate.getFullYear() &&
            day.date.getMonth() === currentDate.getMonth() &&
            day.date.getDate() === currentDate.getDate()
          ) {
            color = 'bg-gray-400';
            mood = 'Missed';
          } else {
            color = '';
            mood = '';
          }
        }
        return { ...day, mood, color };
      });
      // Add the month's data to the yearData array
      yearData.push({ monthLabel, days: daysWithMood });
    }

    // Aggregate mood counts for the entire year to determine the overall mood
    const aggregatedCounts = {};
    moodLogs.forEach(log => {
      if (new Date(log.fullDate).getFullYear() === year) {
        aggregatedCounts[log.mood] = (aggregatedCounts[log.mood] || 0) + 1;
      }
    });
    const overallMood = Object.keys(aggregatedCounts).length > 0
      ? Object.keys(aggregatedCounts).reduce((a, b) => aggregatedCounts[a] > aggregatedCounts[b] ? a : b)
      : null;
    const overallColor = overallMood ? moodMapping[overallMood] : '';

    // Render the year view
    return (
      <div className="min-h-screen flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6 mt-4">
          Mood Tracker
        </h1>
        {/* Header for year view with overall mood and view type dropdown */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mr-4">
            Overall Mood for the Year:
          </h2>
          <select
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            className="px-4 py-2 border border-black rounded"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        {/* Main container for the year view */}
        <div className="p-4 md:p-8 rounded max-w-6xl w-full">
          <div className="flex justify-center mb-10">
            {overallMood ? (
              <div
                className={`w-32 h-32 lg:w-56 lg:h-56 rounded-full flex items-center justify-center ${overallColor} text-white text-base md:text-xl font-bold`}
              >
                {overallMood}
              </div>
            ) : (
              <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full flex items-center justify-center border-2 border-gray-400 text-gray-400 text-base md:text-xl font-bold">
                No Entry
              </div>
            )}
          </div>
          {/* Loop through each month and render its days */}
          <div className="flex flex-col gap-8">
            {yearData.map((month, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  {month.monthLabel}
                </h3>
                <div className="grid grid-cols-7 gap-4">
                  {month.days.map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {day.color ? (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${day.color}`}
                        >
                          {day.date.getDate()}
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-400 text-gray-400">
                          {day.date.getDate()}
                        </div>
                      )}
                      <p className="text-xs text-gray-600">{day.mood}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MoodTracker;
