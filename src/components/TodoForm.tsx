import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-sm transition-colors duration-200 flex items-center"
          disabled={!text.trim()}
        >
          <PlusCircle className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;