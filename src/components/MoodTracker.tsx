import React from 'react';
import { useAppContext } from '../context/AppContext';

const MoodTracker: React.FC = () => {
  const { setMood, getTodaysMood } = useAppContext();
  const currentMood = getTodaysMood();

  const moods = [
    { emoji: '😞', label: 'Very Sad', value: 1 },
    { emoji: '😔', label: 'Sad', value: 2 },
    { emoji: '😐', label: 'Neutral', value: 3 },
    { emoji: '😊', label: 'Happy', value: 4 },
    { emoji: '😄', label: 'Very Happy', value: 5 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">How are you feeling today?</h2>
      
      <div className="flex justify-between items-center">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setMood(mood.value)}
            className={`flex flex-col items-center p-2 rounded-full transition-all duration-300 hover:bg-blue-50 ${
              currentMood === mood.value 
                ? 'bg-blue-100 scale-110 shadow-sm' 
                : 'bg-gray-50'
            }`}
            title={mood.label}
            aria-label={`Set mood to ${mood.label}`}
          >
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-xs font-medium text-gray-600">
              {currentMood === mood.value && mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;