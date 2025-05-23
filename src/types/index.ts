export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  date: string; // ISO string format
}

export interface Mood {
  date: string; // ISO string format
  rating: number; // 1-5 scale
}

export interface DailyData {
  date: string;
  totalTasks: number;
  completedTasks: number;
  mood?: number;
}