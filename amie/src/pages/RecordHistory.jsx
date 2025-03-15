import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecordHistory({ moodLogs }) {
  // --------------------------------------------------------------------------
  // 1) Convert each log's date/time into a real Date object
  // --------------------------------------------------------------------------
  function parseLogDate(log) {
    // Example log.date = "14 MAR"
    // Example log.time = "05:06 AM"
    const [dayStr, monthAbbrev] = log.date.split(' ');
    const day = parseInt(dayStr, 10);

    // Map month abbreviations to numeric month index (0-based)
    const monthMap = {
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DEC: 11,
    };
    const monthIndex = monthMap[monthAbbrev] ?? 0;

    // Parse time string "05:06 AM" => hour=5, minute=6
    const [timePart, ampm] = log.time.split(' '); // e.g. ["05:06", "AM"]
    const [hourStr, minuteStr] = timePart.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    // Convert to 24-hour
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;

    // Assume current year if not stored in the log
    const year = new Date().getFullYear();

    // Build a full date
    const fullDate = new Date(year, monthIndex, day, hour, minute);
    return { ...log, fullDate };
  }

  // We'll parse once and memoize for performance
  const logsWithDates = useMemo(() => {
    return moodLogs.map(parseLogDate);
  }, [moodLogs]);

  // --------------------------------------------------------------------------
  // 2) Provide filter options: "All Time", "Last 7 Days", "Last 30 Days", "Custom Range"
  // --------------------------------------------------------------------------
  const [timeFilter, setTimeFilter] = useState('all'); // "all" | "7" | "30" | "custom"

  // For custom date range
  const [startDate, setStartDate] = useState(''); // e.g. "2025-03-10"
  const [endDate, setEndDate] = useState('');   // e.g. "2025-03-14"

  // If user changes filter away from "custom," reset the date fields (optional)
  useEffect(() => {
    if (timeFilter !== 'custom') {
      setStartDate('');
      setEndDate('');
    }
  }, [timeFilter]);

  // --------------------------------------------------------------------------
  // 3) Filter logs by the selected timeframe or custom date range
  // --------------------------------------------------------------------------
  const filteredLogs = useMemo(() => {
    if (timeFilter === 'all') {
      // Show all logs
      return logsWithDates;
    }

    const now = new Date();

    if (timeFilter === '7') {
      // Last 7 days
      return logsWithDates.filter((log) => {
        const diffMs = now - log.fullDate;
        return diffMs <= 7 * 24 * 60 * 60 * 1000; // 7 days in ms
      });
    }

    if (timeFilter === '30') {
      // Last 30 days
      return logsWithDates.filter((log) => {
        const diffMs = now - log.fullDate;
        return diffMs <= 30 * 24 * 60 * 60 * 1000;
      });
    }

    if (timeFilter === 'custom') {
      // Use user-selected date range
      if (!startDate || !endDate) {
        return [];
      }
      // Convert input strings like "2025-03-10" to real Date objects
      const from = new Date(startDate);
      const to = new Date(endDate);
      // Adjust the 'to' date to include the entire day (set to 23:59:59.999)
      to.setHours(23, 59, 59, 999);

      return logsWithDates.filter((log) => {
        return log.fullDate >= from && log.fullDate <= to;
      });
    }

    // Fallback
    return logsWithDates;
  }, [logsWithDates, timeFilter, startDate, endDate]);

  // --------------------------------------------------------------------------
  // 4) Sort logs by newest first (optional)
  // --------------------------------------------------------------------------
  const sortedLogs = useMemo(() => {
    return [...filteredLogs].sort((a, b) => b.fullDate - a.fullDate);
  }, [filteredLogs]);

  // --------------------------------------------------------------------------
  // 5) Pagination (7 logs per page)
  // --------------------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const totalLogs = sortedLogs.length;
  const totalPages = Math.ceil(totalLogs / pageSize);

  // If user changes filter or date range, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [timeFilter, startDate, endDate]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageLogs = sortedLogs.slice(startIndex, endIndex);

  // --------------------------------------------------------------------------
  // 6) Mood Overview for the filtered logs
  // --------------------------------------------------------------------------
  const moodCounts = useMemo(() => {
    const counts = {};
    for (let log of filteredLogs) {
      counts[log.mood] = (counts[log.mood] || 0) + 1;
    }
    return counts;
  }, [filteredLogs]);

  // For emojis fallback if needed
  const moodEmojis = {
    Happy: '😊',
    Sad: '😢',
    Angry: '😡',
    Anxious: '😰',
    Depressed: '😞',
    Lonely: '🫥',
  };

  // Turn moodCounts into an array for display
  const moodsUsed = Object.keys(moodCounts);

  return (
    <div className="min-h-screen p-6 text-gray-700 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header: Title + Back Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold ">Your Mood History</h1>
          <Link
            to="/mood-tracker"
            className="text-blue-600 cursor-pointer relative group inline-block"
          >
            Back to Mood Tracker →
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600"></span>
          </Link>
        </div>

        {/* Filter Options */}
        <div className="mb-4">
          <label className="mr-2 font-semibold">Filter by timeframe:</label>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="border rounded p-1"
          >
            <option value="all">All Time</option>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        {/* If "custom" is selected, show two date inputs for a custom range */}
        {timeFilter === 'custom' && (
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <div>
              <label className="mr-2">Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border p-1 rounded"
              />
            </div>
            <div>
              <label className="mr-2">End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-1 rounded"
              />
            </div>
          </div>
        )}

        {/* Moods Overview (filtered) */}
        <h2 className="text-xl font-semibold mb-4">Your Moods Overview</h2>
        {moodsUsed.length > 0 ? (
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
        ) : (
          <p className="mb-8 text-gray-600">No logs in this timeframe.</p>
        )}

        {/* Mood Timeline (paginated) */}
        <h2 className="text-xl font-semibold mb-4">Mood Timeline</h2>
        {currentPageLogs.length === 0 ? (
          <p className="text-gray-600">No logs found for this timeframe.</p>
        ) : (
          <div className="flex flex-col space-y-4 mb-4">
            {currentPageLogs.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center bg-white shadow rounded p-4"
              >
                {/* Date/Time Section */}
                <div className="w-20 flex flex-col items-center justify-center border-r pr-4 mr-4">
                  {/* entry.date might be "14 MAR" */}
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
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              &larr; Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecordHistory;
