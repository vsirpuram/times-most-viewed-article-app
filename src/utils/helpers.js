/**
 * Formats a date string into a human-readable format.
 * @param {string} inputDate - The input date string in the format "YYYY-MM-DD".
 * @returns {string} The formatted date string in the format "Month Day, Year".
 */
const formatDate = (inputDate) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Split the input date string into year, month, and day
  const [year, month, day] = inputDate.split('-');

  // Create a Date object using the input date
  const date = new Date(year, month - 1, day);

  // Get the month name using the months array
  const monthName = months[date.getMonth()];

  // Get the day of the month
  const dayOfMonth = date.getDate();

  // Get the year
  const formattedYear = date.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${monthName} ${dayOfMonth}, ${formattedYear}`;

  return formattedDate;
};

/**
 * Generates a unique key string.
 * @returns {string} A unique key string generated using Math.random() and Date.
 */
const generateUniqueKey = () => `key-${
  Math.random().toString(36).substr(2, 16) + new Date().getUTCMilliseconds()
}`;

export { formatDate, generateUniqueKey };
