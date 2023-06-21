export const getDate = () => {
  const date = new Date();
  const dateString = date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });

  const day = dateString.slice(0, -3).replace('.', '');
  const weekday = date.toLocaleString('ru-RU', { weekday: 'long' });
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return {day, weekday, hours, minutes}
};
