import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Todo, Mood, DailyData } from '../types';
import { loadTodos, saveTodos, loadMoods, saveMoods } from '../utils/localStorage';
import { getTodayDate, getPastWeekDates } from '../utils/dateUtils';

interface AppContextType {
  todos: Todo[];
  moods: Mood[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setMood: (rating: number) => void;
  getTodaysMood: () => number | undefined;
  getWeeklyData: () => DailyData[];
  todosForDate: (date: string) => Todo[];
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos());
  const [moods, setMoods] = useState<Mood[]>(loadMoods());

  // Save to localStorage whenever todos or moods change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    saveMoods(moods);
  }, [moods]);

  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date: getTodayDate(),
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Set today's mood
  const setMood = (rating: number) => {
    const today = getTodayDate();
    const existingMoodIndex = moods.findIndex((mood) => mood.date === today);

    if (existingMoodIndex >= 0) {
      // Update existing mood
      const updatedMoods = [...moods];
      updatedMoods[existingMoodIndex] = { date: today, rating };
      setMoods(updatedMoods);
    } else {
      // Add new mood
      setMoods([...moods, { date: today, rating }]);
    }
  };

  // Get today's mood rating
  const getTodaysMood = (): number | undefined => {
    const today = getTodayDate();
    const todaysMood = moods.find((mood) => mood.date === today);
    return todaysMood?.rating;
  };

  // Get todos for a specific date
  const todosForDate = (date: string): Todo[] => {
    return todos.filter((todo) => todo.date === date);
  };

  // Get data for the weekly chart
  const getWeeklyData = (): DailyData[] => {
    const weekDates = getPastWeekDates();
    
    return weekDates.map(date => {
      const dayTodos = todos.filter(todo => todo.date === date);
      const dayMood = moods.find(mood => mood.date === date);
      
      return {
        date,
        totalTasks: dayTodos.length,
        completedTasks: dayTodos.filter(todo => todo.completed).length,
        mood: dayMood?.rating
      };
    });
  };

  const value = {
    todos,
    moods,
    addTodo,
    toggleTodo,
    deleteTodo,
    setMood,
    getTodaysMood,
    getWeeklyData,
    todosForDate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
