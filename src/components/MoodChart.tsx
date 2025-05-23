import React from 'react';
import { useAppContext } from '../context/AppContext';
import { getShortDayName } from '../utils/dateUtils';

const MoodChart: React.FC = () => {
  const { getWeeklyData } = useAppContext();
  const weeklyData = getWeeklyData();
  
  const maxTasks = Math.max(...weeklyData.map(day => day.totalTasks || 0), 5);
  
  // Emoji mapping for mood ratings
  const moodEmojis = ['', '😞', '😔', '😐', '😊', '😄'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Mood & Tasks</h2>
      
      <div className="flex items-end justify-between h-44 gap-1">
        {weeklyData.map((day, index) => {
          // Calculate heights as percentages
          const completedHeight = day.completedTasks 
            ? (day.completedTasks / maxTasks) * 100 
            : 0;
          
          const incompletedHeight = day.totalTasks 
            ? ((day.totalTasks - day.completedTasks) / maxTasks) * 100 
            : 0;
          
          const isToday = index === weeklyData.length - 1;
          
          return (
            <div key={day.date} className="flex flex-col items-center flex-1">
              {/* Mood Emoji */}
              <div className="mb-2 text-xl h-7">
                {day.mood ? moodEmojis[day.mood] : ''}
              </div>
              
              {/* Bar Chart */}
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full max-w-[30px] mb-2">
                  {/* Incompleted Tasks */}
                  {incompletedHeight > 0 && (
                    <div 
                      className="absolute bottom-0 w-full bg-gray-200 rounded-t-sm"
                      style={{ 
                        height: `${incompletedHeight}%`,
                        bottom: `${completedHeight}%`
                      }}
                    />
                  )}
                  
                  {/* Completed Tasks */}
                  {completedHeight > 0 && (
                    <div 
                      className="absolute bottom-0 w-full bg-green-400 rounded-t-sm"
                      style={{ height: `${completedHeight}%` }}
                    />
                  )}
                </div>
                
                {/* Day Label */}
                <div className={`text-xs font-medium ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>
                  {getShortDayName(day.date)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-6 text-xs gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 mr-1 rounded-sm"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-200 mr-1 rounded-sm"></div>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default MoodChart;