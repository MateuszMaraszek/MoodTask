import React from 'react';
import Header from './Header';
import MoodTracker from './MoodTracker';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import MoodChart from './MoodChart';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Tasks */}
          <div className="md:col-span-2 space-y-6">
            <TodoForm />
            <TodoList />
          </div>
          
          {/* Right Column - Mood & Stats */}
          <div className="space-y-6">
            <MoodTracker />
            <MoodChart />
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-4 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          MoodTask &copy; {new Date().getFullYear()} - Track your tasks and mood
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;