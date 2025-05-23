import { Todo, Mood } from '../types';

// Todos
export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// Moods
export const saveMoods = (moods: Mood[]): void => {
  localStorage.setItem('moods', JSON.stringify(moods));
};

export const loadMoods = (): Mood[] => {
  const storedMoods = localStorage.getItem('moods');
  return storedMoods ? JSON.parse(storedMoods) : [];
};