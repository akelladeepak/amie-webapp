import React from 'react';

const moods = [
  {
    label: 'Happy',
    description: 'A feeling of joy and comfort',
    color: 'bg-orange-400',
  },
  {
    label: 'Sad',
    description: 'A feeling of sorrow or unhappiness',
    color: 'bg-blue-400',
  },
  {
    label: 'Angry',
    description: 'A strong feeling of displeasure or hostility',
    color: 'bg-red-400',
  },
  {
    label: 'Anxious',
    description: 'A feeling of worry or apprehension',
    color: 'bg-purple-400',
  },
  {
    label: 'Depressed',
    description: 'A mood matched by deep sadness and low energy',
    color: 'bg-indigo-400',
  },
  {
    label: 'Lonely',
    description: 'A sense of isolation or solitude',
    color: 'bg-green-500',
  },
];

function MoodSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Please select your current mood.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`rounded-lg p-6 text-white flex flex-col justify-center items-center cursor-pointer hover:shadow-xl transition-shadow ${mood.color}`}
          >
            <h2 className="text-xl font-semibold mb-2">{mood.label}</h2>
            <p className="text-center">{mood.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodSelection;
