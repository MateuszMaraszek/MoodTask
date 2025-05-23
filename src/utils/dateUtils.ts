// Format date as YYYY-MM-DD
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Get today's date in YYYY-MM-DD format
export const getTodayDate = (): string => {
  return formatDate(new Date());
};

// Format date for display (e.g., "Monday, May 15")
export const formatDateForDisplay = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
};

// Check if two dates are the same day
export const isSameDay = (date1: string, date2: string): boolean => {
  return date1.split('T')[0] === date2.split('T')[0];
};

// Get dates for the past week
export const getPastWeekDates = (): string[] => {
  const dates: string[] = [];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(formatDate(date));
  }
  
  return dates;
};

// Get short day name from date (e.g., "Mon")
export const getShortDayName = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};