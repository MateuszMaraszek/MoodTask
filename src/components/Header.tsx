import React from 'react';
import { SunMoon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SunMoon className="h-6 w-6" />
          <h1 className="text-xl font-bold">MoodTask</h1>
        </div>
        <div className="text-sm font-medium">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;