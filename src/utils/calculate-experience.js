export const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const end = new Date();
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  return `${years}.${months < 0 ? 12 + months : months}`;
};
