import React from 'react';
import { useAppContext } from '../context/AppContext';
import TodoItem from './TodoItem';
import { getTodayDate, formatDateForDisplay } from '../utils/dateUtils';

const TodoList: React.FC = () => {
  const { todosForDate } = useAppContext();
  const today = getTodayDate();
  const todaysTodos = todosForDate(today);
  
  if (todaysTodos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {formatDateForDisplay(today)}'s Tasks
        </h2>
        <div className="text-center py-6 text-gray-500">
          <p>No tasks for today yet.</p>
          <p className="text-sm mt-2">Add a task to get started!</p>
        </div>
      </div>
    );
  }

  const completedTodos = todaysTodos.filter(todo => todo.completed);
  const incompleteTodos = todaysTodos.filter(todo => !todo.completed);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">
          {formatDateForDisplay(today)}'s Tasks
        </h2>
        <div className="text-sm text-gray-500 mt-1">
          {completedTodos.length}/{todaysTodos.length} completed
        </div>
      </div>
      
      {incompleteTodos.length > 0 && (
        <div className="mb-3">
          {incompleteTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Completed
          </div>
          {completedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;