import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useAppContext();

  return (
    <div className="group flex items-center gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border ${
          todo.completed 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-300 hover:border-blue-400'
        } flex items-center justify-center transition-all duration-200`}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && <Check className="text-white w-4 h-4" />}
      </button>
      
      <span 
        className={`flex-1 ${
          todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
        } transition-all duration-200`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;